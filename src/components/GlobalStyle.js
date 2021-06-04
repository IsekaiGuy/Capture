import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;
        
    }
       
    button {
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white;
        transition: all 0.5s ease;

        &:hover {
        background: #23d997;
        color: white;
      }
    }

    h2 {
        font-weight: 300;
        font-size: 3.2rem;
    }

    h3 {
        color: white;
    }

    h4 {
        font-weight: 700;
    }

    a {
        font-size: 1.1rem;
    }

    span {
        font-weight: 700;
        color: #23d997
    }

    p {
        padding: 3rem 0rem;
        color: #cccccc;
        font-size: 1.1rem;
        line-height: 150%;
    }

`;

export default GlobalStyle;
