import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Seo } from '../components/seo.js';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <Seo />
      <header>
        <Link to="/">{meta.title}</Link>
      </header>
      <main>
        <h1>Hello this is a test</h1>
        <Link to="/about">about</Link>
      </main>
    </>
  );
};

export default IndexPage;
