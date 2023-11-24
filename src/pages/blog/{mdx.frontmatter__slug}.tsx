import * as React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { HeadProps, PageProps, graphql } from 'gatsby';

type DataProps = {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
    };
  };
};

const BlogPost = ({ data, children }: PageProps<DataProps>) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
      }
    }
  }
`;

export const Head = ({ data }: HeadProps<DataProps>) => (
  <Seo pageTitle={data.mdx.frontmatter.title} />
);

export default BlogPost;
