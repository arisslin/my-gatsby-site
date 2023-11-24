import * as React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { HeadFC, PageProps, graphql, Link } from 'gatsby';
import { blogList } from './blog.module.css';

type DataProps = {
  allMdx: {
    nodes: {
      frontmatter: {
        date: string;
        title: string;
        slug: string;
      };
      id: string;
      excerpt: string;
    }[];
  };
};

const BlogPage = ({ data }: PageProps<DataProps>) => {
  console.log(data);

  return (
    <Layout pageTitle='My Blog Posts'>
      <ul className={blogList}>
        {data.allMdx.nodes.map((node) => (
          <li key={node.id}>
            <article>
              <h2>
                <Link to={`/blog/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Posted: {node.frontmatter.date}</p>
              <p>{node.excerpt} ...</p>
            </article>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "DD.MM.YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo pageTitle='My Blog Posts' />;

export default BlogPage;
