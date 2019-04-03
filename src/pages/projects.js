import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'styled-tools'
import gql from 'graphql-tag'

import Card from '../components/card'
import Header from '../components/header'
import Footer from '../components/footer'

import Content from '../styles/content'

import contacts from '../helpers/contacts'
import intl from '../helpers/intl'

import client from '../services/client'

const Title = styled.h1`
  ${theme('typography.title')};
  margin-top: ${theme('spacing.xxxLarge')};
  margin-bottom: ${theme('spacing.large')};
  margin-left: ${theme('spacing.huge')};
  margin-right: ${theme('spacing.huge')};
  text-transform: capitalize;
`

const Box = styled(Content)`
  flex-direction: column;
`

const Projects = ({ lang, setLanguage }) => {
  const [data, setData] = useState({})
  const fetchCardList = async () =>
    client
      .query({
        query: gql`
          {
            repositoryOwner(login: "mvfsillva") {
              ... on User {
                pinnedRepositories(first: 6) {
                  edges {
                    node {
                      name
                      description
                      url
                      forkCount
                      repositoryTopics(first: 9) {
                        nodes {
                          topic {
                            name
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      })
      .then(({ data: { repositoryOwner: pinnedRepositories } }) => setData(pinnedRepositories))
      .catch(error => console.error(error))

  useEffect(() => {
    fetchCardList()
  }, {})

  return (
    <>
      <Header navigation={intl.projects[lang].navigation} setLanguage={setLanguage} back />
      <Box>
        <Title>{intl.projects[lang].title}</Title>
        <Card data={data} />
      </Box>
      <Footer center contacts={contacts} />
    </>
  )
}

Projects.propTypes = {
  lang: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
}

export default Projects
