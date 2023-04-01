import { createGlobalStyle } from "styled-components";
import fonts from './fonts'
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${fonts}
  ${variables}

  * {
    padding: 0;
    margin: 0;
    font-family: var(--font-nunito);
    background-color: #05192b;
    color: white;
  }


`

export default GlobalStyle;