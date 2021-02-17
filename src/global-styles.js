import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body , a{
        font-family: 'Helvetica Neue', Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
        /* color: #333333; */
        font-size: 16px;
        margin: 0;
        list-style: none;
        text-decoration: none;
    }
`;
