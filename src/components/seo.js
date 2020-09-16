import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default ({ lang, screenerType, meta = {} }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            courthouse {
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
            school {
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
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.siteMetadata[screenerType][lang].title}
      meta={[
        {
          name: `description`,
          content: site.siteMetadata[screenerType][lang].description,
        },
        {
          property: `og:title`,
          content: site.siteMetadata[screenerType][lang].title,
        },
        {
          property: `og:description`,
          content: site.siteMetadata[screenerType][lang].description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata[screenerType][lang].og_url,
        },
        {
          property: `og:image`,
          content: site.siteMetadata[screenerType][lang].og_image,
        },
        {
          property: `og:locale`,
          content: site.siteMetadata[screenerType][lang].og_locale,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata[screenerType][lang].twitter_site,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata[screenerType][lang].twitter_site,
        },
        {
          name: `twitter:title`,
          content: site.siteMetadata[screenerType][lang].title,
        },
        {
          name: `twitter:description`,
          content: site.siteMetadata[screenerType][lang].description,
        },
      ].concat(meta)}
    />
  )
}
