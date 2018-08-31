/* global tw */
import React from 'react'
//import { Link } from 'gatsby'
import { css } from 'react-emotion'

import publicdomain from '../img/publicdomain.svg'
import publicdomainBlack from '../img/publicdomain-black.svg'

export const Footer = () => (
  <footer
    className={css`
      ${tw([
        'bg-white',
        'md:bg-black',
        'py-q24',
        'md:py-q36',
        'relative',
        'text-balck',
        'md:text-white',
        'w-fill',
        'z-1000',
      ])};
    `}
  >
    <div
      className={css`
        ${tw([
          'flex',
          'flex-row',
          'font-montserrat',
          'items-center',
          'justify-between',
          'max-w-md',
          'mx-auto',
          'px-q24',
          'md:px-q48',
          'text-xs',
        ])};
      `}
    >
      <div
        className={css`
          ${tw(['flex', 'items-center'])};
        `}
      >
        <span
          className={css`
            ${tw([
              'bg-contain',
              'bg-no-repeat',
              'h-q16',
              'inline-block',
              'mr-q12',
              'w-q16',
            ])};
            @media (max-width: 768px) {
              background-image: url(${publicdomainBlack});
            }
            background-image: url(${publicdomain});
          `}
        />
        <span>·К·Р·А·П·И·В·А·</span>
      </div>
      <a
        className={css`
          ${tw([
            'bg-green',
            'hover:bg-black',
            'md:hover:bg-white',
            'border-none',
            'font-montserrat',
            'font-medium',
            'inline-flex',
            'items-center',
            'justify-center',
            'mx-q4',
            'my-q4',
            'md:my-0',
            'outline-none',
            'px-q24',
            'py-q12',
            'rounded-lg',
            'text-black',
            'hover:text-green',
            'md:hover:text-black',
            'text-md',
            'uppercase',
          ])};
        `}
        href="https://yasobe.ru/na/krapiva"
        target="_blank"
        rel="noopener noreferrer"
      >
        Поддержать
      </a>
      <div>2018</div>
    </div>
  </footer>
)
