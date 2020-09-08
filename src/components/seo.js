import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import { screening } from "../localized_content"

function SEO({ lang, screenerType, meta = {} }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            en {
              title
              description
              author
              twitter_site
              og_url
              og_image
              og_locale
            }
            fr {
              title
              description
              author
              twitter_site
              og_url
              og_image
              og_locale
            }
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.siteMetadata[lang].title.replace(/\|\|SCREENER_TYPE\|\|/, screening[lang][screenerType])}
      meta={[
        {
          name: `description`,
          content: site.siteMetadata[lang].description.replace(/\|\|SCREENER_TYPE\|\|/, screening[lang][screenerType]),
        },
        {
          property: `og:title`,
          content: site.siteMetadata[lang].title.replace(/\|\|SCREENER_TYPE\|\|/, screening[lang][screenerType]),
        },
        {
          property: `og:description`,
          content: site.siteMetadata[lang].description.replace(/\|\|SCREENER_TYPE\|\|/, screening[lang][screenerType]),
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata[lang].og_url.replace(/\|\|SCREENER_TYPE\|\|/, screening[lang][screenerType]),
        },
        {
          property: `og:image`,
          content: site.siteMetadata[lang].og_image.replace(/\|\|SCREENER_TYPE\|\|/, screening[lang][screenerType]),
        },
        {
          property: `og:locale`,
          content: site.siteMetadata[lang].og_locale,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata[lang].twitter_site,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata[lang].twitter_site,
        },
        {
          name: `twitter:title`,
          content: site.siteMetadata[lang].title.replace(/\|\|SCREENER_TYPE\|\|/, screening[lang][screenerType]),
        },
        {
          name: `twitter:description`,
          content: site.siteMetadata[lang].description.replace(/\|\|SCREENER_TYPE\|\|/, screening[lang][screenerType]),
        },
      ].concat(meta)}
    />
  )
}

export default SEO
