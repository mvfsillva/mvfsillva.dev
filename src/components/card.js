import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'styled-tools'

import Paragraph from './paragraph'
import Anchor from './anchor'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${theme('radious')};
  box-shadow: ${theme('shadow.small')};
  background-color: ${theme('palette.white')};
  padding: ${theme('spacing.medium')};
  margin: ${theme('spacing')};
  color: ${theme('palette.black')};
  width: 380px;
  height: 260px;

  @media (max-width: 600px) {
    width: 280px;
    height: 320px;
  }
`

const FlexWrap = styled.div`
  widows: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: ${theme('spacing.large')};
  justify-content: center;
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
`

const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
  line-height: 40px;
`

const Tag = styled.span`
  padding: ${theme('spacing.small')};
  margin: ${theme('spacing.small')};
  display: inline-block;
  border: 1px solid ${theme('palette.black')};
  border-radius: ${theme('radius')};
  font-size: 12px;
  text-transform: lowercase;
  letter-spacing: normal;
  line-height: normal;
`

const Description = styled(Paragraph)`
  max-width: 50ch;
  font-size: 14px;
  font-weight: 300;
  line-height: normal;
  text-transform: initial;
  letter-spacing: normal;
`

const Title = styled.h1`
  ${theme('typography.title')};
  margin-top: ${theme('spacing.xxxLarge')};
  margin-bottom: ${theme('spacing.large')};
  margin-left: ${theme('spacing.huge')};
  margin-right: ${theme('spacing.huge')};
  text-transform: capitalize;
  text-align: center;
`

const Card = ({ data, title }) => (
  <Container>
    <Title>{title}</Title>
    <FlexWrap>
      {data.map(({ node: { name, description, url, repositoryTopics } }) => (
        <Anchor href={url} title={name} key={url} target="_blank">
          <Wrapper>
            <CardTitle>{name}</CardTitle>
            <Description>{description}</Description>
            <div>
              {repositoryTopics.nodes.map(({ topic: { name } }) => (
                <Tag key={name}>{name}</Tag>
              ))}
            </div>
          </Wrapper>
        </Anchor>
      ))}
    </FlexWrap>
  </Container>
)

Card.defaultProps = {
  data: [],
}

Card.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default Card
