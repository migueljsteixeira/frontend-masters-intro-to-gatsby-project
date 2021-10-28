import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout.js';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello this is a test</h1>
      <Link to="/about">about</Link>
    </Layout>
  );
};

export default IndexPage;
