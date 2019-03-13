import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import shortid from 'shortid'
import { theme, ifProp } from 'styled-tools'

import Anchor from './anchor'

const Wrapper = styled.footer`
  width: 100%;
  padding: ${theme('spacing.large')};
  text-align: ${ifProp('center', 'center', 'left')};
  flex-shrink: 0;
  a {
    margin: ${theme('spacing')};
  }
`

const Footer = ({ contacts, center }) => (
  <Wrapper center={center}>
    {contacts.map(({ name, link }) => (
      <Anchor key={shortid.generate()} href={link} rel="noopener noreferrer">
        {name}
      </Anchor>
    ))}
  </Wrapper>
)

Footer.defaultProps = {
  contacts: [
    {
      name: `@mvfsillva © ${new Date().getUTCFullYear()}`,
      link: 'https://github.com/mvfsillva',
    },
  ],
  center: false,
}

Footer.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  center: PropTypes.bool,
}

export default Footer
