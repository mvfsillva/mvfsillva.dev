import styled from 'styled-components'
import { transitions, transparentize } from 'polished'

import { transition } from '../mixins/transition'

const Anchor = styled.a`
  ${({ theme }) => theme.typography.link};
  color: ${({ theme }) => theme.palette.black};
  ${transitions(transition({ property: 'color', duration: '250ms' }))};
  &:hover {
    color: ${({ theme }) => transparentize(0.5, `${theme.palette.black}`)};
    ${transitions(transition({ property: 'color', duration: '250ms' }))};
  }
`

export default Anchor
