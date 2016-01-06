'use strict';

var _ = require('lodash');
var express = require('express');
var router = express.Router();
var models = require('../models');
var floor = models.floor;
var middleware = require('../middleware');
var floorElement = models.floorElement;
var io = require('../../socket');

router.get('/', middleware.requiresUser, function(req, res) {
  var sendResponse = function(err, floors) {
    res.send({ data: floors });
  };

  floor.find({}).exec(sendResponse);
});

router.get('/:id/elements', middleware.requiresUser, function(req, res) {
  var sendResponse = function(err, floorElements) {
    res.send({ data: floorElements });
  };

  floorElement.find({ floorID: req.params.id }).exec(sendResponse);
});

router.post('/:id/elements', middleware.requiresUser, function(req, res) {
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
          io.sockets.emit('elements', floorElement);
          res.status(201).send({ data: floorElement });
        }
      });
    }
  });
});

router.patch('/:id/elements/:elementID', middleware.requiresUser, function(req, res) {
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
          io.sockets.emit('elements', element);
          res.send({ data: element });
        }
      });
    }
  });
});

router.patch('/:id', function(req, res) {
  var updatedModel = req.body;

  floor.findOne({ floorName: updatedModel.floorName }, function(err, floorDetails) {
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

router.put('/change-order', function(req, res) {
  floor.find({}, function(err, _floors) {
    if (err) {
      res.status(500);
      res.send({ message: 'Already exists' });
    } else {
      var floors = [];
      _.each(_floors, function(item) {
        floors.push(item);
      });
      floors = _.sortBy(floors, 'order');
      var floorID = req.body.floorID;
      var direction = req.body.direction;
      var _floor = _.find(floors, function(item) {
        return String(item._id) === String(floorID);
      });
      var currentIndex = _floor.order;
      if (direction === 'up' && currentIndex > 0) {
        floors[currentIndex].order = currentIndex - 1;
        floors[currentIndex - 1].order = currentIndex;
        floor.findOneAndUpdate({ _id: floors[currentIndex]._id }, { order: floors[currentIndex].order }, function() {});
        floor.findOneAndUpdate({ _id: floors[currentIndex - 1]._id }, { order: floors[currentIndex - 1].order }, function() {});
      } else if (direction === 'down' && floors.length > currentIndex + 1) {
        floors[currentIndex + 1].order = currentIndex;
        floors[currentIndex].order = currentIndex + 1;
        floor.findOneAndUpdate({ _id: floors[currentIndex]._id }, { order: floors[currentIndex].order }, function() {});
        floor.findOneAndUpdate({ _id: floors[currentIndex + 1]._id }, { order: floors[currentIndex + 1].order }, function() {});
      }
      res.send({ data: floors });
    }
  });
});

router.post('/', middleware.requiresUser, function(req, res) {
  var newFloor = req.body;
  floor.count({}, function(err) {
    if (err) {
      res.status(422);
      res.send({ message: 'Bad request'});
    } else {
      floor.update({}, {$inc: { order: 1 }}, { multi: true }, function(err) {
        if (err) {
          res.status(422);
          res.send({ message: 'Bad request'});
        } else {
          newFloor.order = 0;
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
    }
  });
});

router.delete('/:id', middleware.requiresUser, function(req, res) {

  floor.remove({ _id: req.params.id }, function(err) {
    if (err) {
      res.status(422);
      res.send({ message: 'Bad request'});
    }
    else {
      floor.update({}, { order: 0 }, { multi: true }, function(err) {
        if (!err) {
          floor.find({}, function(err, docs) {
            _.each(docs, function(doc, index) {
              floor.findOneAndUpdate({ _id: doc._id }, { order: index }, function() {
              });
            });
          });
        }
      });
      res.status(204);
      res.send({});
    }
  });
});

module.exports = router;
