import styled from '@emotion/styled'

export const Row = styled('div')`
  ${tw([
    'flex',
    'flex-col',
    'sm:flex-row',
    'sm:flex-wrap',
    'justify-between',
    'w-full',
  ])};
`

export const Column = styled('div')`
  ${tw(['mb-q72', 'w-full', 'sm:w-1/2'])};
  @media (min-width: 577px) {
    max-width: calc(50% - 0.5rem);
  }
`