import { useStaticQuery, graphql } from 'gatsby';

type SiteMetaData = {
  title: string;
};

export type SiteMetaDataQuery = {
  site: {
    siteMetadata: SiteMetaData;
  };
};

export const useSiteMetadata = (): SiteMetaData => {
  const data: SiteMetaDataQuery = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return data.site.siteMetadata;
};