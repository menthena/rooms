'use strict';

// var _ = require('lodash');
var express = require('express');
var router = express.Router();
var models = require('../models');
var reservation = models.reservation;
var io = require('../../socket');
var moment = require('moment');

router.get('/', function(req, res) {
  var sendResponse = function(err, reservations) {
    res.send({ data: reservations });
  };
  reservation
    .find({ reservationDate: { $gt: moment().add(-1, 'day') } })
    .exec(sendResponse);
});

router.patch('/:id', function(req, res) {
  var updatedModel = req.body;

  reservation.findOne({ elementName: updatedModel.elementName }, function(err, reservationDetails) {
    if (reservationDetails && String(reservationDetails._id) !== String(req.params.id)) {
      res.status(500);
      res.send({ message: 'Already exists' });
    } else {
      reservation.findOneAndUpdate({ _id: req.params.id }, updatedModel, function(err, reservation) {
        if (err) {
          res.status(422);
          res.send({ message: 'Bad request'});
        }
        else {
          io.sockets.emit('reservations', 1);
          res.send({ data: reservation });
        }
      });
    }
  });
});

router.post('/', function(req, res) {
  var newReservation = req.body;
  reservation.count(newReservation, function(err, reservationCount) {
    if (err) {
      res.status(422);
      res.send({ message: 'Bad request'});
    } else if (reservationCount > 0) {
      res.status(500);
      res.send({ message: 'Already exists' });
    } else {
      reservation.create(newReservation, function(err, reservation) {
        if (err) {
          res.status(422);
          res.send({ message: 'Bad request'});
        }
        else {
          io.sockets.emit('reservations', 1);
          res.status(201).send({ data: reservation });
        }
      });
    }
  });
});

router.delete('/:id', function(req, res) {

  reservation.remove({ _id: req.params.id }, function(err) {
    if (err) {
      res.status(422);
      res.send({ message: 'Bad request'});
    }
    else {
      io.sockets.emit('reservations-delete', reservation);
      res.status(204);
      res.send({});
    }
  });
});

module.exports = router;
