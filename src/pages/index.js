import * as React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <main>
      <h1>Hello this is a test</h1>
      <Link to="/about">about</Link>
    </main>
  );
};

export default IndexPage;
