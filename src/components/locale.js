import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'styled-tools'
import { transparentize, transitions } from 'polished'

import { transition } from '../mixins/transition'

import BrazilFlag from '../icons/brazil-flag'
import UsaFlag from '../icons/usa-flag'

import Hidden from '../styles/hidden'

const Button = styled.button`
  border: 1px solid transparent;
  background-color: transparent;
  text-align: center;
  cursor: pointer;
  display: inline-block;
  svg {
    ${transitions(transition({ property: 'fill', duration: '250ms' }))};
    &:hover .ptBr,
    &:hover .en {
      fill: ${({ theme }) => transparentize(0.5, `${theme.palette.black}`)};
      ${transitions(transition({ property: 'fill', duration: '250ms' }))};
    }
  }
`

const Flag = styled.div`
  z-index: ${theme('zindex.fixed')};
  span {
    display: none;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid white;

    svg {
      display: none;
    }
    span {
      display: block;
      ${theme('typography.link')};
      padding: ${theme('spacing.small')};
      color: ${theme('palette.white')};
    }

    ${Button} {
      width: 100%;
      display: flex;
      justify-content: center;
      &:hover {
        color: ${({ theme }) => transparentize(0.5, `${theme.palette.white}`)};
        background-color: ${({ theme }) => transparentize(0.5, `${theme.palette.black}`)};
        ${transitions(transition({ property: 'background', duration: '250ms' }))};
      }
    }
  }
`

const Locale = ({ reverse, setLanguage }) => (
  <Flag>
    <Button onClick={() => setLanguage('pt-br')} type="button">
      <Hidden>Português Brasileiro</Hidden>
      <BrazilFlag reverse={reverse} size={24} />
      <span>Português Brasileiro</span>
    </Button>
    <Button onClick={() => setLanguage('en')} type="button">
      <Hidden>English</Hidden>
      <UsaFlag reverse={reverse} size={24} />
      <span>English</span>
    </Button>
  </Flag>
)

Locale.defaultProps = {
  reverse: false,
  setLanguage: () => {},
}

Locale.propTypes = {
  reverse: PropTypes.bool,
  setLanguage: PropTypes.func,
}

export default Locale
