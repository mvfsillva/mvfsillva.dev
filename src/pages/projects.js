import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Card from '../components/card'
import Header from '../components/header'
import Footer from '../components/footer'
import Loader from '../components/loader'

import Content from '../styles/content'

import contacts from '../helpers/contacts'
import intl from '../helpers/intl'

import Either from '../utils/either'

import getProjects from '../queries/projects'

const Projects = ({ lang, setLanguage }) => {
  const [data, setData] = useState([])
  const fetchCardList = async () => {}

  useEffect(() => fetchCardList(), {})

  getProjects()
  return (
    <>
      <Header navigation={intl.general[lang].navigation} setLanguage={setLanguage} back />
      <Content>
        <Either
          condition={data}
          correct={<Card data={data} title={intl.projects[lang].title} />}
          exception={<Loader />}
        />
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
