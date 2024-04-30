const pool = require('../db');

const ajouterDonnees = async (req, res) => {
    try {
        const { nom, age } = req.body;
        const donnees = {
            nom: nom,
            age: parseInt(age)
        };
        const query = {
            text: 'INSERT INTO pers (ressources) VALUES ($1) RETURNING *',
            values: [JSON.stringify(donnees)]
        };
        const result = await pool.query(query);
        console.log('Données insérées avec succès');
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error('Erreur lors de l\'insertion des données :', err);
        res.status(500).json({ message: 'Erreur lors de l\'insertion des données', error: err });
    }
};

module.exports = {
    ajouterDonnees
};
