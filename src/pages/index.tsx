import { HeadFC, Link, PageProps, graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

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

const pageTitle = 'Home';

const IndexPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout pageTitle={pageTitle}>
      <ul>
        {data.allMdx.nodes.map((node) => (
          <li key={node.id}>
            <article>
              <h2>
                <Link to={`${node.frontmatter.slug}`}>
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

export default IndexPage;

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

export const Head: HeadFC = () => <Seo pageTitle={pageTitle} />;
