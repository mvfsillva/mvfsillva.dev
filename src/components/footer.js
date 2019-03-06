import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Link from './link'

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.xLarge};
  margin-bottom: ${({ theme }) => theme.spacing.xLarge};
  text-align: center;
`

const Footer = ({ info, href }) => (
  <Wrapper>
    <Link href={href} rel="noopener noreferrer">
      {info}
    </Link>
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
