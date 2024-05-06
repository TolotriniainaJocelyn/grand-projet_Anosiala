// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar(){
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar">
          <div className="col offset-5">
            <ul className="navbar-list">
              <li className="navbar-item">
                <Link to="/" className="navbar-link">Hospitalisation</Link>
              </li>
              <li className="navbar-item">
                <Link to="/Bureau_entree" className="navbar-link">Burreau des Entree</Link>
              </li>
              <li>
                  <input type="text" placeholder='Rechercher ...' className='input' />
                  <button className='button-recherche'>Recherche</button>     
                  <h1>mande</h1>          
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;



