import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/";
import Create from "./Pages/Create/";

const Rotas = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </div>
    );
}
export default Rotas;