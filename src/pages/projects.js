import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'styled-tools'

import Card from '../components/card'
import Header from '../components/header'
import Footer from '../components/footer'

import Content from '../styles/content'

import contacts from '../helpers/contacts'
import intl from '../helpers/intl'

import getProjects from '../queries/projects'

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > div {
    width: 40%;
    margin: ${theme('spacing.small')};
    padding: ${theme('spacing')};
  }

  @media (max-width: 600px) {
    > div {
      width: 100%;
    }
  }
`

const Main = styled(Content)`
  flex: inherit;
`

const Projects = ({ lang, setLanguage }) => {
  const data = getProjects()

  return (
    <>
      <Header navigation={intl.general[lang].navigation} setLanguage={setLanguage} back />
      <Main>
        <FlexWrap>
          {data.map(({ node: { name, description, repositoryTopics: { nodes } } }) => (
            <Card key={name} title={name} description={description} tag={nodes} />
          ))}
        </FlexWrap>
      </Main>
      <Footer center contacts={contacts} />
    </>
  )
}

Projects.propTypes = {
  lang: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
}

export default Projects
