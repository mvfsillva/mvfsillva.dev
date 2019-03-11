import styled from 'styled-components'

const Paragraph = styled.p`
  ${({ theme }) => theme.typography.paragraph};
  color: ${({ theme }) => theme.palette.black};
  padding: ${({ theme }) => theme.spacing};
`

export default Paragraph
