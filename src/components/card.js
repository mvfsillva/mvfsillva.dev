import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'styled-tools'

import Paragraph from './paragraph'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${theme('radious')};
  box-shadow: ${theme('shadow.small')};
  background-color: ${theme('palette.white')};
  padding: ${theme('spacing.medium')};
  margin: ${theme('spacing')};
  color: ${theme('palette.black')};
  height: 280px;
`

const Topics = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  ${theme('typography.subtitle')}
`

const Bold = styled.span`
  font-weight: 400;
  margin-top: ${theme('spacing.large')};
`

const Tag = styled.div`
  display: flex;
  span {
    font-weight: 300;
    font-size: 12px;
    margin: ${theme('spacing.small')};
    padding: ${theme('spacing.small')};
    border: 1px solid ${theme('palette.black')};
    border-radius: ${theme('radius')};
  }
`

const Card = ({ title, description, tag }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Paragraph>{description}</Paragraph>
    <Topics>
      <Bold>Topics</Bold>
      <Tag>
        {tag.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </Tag>
    </Topics>
  </Wrapper>
)

Card.defaultProps = {
  tag: [],
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tag: PropTypes.array,
}

export default Card
