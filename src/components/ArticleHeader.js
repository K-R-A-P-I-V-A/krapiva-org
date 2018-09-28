/* global tw */
import React from 'react'
import { graphql, Link } from 'gatsby'
import { css } from 'react-emotion'
import { startCase } from 'lodash'

import { HTMLContent } from './Content'
import {Img} from './Img'
import { Views } from './Views'
import { getCategory, toLocalDate, uuid } from '../utils'

export const ArticleHeader = ({ article, date, location }) => (
  <div>
    <div
      className={css`
        ${tw(['font-montserrat', 'italic', 'my-q24', 'text-xs'])};
      `}
    >
      <span
        className={css`
          ${tw(['inline-flex', 'items-center'])};
        `}
      />
      <Link to={article.category}>
        {startCase(getCategory(article.category))}
      </Link>
      <span> · </span>
      <span>{toLocalDate(date)}</span>
      <span>
        <span> ·</span>
        {article.authors.map(({ author }) =>
          author.document.map(({ data }) => (
            <span key={uuid}> {data.name} ·</span>
          ))
        )}
      </span>
      <Views {...{ location }} />
    </div>
    <figure
      className={css`
        ${tw(['mx-0', 'my-q48'])};
      `}
    >
      {article.image.localFile && (
        <Img src={article.image} />
      )}
      <figcaption>
        <HTMLContent
          className={css`
            ${tw(['italic', 'text-center', 'text-list'])};
          `}
          content={article.caption.html}
          key={uuid()}
        />
      </figcaption>
    </figure>
  </div>
)

export const articleHeaderQuery = graphql`
  fragment ArticleHeader on PrismicArticles {
    first_publication_date
    data {
      category
      authors {
        author {
          document {
            data {
              name
            }
          }
        }
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
      caption {
        html
      }
    }
  }
`
