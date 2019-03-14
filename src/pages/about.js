import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { transitions, transparentize } from 'polished'

import { transition } from '../mixins/transition'

import Seo from '../layouts/seo'
import Paragraph from '../components/paragraph'
import Footer from '../components/footer'

import contacts from '../helpers/contacts'

import avatar from '../static/images/avatar.png'

const Container = styled.section`
  width: 100%;
  display: flex;
  flex: 1 0 auto;
`

const Avatar = styled.div`
  width: 30%;
  background-image: url(${avatar});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: left;
  opacity: .7;
`

const Content = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Main = styled.main`
  max-width: 700px;

  h1 {
    ${({ theme }) => theme.typography.title};
    padding: ${({ theme }) => theme.spacing.xxxLarge};
    text-align: center;
  }
`

const Return = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing.large};
  width: 200px;
  a {
    color: ${({ theme }) => theme.palette.black};
    ${transitions(transition({ property: 'color', duration: '250ms' }))};
    &:hover {
      color: ${({ theme }) => transparentize(0.5, `${theme.palette.black}`)};
      ${transitions(transition({ property: 'color', duration: '250ms' }))};
    }
  }
`

const About = () => {

  return (
    <Seo title="mvfsillva - about">
      <Container>
        <Avatar />
        <Content>
          <Return>
            <Link to="/">return to home</Link>
          </Return>
          <Main>
            <h1>Hi, I'm Marcus Silva</h1>
            <Paragraph>I work as a Senior Front-end developer at IDwall.</Paragraph>
            <Paragraph>
              The IDwall connects people and businesses using technology to build trust.
              So you can offer a better experience to your customers and more security for both sides.
            </Paragraph>
            <Paragraph>
              My main focus throughout my career has been web technologies and I love working with challenging and creative projects.
            </Paragraph>
            <Paragraph>
              As a programmer, I am constantly searching for best practices and I am also willing to try new technologies,
              programming languages, and tools.
            </Paragraph>
            <Paragraph>
              If you want to know more about me or get in touch:
              <Footer contacts={contacts} />
            </Paragraph>
          </Main>
        </Content>
      </Container>
    </Seo>
  )
}

export default About