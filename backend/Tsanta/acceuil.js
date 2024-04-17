
function Acceuil(){
    app.post('/ajouterDonnees', (req, res) => {
        // Récupérer les données JSON envoyées depuis le front-end
        const { nom, age } = req.body;
      
        // Construire l'objet JSON avec la structure attendue
        const donnees = {
          Pers: {
            nom: nom,
            age: parseInt(age)
          }
        };
      
        // Requête SQL pour insérer les données JSON dans la table appropriée
        const query = {
          text: 'INSERT INTO pers (ressources) VALUES ($1)',
          values: [JSON.stringify(donnees)], // Convertir l'objet JSON en chaîne JSON avant l'insertion
        };
      
        // Exécution de la requête SQL
        client.query(query, (err, result) => {
          if (err) {
            console.error('Erreur lors de l\'insertion des données :', err);
            res.status(500).json({ message: 'Erreur lors de l\'insertion des données' });
          } else {
            console.log('Données insérées avec succès');
            res.status(200).json({ message: 'Données insérées avec succès' });
          }
        });
      });    
}
module.exports = Acceuil;