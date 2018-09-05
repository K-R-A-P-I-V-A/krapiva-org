require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const PrismicDOM = require('prismic-dom')
const Elements = PrismicDOM.RichText.Elements
const linkResolver = () => doc => doc
const tp = require('./src/utils/tp')

module.exports = {
  siteMetadata: {
    title: 'Krapiva',
    siteUrl: 'https://www.krapiva.org/',
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-netlify-cache`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'krapiva-org',
        accessToken: process.env.PRICMIC_TOKEN,
        linkResolver: linkResolver,
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children
        ) => {
          switch (type) {
            case Elements.paragraph:
              return `<p>${tp.execute(children.join(''))}</p>`
            case Elements.hyperlink:
              const target = element.data.target
                ? `target="${element.data.target}" rel="noopener noreferrer"`
                : ''
              const linkUrl = PrismicDOM.Link.url(element.data, linkResolver)
              return `<a class="link" ${target} href="${linkUrl}">${content}</a>`
            default:
              return null
          }
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#0cf3ad`,
        parent: '#nprogress-container',
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.krapiva.org',
        sitemap: 'https://www.krapiva.org/sitemap.xml',
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `·К·Р·А·П·И·В·А·`,
        short_name: `Krapiva`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#0cf3ad`,
        display: `minimal-ui`,
        icon: `src/img/logo-192-192.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
  ],
}
