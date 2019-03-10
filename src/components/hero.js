import React from 'react'
import styled from 'styled-components'

import Lion from '../icons/lion'

const Wrapper = styled.header`
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.palette.black};
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  max-width: 980px;
  padding: ${({ theme }) => theme.spacing.large};
`

const Hero = () => (
  <Wrapper>
    <Container>
      <Lion width={90} height={100} />
    </Container>
  </Wrapper>
)

export default Hero
