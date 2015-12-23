'use strict';

// var _ = require('lodash');
var express = require('express');
var middleware = require('../middleware');
var router = express.Router();
var models = require('../models');
var floorElement = models.floorElement;

router.get('/', middleware.requiresUser, function(req, res) {
  var sendResponse = function(err, floorElements) {
    res.send({ data: floorElements });
  };

  floorElement.find({}).exec(sendResponse);
});

router.patch('/:id', middleware.requiresUser, function(req, res) {
  var updatedModel = req.body;

  floorElement.findOne({ elementName: updatedModel.elementName }, function(err, floorElementDetails) {
    if (floorElementDetails && String(floorElementDetails._id) !== String(req.params.id)) {
      res.status(500);
      res.send({ message: 'Already exists' });
    } else {
      floorElement.findOneAndUpdate({ _id: req.params.id }, updatedModel, function(err, floorElement) {
        if (err) {
          res.status(422);
          res.send({ message: 'Bad request'});
        }
        else {
          res.send({ data: floorElement });
        }
      });
    }
  });
});

router.post('/', middleware.requiresUser, function(req, res) {
  var newFloor = req.body;
  floorElement.count(newFloor, function(err, floorElementCount) {
    if (err) {
      res.status(422);
      res.send({ message: 'Bad request'});
    } else if (floorElementCount > 0) {
      res.status(500);
      res.send({ message: 'Already exists' });
    } else {
      floorElement.create(newFloor, function(err, floorElement) {
        if (err) {
          res.status(422);
          res.send({ message: 'Bad request'});
        }
        else {
          res.status(201).send({ data: floorElement });
        }
      });
    }
  });
});

router.delete('/:id', middleware.requiresUser, function(req, res) {

  floorElement.remove({ _id: req.params.id }, function(err) {
    if (err) {
      res.status(422);
      res.send({ message: 'Bad request'});
    }
    else {
      res.status(204);
      res.send({});
    }
  });
});

module.exports = router;
