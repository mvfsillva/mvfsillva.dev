import styled from 'styled-components'

const Content = styled.main`
  width: 100%;
  max-width: 1400px;
  padding: ${({ theme }) => theme.spacing.xxxLarge};
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  flex: 1 0 auto;
`

export default Content
