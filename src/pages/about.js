import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Main from '../layouts/main'
import Paragraph from '../components/paragraph'
import Footer from '../components/footer'

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

const Article = styled.article`
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
  }
`

const About = () => {
  const contacts = [
    {
      name: 'twitter',
      link: 'https://twitter.com/mvfsillva'
    },
    {
      name: 'github',
      link: 'https://github.com/mvfsillva'
    },
    {
      name: 'linkedin',
      link: 'https://linkedin.com/in/mvfsilva'
    },
  ]

  return (
    <Main>
      <Container>
        <Avatar />
        <Content>
          <Return>
            <Link to="/">return to home</Link>
          </Return>
          <Article>
            <h1>Hi, I'm Marcus</h1>
            <Paragraph>I work as a Senior Front-end developer at IDwall.</Paragraph>
            <br />
            <Paragraph>
              Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss,
              é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.
              Paisis, filhis, espiritis santis. Mauris nec dolor in eros commodo tempor.
              Aenean aliquam molestie leo, vitae iaculis nisl.
              A ordem dos tratores não altera o pão duris.
            </Paragraph>
            <br />
            <Paragraph>
              Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss,
              é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.
              Paisis, filhis, espiritis santis. Mauris nec dolor in eros commodo tempor.
              Aenean aliquam molestie leo, vitae iaculis nisl.
              A ordem dos tratores não altera o pão duris.
            </Paragraph>
            <br />
            <Paragraph>If you want to know more about me or get in touch:</Paragraph>
            <Footer contacts={contacts} />
          </Article>
        </Content>
      </Container>
    </Main>
  )
}

export default About