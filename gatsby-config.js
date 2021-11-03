module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourDomain.ltd',
    title: 'Front end masters Intro to Gastby',
    description: 'Frontend matsrs Intro to gatsby course',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/red-small-german-spitz-walking-in-the-autumn-park-royalty-free-image-1580496879.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/components/post-layout.js'),
        },
      },
    },
  ],
};
