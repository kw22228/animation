import { createGlobalStyle } from 'styled-components';
import '@fontsource/kaushan-script'; //폰트
import '@fontsource/sirin-stencil'; //폰트

const GlobalStyles = createGlobalStyle`

*, *::before, *::after{
    margin:0;
    padding:0;
}

body{
    font-family: "sirin stencil";
    overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6{
    margin: 0;
    padding: 0;
}

a{
    color: inherit;
    text-decoration: none;
}
`;

export default GlobalStyles;
