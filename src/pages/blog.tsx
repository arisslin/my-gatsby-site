import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { HeadFC, PageProps, graphql } from 'gatsby';

type DataProps = {
  allFile: {
    nodes: {
      name: string;
    }[];
  };
};

const BlogPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout pageTitle='My Blog Posts'>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo pageTitle='My Blog Posts' />;

export default BlogPage;
