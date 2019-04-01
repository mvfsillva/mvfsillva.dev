import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { theme } from 'styled-tools'

import Lion from '../icons/lion'

import Hidden from '../styles/hidden'

import Locale from './locale'
import Navbar from './navbar'

const Wrapper = styled.header`
  width: 100%;
  padding: ${theme('spacing.medium')};
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: ${theme('spacing.medium.xxLarge')};
  margin-left: ${theme('spacing.medium.xxLarge')};

  a {
    z-index: ${theme('zindex.fixed')};
  }
`

const Header = ({ navigation, back, reverse, setLanguage }) => (
  <Wrapper>
    <Container>
      <Link to="/">
        <Hidden>Lion</Hidden>
        <Lion reverse={reverse} width={50} height={60} />
      </Link>
      <Navbar navigation={navigation} back={back} reverse={reverse} />
      <Locale reverse={reverse} setLanguage={setLanguage} />
    </Container>
  </Wrapper>
)

Header.defaultProps = {
  navigation: [],
  back: false,
  reverse: false,
}

Header.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.string).isRequired,
  back: PropTypes.bool,
  reverse: PropTypes.bool,
  setLanguage: PropTypes.func.isRequired,
}

export default Header
