'use strict';

var express = require('express');
var router = express.Router();
var floor = require('./floor');
var floorElement = require('./floorElement');
var company = require('./company');
var user = require('./user');
var reservation = require('./reservation');

module.exports = function() {
  router.use('/company', company);
  router.use('/user', user);
  router.use('/floor', floor);
  router.use('/floorElement', floorElement);
  router.use('/reservation', reservation);

  router.get('/', function(req, res) {
    res.render('index');
  });

  return router;
};
