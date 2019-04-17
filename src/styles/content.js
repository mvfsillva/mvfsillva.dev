import styled from 'styled-components'
import { theme } from 'styled-tools'

const Content = styled.main`
  width: 100%;
  max-width: 1400px;
  padding: ${theme('spacing.xxxLarge')};
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  flex: ${props => (props.flex ? `${props.flex} 0 auto` : '1 0 auto')};
`

export default Content
