import * as React from 'react'
import { useInView } from 'react-intersection-observer'

import { FooterBurn } from './burn'
import { Container } from '../main/index'

import { useUpdateViews } from './use-update-views'
import { FooterDiscuss } from './discuss'
import { footerStyles } from './styles'

export function ArticleFooter() {
  const [ref, inView] = useInView({
    threshold: 0,
  })

  useUpdateViews(inView)

  return (
    <aside css={footerStyles} ref={ref}>
      <Container>
        <FooterBurn />
        <FooterDiscuss />
      </Container>
    </aside>
  )
}
