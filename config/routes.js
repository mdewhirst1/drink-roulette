var express = require('express');
var router = express.Router();

var rouletteController = require('../controllers/roulette-controller');

router.route('/')
      .get(rouletteController.index);

router.route('/setup')
      .get(rouletteController.setup);

router.route('/play')
      .get(rouletteController.play);

module.exports = router;