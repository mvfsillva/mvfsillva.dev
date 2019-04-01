import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'
import shortid from 'shortid'

import Paragraph from '../components/paragraph'
import Footer from '../components/footer'
import Header from '../components/header'

import contacts from '../helpers/contacts'
import intl from '../helpers/intl'

import mvfsillva from '../static/images/mvfsillva-usa.jpg'

const Hero = styled.div`
  width: 100%;
  height: 60vh;
  background: ${theme('palette.black')};
  overflow: hidden;

  :before {
    content: ' ';
    display: block;
    position: absolute;
    width: 100%;
    height: 60vh;
    opacity: 0.5;
    background-image: url(${mvfsillva});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media ${theme('responsive.phone')} {
    header {
      display: none;
    }
  }
`

const Main = styled.main`
  max-width: 700px;
  margin: ${theme('spacing.xLarge')};
`

const Title = styled.h1`
  ${theme('typography.title')};
  margin-top: ${theme('spacing.xxxLarge')};
  text-align: left;
`

const List = styled.ul`
  margin: ${theme('spacing.large')};
  li {
    font-weight: 300;
  }
`

const Bold = styled.span`
  font-weight: 400;
  margin-top: ${theme('spacing.large')};
`

class About extends PureComponent {

  render() {
    const { lang, setLanguage } = this.props

    return (
      <>
        <Hero>
          <Header
            navigation={intl.about[lang].navigation}
            onChange={this.handleChangeLanguage}
            back
            reverse
            setLanguage={setLanguage}
          />
        </Hero>
        <Main>
          <Title>{intl.general[lang].intro}</Title>
          {intl.about[lang].description.map(p => (
            <Paragraph key={shortid.generate()}>{p}</Paragraph>
          ))}

          <Bold>{intl.about[lang].beyond.title}</Bold>
          <List>
            {intl.about[lang].beyond.list.map(l => (
              <li key={shortid.generate()}>{l}</li>
            ))}
          </List>

          <Bold>{intl.about[lang].contacts}:</Bold>
          <Paragraph>
            <Footer contacts={contacts} />
          </Paragraph>
        </Main>
      </>
    )
  }
}

export default About
