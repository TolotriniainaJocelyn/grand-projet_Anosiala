import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./Pages/acceuil.jsx";
import BureauEntree from "./Pages/Bureau_entree.jsx"
import './App.css';
 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/bureau_entree" element={<BureauEntree />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
