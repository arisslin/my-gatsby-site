import * as React from 'react';
import { Link } from 'gatsby';
import { container } from './layout.module.css';

type LayoutProps = {
  pageTitle: string;
  children: React.ReactNode;
};

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div className={container}>
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
