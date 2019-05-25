import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'styled-tools'

import { Header, Footer } from '../components'

import contacts from '../helpers/contacts'
import intl from '../helpers/intl'

import Content from '../styles/content'

const Intro = styled.h1`
  ${theme('typography.intro')};
`

const SubTitle = styled.h2`
  ${theme('typography.subtitle')};
  margin-top: ${theme('spacing.large')};
`

const Hgroup = styled.hgroup`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${theme('responsive.smallTablet')} {
    align-items: flex-start;
  }
`

const IndexPage = ({ lang, setLanguage }) => (
  <>
    <Header navigation={intl.general[lang].navigation} setLanguage={setLanguage} />
    <Content flex={10}>
      <Hgroup>
        <Intro>{intl.general[lang].intro}</Intro>
        <SubTitle>{intl.home[lang].sub}</SubTitle>
      </Hgroup>
    </Content>
    <Footer center contacts={contacts} />
  </>
)

IndexPage.propTypes = {
  lang: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
}

export default IndexPage
