import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open Sans, Helvetica Neue, Helvetica, sans-serif;
    font-size: 16px;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    &::after,
    &::before {
      box-sizing: inherit;
    }
  }
  html {
    box-sizing: border-box;
    font-family: sans-serif;
    text-size-adjust: 100%;
    background: #ffffff;
  }
  a {
    text-decoration: none;
  }
`

export default GlobalStyles
