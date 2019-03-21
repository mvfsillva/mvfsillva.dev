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
`

const Locale = ({ reverse, onChange }) => {
  const handleChangeLanguage = lang => {
    localStorage.setItem('language', lang)
    onChange(lang)
  }

  return (
    <Flag>
      <Button onClick={() => handleChangeLanguage('pt-br')} type="button">
        <Hidden>Português Brasileiro</Hidden>
        <BrazilFlag reverse={reverse} size={24} />
      </Button>
      <Button onClick={() => handleChangeLanguage('en')} type="button">
        <Hidden>English</Hidden>
        <UsaFlag reverse={reverse} size={24} />
      </Button>
    </Flag>
  )
}

Locale.defaultProps = {
  reverse: false,
  onChange: () => {},
}

Locale.propTypes = {
  reverse: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Locale
