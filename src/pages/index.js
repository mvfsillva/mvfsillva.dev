import React from 'react'
import styled from 'styled-components'

import lion from '../static/images/lion.svg'

const Lion = styled.div`
  background-image: url(${lion});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const IndexPage = () => <Lion />

export default IndexPage
