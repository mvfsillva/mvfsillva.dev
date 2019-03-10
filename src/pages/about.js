import React from 'react'
import styled from 'styled-components'

import Main from '../layouts/main'
import Content from '../styles/content'
import Hero from '../components/hero'

import avatar from '../static/images/avatar.png'


const About = () => (
  <Main>
    <Hero />
    <Content>
      <h1>About Page</h1>
    </Content>
  </Main>
)

export default About