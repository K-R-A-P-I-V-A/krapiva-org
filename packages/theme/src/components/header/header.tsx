import * as React from 'react'
import { useScrolling, useToggle, useThrottle } from 'react-use'
import { css } from '@emotion/core'
import { get } from 'lodash'
import tw from 'tailwind.macro'

import { translite } from '@krapiva-org/utils/src/make-path'

import { Logo } from '../logo/index'
import { MetaContext } from '../layout/index'

import { HeaderNav } from './nav'
import { Runner } from './runner'
import { headerStyles, runnerStyles, titleStyles } from './styles'

interface HeaderProps {
  sticked: boolean
}

export function Header(props: HeaderProps) {
  const {
    sticked: propsSticked = false,
  } = props
  let rootNode: any = null
  if (typeof document !== 'undefined') {
    rootNode = document
  }
  const scrollRef = React.useRef(rootNode)
  const [sticked, toggle] = useToggle(propsSticked)
  const [opened, open] = useToggle(false)
  const scrolling = useScrolling(scrollRef)
  const { meta, index } = React.useContext(MetaContext)
  const items = get(index, 'categories', [])
    .map(item => item ? ({ text: item.categorytitle.text, link: translite(item.categorytitle.text) }) : null)

  const handleClick = () => {
    if (sticked) { open(!opened) }
  }

  useThrottle(() => {
    if (scrolling && propsSticked) { open(false) }
  }, 400, [scrolling])

  React.useEffect(() => {
    toggle(propsSticked)
  }, [propsSticked])

  return (
    <div
      css={css`
        ${headerStyles};
        ${(sticked && !opened) ? tw`cursor-pointer` : tw`pt-8`};
      `}
      onClick={handleClick}
    >
      <Logo height={(sticked && !opened) ? 50 : 100} />
      {(!sticked || opened) && (
        <a
          css={css`
            ${titleStyles};
            ${!sticked && tw`pt-2`};
          `}
          href={get(meta, 'siteUrl', '/')}
        >
          {meta.siteTitle}
        </a>
      )}
      <HeaderNav
        items={items}
        opened={opened}
        sticked={sticked}
      />
      <div
        css={css`
          ${runnerStyles};
          ${sticked && tw`text-xxs`};
        `}
      >
        <Runner string={meta.siteMotto} />
      </div>
    </div>
  )
}
