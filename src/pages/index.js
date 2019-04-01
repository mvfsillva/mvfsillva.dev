import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
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

class IndexPage extends PureComponent {
  static propTypes = {
    lang: PropTypes.string,
    setLanguage: PropTypes.func
  }

  render() {
    const { lang, setLanguage } = this.props

    return (
      <>
        <Header navigation={intl.home[lang].navigation} setLanguage={setLanguage} />
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
