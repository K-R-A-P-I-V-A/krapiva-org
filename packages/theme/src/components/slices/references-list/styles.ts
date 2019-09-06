import { css } from '@emotion/core'
import tw from 'tailwind.macro'

import { smallButton } from '../../button/styles'

export const rowStyles = css`
  ${tw`
    border-b
    border-t
    border-green-300
    mt-8
    pt-6
    pb-2
  `};
`

export const refStyles = css`
  ${tw`pb-4`};
`

export const buttonStyles = css`
  ${smallButton};
`
