import React, { useState } from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';

function Acceuil() {
  const [nom, setNom] = useState('');
  const [age, setAge] = useState('');
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false); // État pour contrôler la visibilité du formulaire

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (code !== '1010') {
      setMessage('Code incorrect');
      return;
    }

    const ressources = {
      nom: nom,
      age: parseInt(age)
    };

    try {
      const response = await axios.post('http://localhost:3000/api/ajouterDonnees', ressources);
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

  const handleNewPatientClick = () => {
    setShowForm(true); // Afficher le formulaire lorsque le lien est cliqué
  };

  return (
    <div className="App">
      {/* Lien pour afficher le formulaire */}
      <Link onClick={handleNewPatientClick}>Nouveau Patient</Link>

      {/* Afficher le formulaire si showForm est vrai */}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} required/>
          <label htmlFor="age">Age :</label>
          <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} required/>
          <label htmlFor="code">Code :</label>
          <input type="password" id="code" name="code" value={code} onChange={(e) => setCode(e.target.value)} required/>
          <button type="submit">Envoyer</button>
        </form>
      )}

      <div id="message">{message}</div>
    </div>
  );
}

export default Acceuil;
