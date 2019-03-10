import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Anchor from './anchor'

const Wrapper = styled.footer`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.large};
  text-align: center;
  flex-shrink: 0;
`

const Footer = ({ info, href }) => (
  <Wrapper>
    <Anchor href={href} rel="noopener noreferrer">
      {info}
    </Anchor>
  </Wrapper>
)

Footer.defaultProps = {
  info: `@mvfsillva © ${new Date().getUTCFullYear()}`,
  href: 'https://github.com/mvfsillva',
}

Footer.propTypes = {
  info: PropTypes.string,
  href: PropTypes.string,
}

export default Footer
