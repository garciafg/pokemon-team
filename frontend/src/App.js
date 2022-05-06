import React from "react";
import { GlobalStorage } from "./GlobalContext";
import Header from './components/Header/';
import { BrowserRouter } from 'react-router-dom';
import Rotas from "./routes";

function App() {

  return (
    <BrowserRouter>
      <GlobalStorage>
        <Header />
        <div className="container">
          <Rotas />
        </div>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
