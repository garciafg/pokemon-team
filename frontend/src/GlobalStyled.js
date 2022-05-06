import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle `

*{
    box-sizing: border-box;
}
a{
    text-decoration: none;
}
body {
    margin: 0;
    --type-first: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-family: var(--type-first);
    --type-second: Helvetica, Georgia;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: black;
    color: #5b717b;
}

h1, h2, h3, h4, h5, h6, p {
    margin: 0;
}
ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
}
img{
    max-width: 100%;
    display: block;
}
button, input{
    display: block;
    font-size: 1rem;
    font-family: var(--type-first);
    color: aliceblue;
}
main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
.container{
    max-width: 50rem;
    margin: 0 auto;
    padding: 0 1rem;
    background-color: #eaebed;
}

.app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: black;
}

.title-page{
    font-size: 2rem;
    font-weight: bold;
    color: #5b717b;
    background-color: #91afc7;
    padding: 1rem;
}

.input-team {
    width: 100%;
    border: none;
    border-bottom: 1px solid #5b717b;
    padding: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #5b717b;
    background-color: #ffffff;
    width: 50%;
    align-self: stretch;
    margin-top: 2rem;
}

.btns-create-team{
    display: flex;
    justify-content:flex-end;
    width: 100%;
    padding: 1rem 5rem 1rem 0;
}

.btn-team{
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    color: #ffffff;;
    cursor: pointer;  
    transition: all 0.3s;
    &:hover{
        transform: scale(1.1);
    }
}

.btn-team >.btn-success-true, .btn-team >.btn-danger-true{
    width: 5rem;
    height: 5rem;
    opacity: 0.3;
}
.btn-team >.btn-success-false, .btn-team >.btn-danger-false {
    width: 5rem;
    height: 5rem;
}

.input-team:focus{
    outline: none;
}

.input-team::after {
    content: "→";
    color: #5b717b;
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 0.5rem;
    
  }
.my-team ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
.my-team img{
    width: 150px;
    height: 150px;
    margin: 1rem;
}
.my-team li {
    width: calc(100% / 3 - 1rem);
    height: calc(100% / 2 - 1rem);
    margin: 0.2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.choose-pokemons{
    display: block;
    width: 100%;
    background-color: #eaebed;
    
}
.pokemon-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30rem;
    // Criar barras de scroll
    overflow-y: scroll;
}

.pokemon-list li {

    margin: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    width: 10rem;
    height: 10rem;
}

.card{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    background-color: #eaebed;
    padding: 1rem;
    border: 1px solid #cccccc;
    cursor: pointer;
}
.my-team-home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #eaebed;

}
.my-team-home h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #5b717b;
    padding: 1.5rem 0 1.5rem 0;

}
#home-list{
    display: block;
    width: 100%;
    background-color: #eaebed;
    overflow-y: scroll;
    height: 40rem;
}
.my-team-home ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20rem;
    background-color: #eaebed;
}

.my-team-home ul li {
    width: 100%;
    height: 28rem;
    justify-content: center;
    align-items: center !important;
    border-radius: 0.5rem;
    border: 1px solid #cccccc;
    box-shadow: 0 0 0.5rem 0 rgba(0,0,0,0.2);
    cursor: pointer;
    padding: 0 0 1rem 3rem;
    margin: 2rem 0 2rem 0;
}
.detailHomePok {
    width: 30%;
    height: 150px;
    display: inline-block;
    align-items: center;
    justify-content: center;
}

.detailHomePok img{
    width: 250px;
    height: 150px;
    transition: all 0.3s;
    align-items: center;
    &:hover{
        transform: scale(1.1);
    }
}
.card img{
    cursor: pointer;
    margin-top: 2rem;
}

.icon-success {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    align-items: center;
}
.icon-success img{
    transition: all 0.5s;
}
.hide-checkbox { display: none }

.idpok{
    // Criar um circulo azul
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 20%;
    border-radius: 50%;
    background-color: #90ADC6;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    color: #ffffff;
    font-weight: bold;
    text-align: center;

}

`


    