import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'

import contacts from '../helpers/contacts'

const Projects = () => {
  return (
    <>
      <Header navigation={['about', 'articles']} back />
      <Footer contacts={contacts} center />
    </>
  )
}

export default Projects
