import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';

const AboutPage = () => {
  return (
    <Layout>
      <main>
        <h1>About this website</h1>
        <Link to="/">back to home</Link>
      </main>
    </Layout>
  );
};

export default AboutPage;
