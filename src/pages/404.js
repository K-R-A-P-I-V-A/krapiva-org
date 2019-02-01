import React from 'react'
import { Link, navigate } from 'gatsby'
import { css } from '@emotion/core'
import { lifecycle } from 'recompose'
import { words } from 'lodash'

import logo from '../img/logo.svg'
import { Heading1 } from '../components/Typography'

const redirects = {
  'bubnezh-o': 'bubnezh-o-lokal-noi-02-09-2018',
  'elina-petrova': '',
  'chto-mi': 'chto-mi-vidim-01-09-2018',
  'vse-techet': 'vse-techet-ili-01-10-2018',
  'kak-roman': 'kak-roman-sergeevich-28-09-2018',
  'kak-zhit': 'kak-zhit-vmeste-14-09-2018',
  'prusskoe-pole': 'prusskoe-pole-eksperimenta-16-10-2018',
  'feministki-peterburga': 'feministki-peterburga-ili-24-10-2018',
}

const NotFoundPage = lifecycle({
  componentDidMount() {
    const match = words(this.props.location.pathname.replace(/\//g, ''))
      .slice(0, 2)
      .join('-')
    redirects[match] && navigate(redirects[match])
  },
})(({ location }) => (
  <>
    <div
      css={css`
        ${tw(['h-screen'])};
      `}
    >
      <div
        css={css`
          ${tw([
            'bg-center',
            'bg-contain',
            'bg-no-repeat',
            'mx-auto',
            'my-q64',
          ])};
          background-image: url(${logo});
          height: 45px;
          width: 90px;
        `}
      />
      <h1
        css={css`
          ${Heading1};
          ${tw(['text-center', 'my-q64'])};
        `}
      >
        404
      </h1>
      <p
        css={css`
          ${tw(['text-center', 'text-heading5'])};
        `}
      >
        Извините, нет такой страницы.
      </p>
      <p>
        <Link
          css={css`
            ${tw(['block', 'mt-q48', 'mx-auto', 'text-center'])};
            max-width: 18rem;
          `}
          to={'/'}
        >
          <span
            css={css`
              ${tw([
                'bg-white',
                'hover:bg-black',
                'inline-flex',
                'border',
                'border-black',
                'border-solid',
                'font-montserrat',
                'items-center',
                'justify-center',
                'px-q24',
                'py-q12',
                'text-black',
                'hover:text-white',
                'text-sm',
                'uppercase',
              ])};
              transition: all 200ms ease-in-out;
            `}
          >
            Вернутся на главную
          </span>
        </Link>
      </p>
    </div>
  </>
))

export default NotFoundPage
