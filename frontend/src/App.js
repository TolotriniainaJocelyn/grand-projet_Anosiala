import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./Pages/Tsanta/acceuil.jsx";
import BureauEntree from "./Pages/tolotra/Bureau_entree.jsx";
import Login from "./Pages/tolotra/login.jsx";
import './App.css';
 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/bureau_entree" element={<BureauEntree />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
