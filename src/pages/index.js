import React from 'react'
import styled from 'styled-components'

import Main from '../layouts/main'

import Hero from '../components/hero'

const Intro = styled.h1`
  font-size: ${({ theme }) => theme.typography.intro.fontSize};
  font-weight: ${({ theme }) => theme.typography.intro.fontWeight};
  letter-spacing: 6px;
  font-family: Open Sans;
`

const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.subtitle.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle.fontWeight};
  letter-spacing: 6px;
  margin-top: ${({ theme }) => theme.spacing.large};
`

const Hgroup = styled.hgroup`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Container = styled.main`
  width: 100%;
  max-width: 1400px;
  padding: ${({ theme }) => theme.spacing.xxxLarge};
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  height: 80vh;
`

const IndexPage = () => (
  <Main>
    <Hero />
    <Container>
      <Hgroup>
        <Intro>Hi, I'm Marcus Silva.</Intro>
        <SubTitle>Front-end Developer</SubTitle>
      </Hgroup>
    </Container>
  </Main>
)

export default IndexPage
