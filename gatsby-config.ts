import type { GatsbyConfig } from "gatsby";
import { data } from "./src/Data";
import "dotenv/config";

const config: GatsbyConfig = {
  trailingSlash: "never",
  siteMetadata: {
    siteUrl: data.siteConfig.metaUrl,
    repo: data.siteConfig.repo,
    title: data.siteConfig.realName,
    tagline: data.siteConfig.tagline,
    description: data.siteConfig.description,
    author: data.siteConfig.realName,
    realName: data.siteConfig.realName,
    copyright: data.siteConfig.copyright,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `PT Sans Caption`,
            file: `https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@400;700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          // process.env.ANALYTICS_GA4, // Google Analytics / GA
          process.env.ANALYTICS_MEASUREMENT_ID, // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_domain: "ferry.netlify.app",
          cookie_flags: "SameSite=None;Secure",
          cookie_expires: 360 * 24 * 60 * 60,
        },
        pluginConfig: {
          head: true,
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: data.siteConfig.realName,
        short_name: data.siteConfig.realName,
        description: data.siteConfig.description,
        lang: `id`,
        start_url: `/`,
        background_color: `#0093b1`,
        theme_color: `#34495E`,
        display: `standalone`,
        crossOrigin: `anonymous`,
        icon_options: {
          // For all the options available, please see:
          // https://developer.mozilla.org/en-US/docs/Web/Manifest
          // https://w3c.github.io/manifest/#purpose-member
          purpose: `any maskable`,
        },
        icon: "src/images/icon.png",
        cache_busting_mode: "none",
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        // printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        ignore: ["/ignored"], // Ignore files/folders
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-remove-serviceworker",
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     workboxConfig: {
    //       skipWaiting: true,
    //       clientsClaim: true,
    //     },
    //   },
    // },
  ],
};

export default config;
