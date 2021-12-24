import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background: whitesmoke;
    font-family: 'Lato', sans-serif;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    background-color: #1b1b1b;
    height: 100vh;
    width: 100%;
}
button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    border: 3px solid #23d997;
    background: transparent;
    background-color: #23d997;
    transition: all 0.5s ease;
    font-family: 'Lato', sans-serif;   
}
h1{
    font-size: 7rem;
    font-weight: 600;
    color: whitesmoke;
}
h2 {
    font-weight: lighter;   
}

h4 {
    font-weight: bold;
    font-size: 2rem;
}
a {
    font-size: 1.1rem;
}

p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}
`;

export default GlobalStyle;
