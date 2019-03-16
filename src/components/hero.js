import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { theme } from 'styled-tools'

import Lion from '../icons/lion'

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

  @media ${theme('responsive.phone')} {
    justify-content: center;
  }
`

const Hero = () => (
  <Wrapper>
    <Container>
      <Link to="/">
        <Lion width={50} height={60} />
      </Link>
      <Navbar navigation={['about']} />
    </Container>
  </Wrapper>
)

export default Hero
