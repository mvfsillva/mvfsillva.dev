import styled from 'styled-components'

const Hidden = styled.span`
  visibility: hidden;
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`

export default Hidden
