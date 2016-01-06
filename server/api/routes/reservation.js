'use strict';

var _ = require('lodash');
var express = require('express');
var router = express.Router();
var models = require('../models');
var reservation = models.reservation;
var floorElement = models.floorElement;
var io = require('../../socket');
var middleware = require('../middleware');
var moment = require('moment');

router.get('/', middleware.requiresUser, function(req, res) {
  var sendResponse = function(err, reservations) {
    var roomIDs = [];
    var updatedReservations = [];
    _.each(reservations, function(reservation) {
      roomIDs.push(reservation.elementID);
      updatedReservations.push(reservation);
    });

    floorElement.find({
      _id: {
        $in: roomIDs
      }
    }, function(err, rooms) {
      if (err) {
        res.send(422, 'Bad request');
      } else {
        _.each(updatedReservations, function(updatedReservation, index) {
          var foundRoom = _.find(rooms, function(room) {
            return String(room._id) === String(updatedReservation.elementID);
          });
          if (foundRoom) {
            updatedReservations[index].room = foundRoom.elementName;
          }
        });
        res.send({ data: updatedReservations });
      }
    });
  };
  reservation
    .find({ reservationDate: { $gt: moment().add(-1, 'day') } })
    .exec(sendResponse);
});

router.patch('/:id', middleware.requiresUser, function(req, res) {
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

router.post('/', middleware.requiresUser, function(req, res) {
  var newReservation = req.body;
  var reservations = [newReservation];
  var startDate = newReservation.reservationDate;
  var endDate = newReservation.reservationEndDate;
  var recurringEndDate = newReservation.recurringEndDate;
  var diff, i, reservationID;
  if (newReservation.recurring) {
    switch(newReservation.recurring) {
      case 'day':
        diff = moment.utc(recurringEndDate).diff(startDate, 'day');
        for (i = 0; i < diff; i++) {
          startDate.add(1, 'day');
          endDate.add(1, 'day');
          newReservation.reservationDate = startDate;
          newReservation.reservationEndDate = endDate;
          reservations.push(newReservation);
        }
        break;
      case 'week1':
      case 'week2':
      case 'week3':
        var week = newReservation.recurring.replace(/week/, '');
        diff = moment.utc(recurringEndDate).diff(startDate, 'week');
        for (i = 0; i < diff; i++) {
          startDate.add(week, 'week');
          endDate.add(week, 'week');
          newReservation.reservationDate = startDate;
          newReservation.reservationEndDate = endDate;
          reservations.push(newReservation);
        }
        break;
      case 'month':
        diff = moment.utc(recurringEndDate).diff(startDate, 'month');
        for (i = 0; i < diff; i++) {
          startDate.add(1, 'month');
          endDate.add(1, 'month');
          newReservation.reservationDate = startDate;
          newReservation.reservationEndDate = endDate;
          reservations.push(newReservation);
        }
        break;
    }
  }
  reservation.count(newReservation, function(err, reservationCount) {
    if (err) {
      res.status(422);
      res.send({ message: 'Bad request'});
    } else if (reservationCount > 0) {
      res.status(500);
      res.send({ message: 'Already exists' });
    } else {
      _.each(reservations, function(newReservation, index) {
        if (reservationID) {
          newReservation.reservationID = reservationID;
        }
        reservation.create(newReservation, function(err, reservation) {
          if (index === 0) {
            reservationID = reservation._id;
            if (err) {
              res.status(422);
              res.send({ message: 'Bad request'});
            }
            else {
              io.sockets.emit('reservations', 1);
              res.status(201).send({ data: reservation });
            }
          }
        });
      });
    }
  });
});

router.delete('/:id', middleware.requiresUser, function(req, res) {

  reservation.remove({ _id: req.params.id }, function(err, deletedReservation) {
    if (err) {
      res.status(422);
      res.send({ message: 'Bad request'});
    }
    else {
      if (req.params.deleteRecurring) {
        reservation.remove({ recurringID: deletedReservation.recurringID }, function(err) {
          if (err) {
            console.log(err);
          }
        });
      }
      reservation
        .find({ reservationDate: { $gt: moment().add(-1, 'day') } })
        .exec(function(err, reservations) {
          if (err) {
            res.status(422);
            res.send({ message: 'Bad request'});
          } else {
            _.remove(reservations, function(item) {
              return item._id === req.params.id;
            });
            io.sockets.emit('reservations', 1);
            res.status(201);
            res.send({ data: reservations} );
          }
        });
    }
  });
});

module.exports = router;
