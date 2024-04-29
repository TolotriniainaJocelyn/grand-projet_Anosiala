import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios'; 

function Acceuil() {
  const [nom, setNom] = useState('');
  const [age, setAge] = useState('');
  const [code, setCode] = useState(''); // État pour stocker le code saisi par l'utilisateur
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false); // État pour contrôler la visibilité du formulaire
  const [showCodeInput, setShowCodeInput] = useState(false); // État pour contrôler la visibilité du champ de code

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (code !== '1010') { // Vérifie le code saisi par l'utilisateur
      setMessage('Code incorrect');
      return;
    }

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
      <Link onClick={() => { setShowForm(true); setShowCodeInput(true); }}>Nouveau Patient</Link> {/* Lien pour afficher le formulaire et le champ de code */}
      
      {showForm && ( /* Affichage conditionnel du formulaire en fonction de showForm */
        <form onSubmit={handleSubmit}>
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} required/>
          <label htmlFor="age">Age :</label>
          <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} required/>
          {showCodeInput && ( /* Affichage conditionnel du champ de code en fonction de showCodeInput */
            <>
              <label htmlFor="code">Code :</label> {/* Champ pour saisir le code */}
              <input type="password" id="code" name="code" value={code} onChange={(e) => setCode(e.target.value)} required/>
            </>
          )}
          <button type="submit">Envoyer</button>
        </form>
      )}

      <div id="message">{message}</div>
    </div>
  );
}

export default Acceuil;
