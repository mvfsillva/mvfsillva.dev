import React, { Component } from 'react'
import styled from 'styled-components'

import Content from '../styles/content'

import Header from '../components/header'
import Footer from '../components/footer'

import contacts from '../helpers/contacts'
import intl from '../helpers/intl'

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

class IndexPage extends Component {
  state = {
    lang: 'en',
  }

  componentDidMount() {
    const lang = localStorage.getItem('language')
    this.setState({ lang })
  }

  handleChange = lang => {
    this.setState({ lang })
  }

  render() {
    const { lang } = this.state

    return (
      <>
        <Header navigation={intl.home[lang].navigation} onChange={this.handleChange} />

        <Content>
          <Hgroup>
            <Intro>{intl.general[lang].intro}</Intro>
            <SubTitle>{intl.home[lang].sub}</SubTitle>
          </Hgroup>
        </Content>
        <Footer center contacts={contacts} />
      </>
    )
  }
}

export default IndexPage
