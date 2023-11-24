import { graphql, useStaticQuery } from 'gatsby';

type LegalPage = {
  frontmatter: {
    date: string;
    title: string;
    slug: string;
  };
  id: string;
  excerpt: string;
};

type LegalPagesQuery = {
  allMdx: {
    nodes: LegalPage[];
  };
};

export const useLegalPages = (): LegalPage[] => {
  const data = useStaticQuery(graphql`
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
  `);

  return data.allMdx.nodes;
};
