import React from 'react'
import styled from 'styled-components'

import Main from '../layouts/main'
import Content from '../styles/content'
import Hero from '../components/hero'

const Intro = styled.h1`
  ${({ theme }) => theme.typography.intro};
`

const SubTitle = styled.h2`
  ${({ theme }) => theme.typography.subtitle};
  margin-top: ${({ theme }) => theme.spacing.large};
`

const Hgroup = styled.hgroup`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const IndexPage = () => (
  <Main>
    <Hero />
    <Content>
      <Hgroup>
        <Intro>Hi, I'm Marcus.</Intro>
        <SubTitle>Front-end Developer</SubTitle>
      </Hgroup>
    </Content>
  </Main>
)

export default IndexPage
