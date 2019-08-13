import * as React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import { useInView } from 'react-intersection-observer'

import { Logo } from '../logo/index'
import { Wrapper } from './wrapper'

export function Header() {
  const headerRef = React.useRef(null)
  const headerHeight = `${headerRef.current ? headerRef.current.getBoundingClientRect().height : 0}px`;
  const [ref, inView] = useInView({
    rootMargin: headerHeight
  })

  return (
    <React.Fragment>
      <Wrapper ref={headerRef} inView={inView}>
        <Logo height={inView ? 100 : 50}/>
        {inView && <div>·К·Р·А·П·И·В·А·</div>}
      </Wrapper>
      <div css={css`${tw`relative`}; height: ${headerHeight};`} ref={ref} />
    </React.Fragment>
  )
}