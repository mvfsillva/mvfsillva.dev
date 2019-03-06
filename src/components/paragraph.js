import styled from 'styled-components'

const Paragraph = styled.p`
  color: ${({ theme }) => theme.palette.black};
  font-size: ${({ theme }) => theme.typography.paragraph.fontSize};
  font-weight: ${({ theme }) => theme.typography.paragraph.fontWeight};
`

export default Paragraph
