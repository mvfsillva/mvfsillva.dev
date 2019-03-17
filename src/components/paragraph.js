import styled from 'styled-components'
import { theme } from 'styled-tools'

const Paragraph = styled.p`
  max-width: 80ch;
  ${theme('typography.paragraph')};
  color: ${theme('palette.black')};
  margin-top: ${theme('spacing.medium')};
  margin-bottom: ${theme('spacing.medium')};
`

export default Paragraph
