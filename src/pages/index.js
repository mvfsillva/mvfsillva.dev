import React from 'react'
import styled from 'styled-components'

import Seo from '../layouts/seo'

import Content from '../styles/content'

import Hero from '../components/hero'
import Footer from '../components/footer'

import contacts from '../helpers/contacts'

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

const IndexPage = () => {

  return (
    <Seo>
      <Hero />
      <Content>
        <Hgroup>
          <Intro>Hi, I'm Marcus</Intro>
          <SubTitle>Front-end Developer</SubTitle>
        </Hgroup>
      </Content>
      <Footer center contacts={contacts} />
    </Seo>
  )
}


export default IndexPage
