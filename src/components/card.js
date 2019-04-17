import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'styled-tools'

import Paragraph from './paragraph'

const Wrapper = styled.div`
  border-radius: ${theme('radious')};
  box-shadow: ${theme('shadow.medium')};
  background-color: ${theme('palette.white')};
  padding: ${theme('spacing.medium')};
  margin: ${theme('spacing')};
  color: ${theme('palette.black')};
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
