import styled from 'styled-components'
import { theme } from 'styled-tools'

const Paragraph = styled.p`
  ${theme('typography.paragraph')};
  color: ${theme('palette.black')};
  margin-top: ${theme('spacing.medium')};
  margin-bottom: ${theme('spacing.medium')};
`

export default Paragraph
