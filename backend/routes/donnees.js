const express = require('express');
const donneesController = require('../controllers/donneesController');

const router = express.Router();

// Assurez-vous que la route est correctement définie
router.post('/ajouterDonnees', donneesController.ajouterDonnees);

module.exports = router;
