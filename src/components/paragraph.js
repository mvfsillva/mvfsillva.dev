import styled from 'styled-components'
import { theme } from 'styled-tools'

const Paragraph = styled.p`
  ${theme('typography.paragraph')};
  color: ${theme('palette.black')};
  padding: ${theme('spacing')};
`

export default Paragraph
