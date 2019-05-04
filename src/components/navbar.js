import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import shortid from 'shortid'
import { Link } from 'gatsby'
import { transparentize, transitions } from 'polished'
import { theme, ifProp } from 'styled-tools'

import { transition } from '../mixins/transition'

import setRouting from '../helpers/set-routing'

import If from '../helpers/if'

import Locale from './locale'

const Nav = styled.nav`
  width: 66.66%;
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  z-index: ${theme('zindex.fixed')};
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

  .nav-links {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 600px) {
    .nav-links {
      display: flex;
      justify-content: flex-start;
      position: absolute;
      flex-direction: column;
      background-color: ${({ theme }) => theme.palette.gray['800']};
      width: 100%;
      height: ${ifProp('isMobile', '100vh', 0)};
      ${transitions(transition({ duration: '0.5s', ease: 'ease-in' }))};
      overflow-y: hidden;
      top: 0px;
      left: 0px;
    }

    a {
      color: ${theme('palette.white')};
      text-align: center;
      padding: ${theme('spacing')};
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      ${transitions(transition({ property: 'background', duration: '250ms' }))};
      &:hover {
        color: ${({ theme }) => transparentize(0.5, `${theme.palette.white}`)};
        background-color: ${({ theme }) => transparentize(0.5, `${theme.palette.black}`)};
        ${transitions(transition({ property: 'background', duration: '250ms' }))};
      }
    }
  }
`

const Sandwich = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    position: absolute;
    right: ${theme('spacing.medium')};
    z-index: ${theme('zindex.dropdown')};
    cursor: pointer;
  }
`

const Label = styled.label`
  @media (max-width: 600px) {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50px;
    height: 50px;
    padding: ${theme('spacing.medium')};
    &:hover {
      background-color: ${({ theme }) => transparentize(0.5, `${theme.palette.black}`)};
    }

    span {
      display: block;
      width: 25px;
      height: 10px;
      border-top: 2px solid ${ifProp('reverse', theme('palette.white'), theme('palette.black'))};
    }
  }
`

const Content = styled.div`
  width: 50%;
  text-align: center;
  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      width: 100%;
    }
  }
`

const Navbar = ({ navigation, back, reverse, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <Nav reverse={reverse} isMobile={isOpen}>
        <Sandwich onClick={toggle}>
          <Label reverse={reverse}>
            <span />
            <span />
            <span />
          </Label>
        </Sandwich>

        <div className="nav-links">
          <Content>
            <If test={back}>
              <Link to="/">Home</Link>
            </If>
            {navigation.map(router => (
              <Link key={shortid.generate()} to={`/${setRouting(router).url}`}>
                {setRouting(router).text}
              </Link>
            ))}
          </Content>
          <Locale reverse={reverse} setLanguage={setLanguage} />
        </div>
      </Nav>
    </>
  )
}

Navbar.defaultProps = {
  navigation: [],
  back: false,
  reverse: false,
}

Navbar.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.string),
  setLanguage: PropTypes.func.isRequired,
  back: PropTypes.bool,
  reverse: PropTypes.bool,
}

export default Navbar
