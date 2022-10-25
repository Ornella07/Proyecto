var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/noveModel');


/* GET home page. */
router.get('/', async function(req, res, next) {
  portafolio = await novedadesModel.getNovedades();
  portafolio = portafolio.splice(0,5);
  res.render('portafolio'),{
    portafolio
  }  
  });








module.exports = router;
