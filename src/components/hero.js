import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Lion from '../icons/lion'

import Navbar from './navbar'

const Wrapper = styled.header`
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.palette.black};
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: ${({ theme }) => theme.spacing.large};
`

const Hero = () => (
  <Wrapper>
    <Container>
      <Link to="/">
        <Lion width={60} height={70} />
      </Link>
      <Navbar navigation={['about']} />
    </Container>
  </Wrapper>
)

export default Hero
