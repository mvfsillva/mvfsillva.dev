import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'styled-tools'
import { transitions } from 'polished'

import { transition } from '../mixins/transition'

import Card from '../components/card'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from '../components/link'

import Content from '../styles/content'

import contacts from '../helpers/contacts'
import intl from '../helpers/intl'

import getProjects from '../queries/projects'

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  a {
    width: 40%;
    margin: ${theme('spacing.small')};
    padding: ${theme('spacing')};
    > div {
      height: 95%;
      ${transitions(transition({ property: 'box-shadow', duration: '250ms' }))};
    }
    &:hover {
      > div {
        box-shadow: ${theme('shadow.large')};
        ${transitions(transition({ property: 'box-shadow', duration: '250ms' }))};
      }
    }
  }

  @media (max-width: 870px) {
    a {
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
          {data.map(({ node: { name, description, url, repositoryTopics: { nodes } } }) => (
            <Link href={url} key={name}>
              <Card title={name} description={description} tag={nodes} />
            </Link>
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
