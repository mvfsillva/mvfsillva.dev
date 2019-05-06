import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { transitions, transparentize } from 'polished'
import { theme } from 'styled-tools'
import { Link as GatsbyLink } from 'gatsby'

import { transition } from '../mixins/transition'

const Wrapper = styled.a`
  ${theme('typography.link')};
  color: ${theme('palette.black')};
  cursor: pointer;
  ${transitions(transition({ property: 'color', duration: '250ms' }))};
  &:hover {
    color: ${({ theme }) => transparentize(0.5, `${theme.palette.black}`)};
    ${transitions(transition({ property: 'color', duration: '250ms' }))};
  }
`

const Link = ({ to, href, children }) => (
  <Wrapper as={to ? GatsbyLink : 'a'} to={to} href={href} target={href && '_blank'}>
    {children}
  </Wrapper>
)

Link.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.any.isRequired,
}

export default Link
