module.exports = {
  siteMetadata: {
    name: "Maxence Laumonier",
    description:
      "I'm a Data Scientist",
    keywords: [
      "Data",
      "Data Science",
      "Python"

    ],
    siteUrl: "https://maxence.dev",
    siteImage: "https://paulie.dev/images/paulie-open-graph-image.jpg",
    profileImage: `/`,
    lang: `en`,
    config: {
      sidebarWidth: 200,
    },
  },
  plugins: [
    `gatsby-plugin-mdx-embed`,
    {
      resolve: "@pauliescanlon/gatsby-theme-terminal",
      options: {
        source: ["posts"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `maxence.dev`,
        short_name: `m.dev`,
        start_url: `/`,
        lang: `en`,
        background_color: `#282a36`,
        theme_color: `#ff79c6`,
        display: `standalone`,
        icon: `src/manifesticon-512x512.png`,
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-76055934-4",
      },
    },
  ],
}

// https://content-security-policy.com/examples/google-fonts/
