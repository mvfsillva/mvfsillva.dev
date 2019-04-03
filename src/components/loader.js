import styled, { keyframes } from 'styled-components'
import { theme } from 'styled-tools'

const rotate = keyframes`
  0%    { transform: rotate(0deg); }
  100%  { transform: rotate(360deg); }
`

const Loader = styled.div`
  height: 70px;
  width: 70px;
  animation: ${rotate} 1s infinite linear;
  border: ${theme('spacing')} solid ${theme('palette.black')};
  border-right-color: transparent;
  border-radius: 50%;
`

export default Loader
