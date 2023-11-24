import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { container, siteTitle, navList } from './layout.module.css';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { useLegalPages } from '../hooks/useLegalPages';

type LayoutProps = {
  pageTitle: string;
  children: React.ReactNode;
};

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const data = useSiteMetadata();
  const links = useLegalPages();

  return (
    <div className={container}>
      <header className={siteTitle}>{data.title}</header>
      <nav>
        <ul className={navList}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {links.map((link) => (
            <Link key={link.id} to={`/${link.frontmatter.slug}`}>
              {link.frontmatter.title}
            </Link>
          ))}
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
