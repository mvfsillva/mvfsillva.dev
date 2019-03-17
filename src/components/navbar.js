import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import shortid from 'shortid'
import { Link } from 'gatsby'
import { transparentize, transitions } from 'polished'
import { theme, ifProp } from 'styled-tools'

import { transition } from '../mixins/transition'

import If from '../utils/if'

const Nav = styled.nav`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  z-index: ${theme('zindex.sticky')};
  a {
    ${theme('typography.link')};
    color: ${ifProp('reverse', theme('palette.white'), theme('palette.black'))};
    text-align: ${ifProp('center', 'center', 'left')};
    margin: ${theme('spacing')};
    ${transitions(transition({ property: 'color', duration: '250ms' }))};
    &:hover {
      color: ${({ theme }) => transparentize(0.5, `${theme.palette.black}`)};
      ${transitions(transition({ property: 'color', duration: '250ms' }))};
    }
  }

  @media ${theme('responsive.phone')} {
    display: none;
  }
`

const Navbar = ({ navigation, back, reverse }) => (
  <Nav reverse={reverse}>
    <If test={back}>
      <Link to="/">Home</Link>
    </If>
    {navigation.map(url => (
      <Link key={shortid.generate()} to={`/${url}`}>
        {url}
      </Link>
    ))}
  </Nav>
)

Navbar.defaultProps = {
  navigation: [],
  back: false,
  reverse: false,
}

Navbar.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.string),
  back: PropTypes.bool,
  reverse: PropTypes.bool,
}

export default Navbar
