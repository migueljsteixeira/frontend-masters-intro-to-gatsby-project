import * as React from 'react';
import { Link } from 'gatsby';
import { Seo } from '../components/seo.js';

const AboutPage = () => {
  return (
    <>
      <Seo
        title="About this Site"
        description="More information about this site"
      />
      <main>
        <h1>About this website</h1>
        <Link to="/">back to home</Link>
      </main>
    </>
  );
};

export default AboutPage;
