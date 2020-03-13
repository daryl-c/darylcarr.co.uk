require("dotenv").config()

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

const googleAnalyticsConfig = {
  trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
  anonymize: true,
  respectDNT: true,
}

const googleFontsConfig = {
  fonts: [
    {
      family: `Poppins`,
      variants: [`100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`],
    },
  ],
}

const manifestConfig = {
  name: `Daryl Carr`,
  short_name: `darylcarr`,
  start_url: `/`,
  background_color: `#f7f0eb`,
  theme_color: `#627D98`,
  display: `standalone`,
  icon: "src/images/logo.png",
}

const purgeCSSConfig = {
  printRejected: true, // Print removed selectors and processed file names
  // develop: true, // Enable while using `gatsby develop`
  tailwind: true, // Enable tailwindcss support
}

const mdxPluginConfig = {
  extensions: [`.mdx`, `.md`],
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

if (!googleAnalyticsConfig.trackingId) {
  throw new Error("Google tracking id needs to be provided.")
}

module.exports = {
  siteMetadata: {
    title: `Daryl Carr`,
    description: `A Fullstack Javascript Developer based in Manchester, UK.`,
    author: `@d4ryl_c`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: mdxPluginConfig,
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: googleFontsConfig,
    },
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: manifestConfig,
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: purgeCSSConfig,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: googleAnalyticsConfig,
    },
  ],
}
