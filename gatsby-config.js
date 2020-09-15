module.exports = {
  siteMetadata: {
    courthouse: {
      en: {
        title: `Coronavirus (COVID-19) courthouse screening`,
        description: `Coronavirus (COVID-19) courthouse screener. Your result will tell you if you can or cannot enter. If you are told you cannot enter, you will get information about what to do next.`,
        author: `@ONThealth`,
        twitter_site: `@ONThealth`,
        og_url: `https://covid-19.ontario.ca/courthouse-screening`,
        og_image: `https://covid-19.ontario.ca/covid-19-cs-assets/courthouse_social_image_en.png`,
        og_locale: `en_CA`,
      },
      fr: {
        title: `COVID-19 dépistage tribunaux`,
        description: `COVID-19 depistage tribunaux. Vos résultats détermineront si vous pouvez ou non entrer dans le palais de justice et quelles sont les prochaines étapes.`,
        author: `@ONThealth`,
        twitter_site: `@ONThealth`,
        og_url: `https://covid-19.ontario.ca/depistage-tribunaux`,
        og_image: `https://covid-19.ontario.ca/covid-19-cs-assets/courthouse_social_image_fr.png`,
        og_locale: `fr_CA`,
      },
    },
    school: {
      en: {
        title: `Coronavirus (COVID-19) school screening`,
        description: `You must screen for COVID-19 every day before going to school. Answer the following questions to help you decide if you should or should not go to school today.`,
        author: `@ONThealth`,
        twitter_site: `@ONThealth`,
        og_url: `https://covid-19.ontario.ca/school-screening`,
        og_image: `https://covid-19.ontario.ca/covid-19-cs-assets/school_social_image_en.png`,
        og_locale: `en_CA`,
      },
      fr: {
        title: `Dépistage de la COVID-19 pour les écoles`,
        description: `Vous devez faire un dépistage de la COVID-19 tous les matins avant d’aller à l’école. Veuillez répondre aux questions suivantes, qui vous aideront à décider si vous pouvez ou non aller à l’école aujourd’hui.`,
        author: `@ONThealth`,
        twitter_site: `@ONThealth`,
        og_url: `https://covid-19.ontario.ca/depistage-pour-les-ecoles`,
        og_image: `https://covid-19.ontario.ca/covid-19-cs-assets/school_social_image_fr.png`,
        og_locale: `fr_CA`,
      },
    },
  },
  assetPrefix: "covid-19-cs-assets",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-build-date`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://covid-19.ontario.ca`,
      },
    },
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: ["https://www.google-analytics.com", "https://www.googletagmanager.com"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        ignore: [`**/*\.inline\.svg`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stylesheets`,
        path: `${__dirname}/src/stylesheets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `covid-19-courthouse-screener`,
        short_name: `covid-19-cs`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ontario-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-asset-path",
      options: {
        removeMapFiles: true,
        fileTypes: ["js", "map", "css", "png"],
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GA_CODE",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
