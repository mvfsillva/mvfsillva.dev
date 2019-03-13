import styled from 'styled-components'
import { transitions, transparentize } from 'polished'
import { theme } from 'styled-tools'

import { transition } from '../mixins/transition'

const Anchor = styled.a`
  ${theme('typography.link')};
  color: ${theme('palette.black')};
  ${transitions(transition({ property: 'color', duration: '250ms' }))};
  &:hover {
    color: ${({ theme }) => transparentize(0.5, `${theme.palette.black}`)};
    ${transitions(transition({ property: 'color', duration: '250ms' }))};
  }
`

export default Anchor
