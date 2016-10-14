var express = require('express');
var router = express.Router();

var rouletteController = require('../controllers/roulette-controller');

router.route('/')
      .get(rouletteController.index);

module.exports = router;