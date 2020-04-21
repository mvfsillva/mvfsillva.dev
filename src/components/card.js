import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'styled-tools'

import Paragraph from './paragraph'

const Wrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
  border-radius: ${theme('radious')};
  box-shadow: ${theme('shadow.medium')};
  background-color: ${theme('palette.white')};
  margin: ${theme('spacing.small')};
  color: ${theme('palette.black')};
  overflow: hidden;
`

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
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
  font-weight: 300;
  text-transform: initial;
  letter-spacing: normal;
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
`

const Card = ({ title, description, tag }) => (
  <Wrapper>
    <CardTitle>{title}</CardTitle>
    <Description>{description}</Description>
    <div>
      {tag.map(({ topic: { name } }) => (
        <Tag key={name}>{name}</Tag>
      ))}
    </div>
  </Wrapper>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tag: PropTypes.array.isRequired,
}

export default Card
