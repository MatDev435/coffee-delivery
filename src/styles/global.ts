import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        line-height: 1.3;
        font-size: 1rem;
    }

    input {
        background: ${(props) => props.theme.input};
    }
`
