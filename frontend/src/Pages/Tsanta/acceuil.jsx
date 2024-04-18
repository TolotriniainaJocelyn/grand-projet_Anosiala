import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios'; 

function Acceuil() {
  const [nom, setNom] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const ressources = {
      nom: nom,
      age: parseInt(age)
    };
    try {
      const response = await axios.post('http://localhost:3000/ajouterDonnees', ressources);
      if (response.status === 200) {
        setMessage('Données insérées avec succès');
      } else {
        throw new Error('Erreur lors de l\'envoi des données');
      }
    } catch (error) {
      setMessage('Erreur lors de l\'envoi des données');
      console.error('Erreur lors de l\'envoi des données :', error);
    }
  };

  return (
    <div className="App">
      <h1>Envoi de données vers PostgreSQL</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom :</label>
        <input type="text" id="nom" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} required/>
        <label htmlFor="age">Age :</label>
        <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} required/>
        <button type="submit">Envoyer</button>
      </form>
      <div id="message">{message}</div>
      <Link role="button" to="/bureau_entree">Bureau_entree</Link>
    </div>
  );
}

export default Acceuil;
