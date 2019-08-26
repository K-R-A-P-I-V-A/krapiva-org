import React from 'react'
import { graphql } from 'gatsby'
import { Layout, ArticleBody } from '@krapiva-org/theme'

function ArticlesPage({ data, location }: any) {
  return (
    <Layout
      location={location}
      meta={data.site.siteMetadata}
      index={data.prismicIndex.data}
    >
      <ArticleBody data={data.prismicArticles} />
    </Layout>
  )
}

export const PageQuery = graphql`
  query ArticlesQuery($slug: String!) {
    site {
      siteMetadata {
        siteTitle
        siteMotto
      }
    }
    prismicIndex {
      data {
        title {
          text
        }
        categories {
          categorytitle {
            text
          }
          categorydescription {
            html
          }
        }
        body {
          __typename
          ... on PrismicIndexBodyBanner {
            primary {
              bannerbutton
              expiredate(difference: "days")
              bannertext {
                html
              }
              bannerlink {
                url
                target
              }
            }
          }
          ... on PrismicIndexBodyHighlight {
            primary {
              image {
                url
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 640, quality: 80) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
              text {
                html
              }
              link {
                url
                target
              }
              expiredate(difference: "days")
            }
          }
        }
      }
    }
    prismicArticles(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      first_publication_date(locale: "ru", formatString: "DD MMMM YYYY")
      tags
      href
      data {
        title {
          text
        }
        image {
          url
          localFile {
            childImageSharp {
              fluid(maxWidth: 640, quality: 80) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        authors {
          author {
            document {
              ... on PrismicAuthors {
                data {
                  name
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ArticlesPage
