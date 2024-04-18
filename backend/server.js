const express = require('express')
const app = express()
const cors = require("cors")
const pool = require("./db")

// middleware
app.use(cors())
app.use(express.json()) 


//#########################################################
app.post('/ajouterDonnees', async (req, res) => {
    try {
        // Récupérer les données JSON envoyées depuis le front-end
        const { nom, age } = req.body;

        // Construire l'objet JSON avec la structure attendue
        const donnees = {
            nom: nom,
            age: parseInt(age)
        };

        // Requête SQL pour insérer les données JSON dans la table appropriée
        const query = {
            text: 'INSERT INTO pers (ressources) VALUES ($1) RETURNING *', // Ajouter RETURNING * pour récupérer les données insérées
            values: [JSON.stringify(donnees)]
        };

        // Exécution de la requête SQL
        const result = await pool.query(query);
        console.log('Données insérées avec succès');
        res.status(200).json(result.rows[0]); // Renvoyer les données insérées en JSON
    } catch (err) {
        console.error('Erreur lors de l\'insertion des données :', err);
        res.status(500).json({ message: 'Erreur lors de l\'insertion des données', error: err });
    }
});





//########################################################

app.listen(3000, () => {
    console.log("server demmarrer au port 3000");
})