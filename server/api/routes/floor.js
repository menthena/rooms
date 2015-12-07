'use strict';

// var _ = require('lodash');
var express = require('express');
var router = express.Router();
var models = require('../models');
var floor = models.floor;
var floorElement = models.floorElement;

router.get('/', function(req, res) {
  var sendResponse = function(err, floors) {
    res.send({ data: floors });
  };

  floor.find({}).exec(sendResponse);
});

router.get('/:id/elements', function(req, res) {
  var sendResponse = function(err, floorElements) {
    res.send({ data: floorElements });
  };

  floorElement.find({ floorID: req.params.id }).exec(sendResponse);
});

router.post('/:id/elements', function(req, res) {
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

router.patch('/:id/elements/:elementID', function(req, res) {
  var updatedModel = req.body;

  floorElement.findOneAndUpdate({ floorID: req.params.id, _id: req.params.elementID }, updatedModel, function(err) {
    if (err) {
      res.status(422);
      res.send({ message: 'Bad request'});
    }
    else {
      floorElement.findById(req.params.elementID, function(err, element) {
        if (err) {
          res.status(422);
          res.send({ message: 'Bad request'});
        } else {
          res.send({ data: element });
        }
      });
    }
  });
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
