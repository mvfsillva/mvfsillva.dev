import React from 'react'
import PropTypes from 'prop-types'

import Card from '../components/card'
import Header from '../components/header'
import Footer from '../components/footer'

import Content from '../styles/content'

import contacts from '../helpers/contacts'
import intl from '../helpers/intl'

import getProjects from '../queries/projects'

const Projects = ({ lang, setLanguage }) => (
  <>
    <Header navigation={intl.general[lang].navigation} setLanguage={setLanguage} back />
    <Content>
      <Card data={getProjects()} title={intl.projects[lang].title} />
    </Content>
    <Footer center contacts={contacts} />
  </>
)

Projects.propTypes = {
  lang: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
}

export default Projects
