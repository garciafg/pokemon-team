import { createGlobalStyle } from 'styled-components';

export const StyledHeader = createGlobalStyle `

    header{
        background-color: #91afc7;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 10vh;
        border-bottom: 4px solid #d6e1eb;
    }

    section{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 50rem;
    }

    section > ul{
        background-color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-radius: 0.5rem;
    }

    section > ul > li{
        padding: 0.5rem;
        cursor: pointer;
        font-size: 1.1rem;
    }

    .menu:hover{
        color: blue !important;
        text-decoration: underline;
        transition: 0.5s;
    }

`