import styled from 'styled-components'
import { transitions, darken } from 'polished'

import { transition } from '../mixins/transition'

const Link = styled.a`
  color: ${({ theme }) => theme.palette.black};
  font-size: ${({ theme }) => theme.typography.link.fontSize};
  font-weight: ${({ theme }) => theme.typography.link.fontWeight};
  text-transform: uppercase;
  ${transitions(transition({ property: 'color', duration: '250ms' }))};

  &:hover {
    color: ${({ theme }) => darken(0.2, `${theme.palette.black}`)};
    ${transitions(transition({ property: 'color', duration: '250ms' }))};
  }
`

export default Link
