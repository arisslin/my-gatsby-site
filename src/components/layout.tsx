import * as React from 'react';
import { Link } from 'gatsby';
import { container, siteTitle } from './layout.module.css';
import { useSiteMetadata } from '../queryHooks';

type LayoutProps = {
  pageTitle: string;
  children: React.ReactNode;
};

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const data = useSiteMetadata();

  return (
    <div className={container}>
      <header className={siteTitle}>{data.title}</header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
