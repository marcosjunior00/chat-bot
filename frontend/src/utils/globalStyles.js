import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body, html, * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;
    }

    body {
        background-color: #141414;
    }
`