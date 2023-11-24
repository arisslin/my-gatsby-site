import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const pageTitle = 'Home';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={pageTitle}>
      <p>This is for testing</p>
      <StaticImage
        alt='Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera'
        src='../images/clifford.jpeg'
        width={300}
      />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo pageTitle={pageTitle} />;
