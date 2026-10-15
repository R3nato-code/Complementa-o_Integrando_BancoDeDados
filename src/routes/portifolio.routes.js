const express = require('express');
const portfolioController = require('../controller/portifolio.controller');

const router = express.Router();

router.get('/', portfolioController.mostrarPortfolio);

module.exports = router;
