import * as React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

type SeoProps = {
  pageTitle: string;
};

const Seo = ({ pageTitle }: SeoProps) => {
  const data = useSiteMetadata();

  return (
    <title>
      {pageTitle} | {data.title}
    </title>
  );
};

export default Seo;
