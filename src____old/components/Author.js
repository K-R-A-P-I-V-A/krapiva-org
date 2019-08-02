import React from 'react'
import { css } from '@emotion/core'

import { HTMLContent } from './Content'
import { Img } from './Img'
import Link from './elements/link'
import { RichTextSmall } from './RichText'
import { Heading6 } from './Typography'
import { uuid } from '../utils'
import { translite } from '../utils/makePath'

export const Author = ({ author, location }) => (
  <div
    css={css`
      ${tw(['flex-no-shrink', 'mb-q72', 'mx-q16', 'text-black', 'w-full'])};
      max-width: calc(50% - 2rem);
    `}
  >
    <Link key={uuid} to={translite(author.name)} state={{from: location.pathname}}>
      <Img
        css={css`
          ${tw(['rounded-full'])};
        `}
        src={author.avatar}
      />
    </Link>
    <div
      css={css`
        ${tw(['sm:pl-q36'])};
      `}
    >
      <h3
        css={css`
          ${Heading6};
          ${tw(['my-q48'])};
        `}
      >
        {author.name}
      </h3>
      {author.statement.html && (
        <HTMLContent
          className={RichTextSmall}
          content={author.statement.html}
        />
      )}
    </div>
  </div>
)