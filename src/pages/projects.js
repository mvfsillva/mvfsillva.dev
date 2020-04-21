import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'styled-tools'
import { transitions } from 'polished'

import { transition } from '../mixins/transition'
import { Card, Header, Footer, Link } from '../components'

import Content from '../styles/content'

import contacts from '../helpers/contacts'
import intl from '../helpers/intl'
import { useGithubRepositories } from '../hooks/use-projects'

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;

  a {
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

    @media (min-width: 40rem) {
      width: 50%;
    }

    @media (min-width: 56rem) {
      width: 33.3333%;
    }
  }
`
const Projects = ({ lang, setLanguage }) => {
  const repositories = useGithubRepositories()

  return (
    <>
      <Header navigation={intl.general[lang].navigation} setLanguage={setLanguage} back />
      <Content>
        <FlexWrap>
          {repositories.map(({ node: { name, description, url, repositoryTopics: { nodes } } }) => (
            <Link href={url} key={name}>
              <Card title={name} description={description} tag={nodes} />
            </Link>
          ))}
        </FlexWrap>
      </Content>
      <Footer center contacts={contacts} />
    </>
  )
}

Projects.propTypes = {
  lang: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
}

export default Projects
