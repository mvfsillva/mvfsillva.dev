import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import shortid from 'shortid'
import { Link } from 'gatsby'
import { transparentize, transitions } from 'polished'
import { theme } from 'styled-tools'

import { transition } from '../mixins/transition'

const Nav = styled.nav`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  a {
    ${theme('typography.link')};
    color: ${theme('palette.black')};
    margin: ${theme('spacing')};
    ${transitions(transition({ property: 'color', duration: '250ms' }))};
    &:hover {
      color: ${({ theme }) => transparentize(0.5, `${theme.palette.black}`)};
      ${transitions(transition({ property: 'color', duration: '250ms' }))};
    }
  }
`

const Navbar = ({ navigation }) => (
  <Nav>
    {navigation.map(url => (
      <Link key={shortid.generate()} to={`/${url}`}>
        {url}
      </Link>
    ))}
  </Nav>
)

Navbar.defaultProps = {
  navigation: [],
}

Navbar.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.string),
}

export default Navbar
