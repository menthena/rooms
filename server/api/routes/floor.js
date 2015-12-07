'use strict';

// var _ = require('lodash');
var express = require('express');
var router = express.Router();
var models = require('../models');
var floor = models.floor;

router.get('/', function(req, res) {
  var sendResponse = function(err, floors) {
    res.send({ data: floors });
  };

  floor.find({}).exec(sendResponse);
});

router.patch('/:id', function(req, res) {
  var updatedModel = req.body;

  floor.findOne({ elementName: updatedModel.elementName }, function(err, floorDetails) {
    if (floorDetails && String(floorDetails._id) !== String(req.params.id)) {
      res.status(500);
      res.send({ message: 'Already exists' });
    } else {
      floor.findOneAndUpdate({ _id: req.params.id }, updatedModel, function(err, floor) {
        if (err) {
          res.status(422);
          res.send({ message: 'Bad request'});
        }
        else {
          res.send({ data: floor });
        }
      });
    }
  });
});

router.post('/', function(req, res) {
  var newFloor = req.body;
  floor.count(newFloor, function(err, floorCount) {
    if (err) {
      res.status(422);
      res.send({ message: 'Bad request'});
    } else if (floorCount > 0) {
      res.status(500);
      res.send({ message: 'Already exists' });
    } else {
      floor.create(newFloor, function(err, floor) {
        if (err) {
          res.status(422);
          res.send({ message: 'Bad request'});
        }
        else {
          res.status(201).send({ data: floor });
        }
      });
    }
  });
});

router.delete('/:id', function(req, res) {

  floor.remove({ _id: req.params.id }, function(err) {
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
