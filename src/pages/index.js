import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js';

import { imageWrapper } from '../styles/index.module.css';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          frontmatter {
            title
            date(fromNow: true)
            Desciption
          }
        }
      }
      allSanityEpisode(
        sort: { fields: date, order: DESC }
        filter: { youtubeID: { ne: "null" } }
        limit: 20
      ) {
        nodes {
          guest {
            name
          }
          title
          id
          gatsbyPath(filePath: "/episode/{SanityEpisode.slug__current}")
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;
  const episodes = data.allSanityEpisode.nodes;

  return (
    <Layout>
      <div className={imageWrapper}>
        <StaticImage
          src="../images/ivana-la-61jg6zviI7I-unsplash.jpg"
          alt="A Corgi sitting on a bes with red paper hearts all over it."
          placeholder="dominantColor"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello this is a test</h1>
      <Link to="/about">about</Link>

      <h2>Checkout my recent blog posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.slug}>{post.frontmatter.title}</Link>
            {'  '}
            <small>posted {post.frontmatter.date}</small>
          </li>
        ))}
      </ul>

      <h2>Latest episodes of learn with Jason</h2>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <Link to={episode.gatsbyPath}>
              {episode.title} (with {episode.guest?.[0]?.name})
            </Link>
          </li>
        ))}
      </ul>
      <a href="https://www.learnwithjason.dev/">
        watch all episodes of learn with Jason
      </a>
    </Layout>
  );
};

export default IndexPage;
