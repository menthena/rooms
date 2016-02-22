'use strict';

var _ = require('lodash');
var express = require('express');
var router = express.Router();
var models = require('../models');
var reservation = models.reservation;
var floorElement = models.floorElement;
var config = require('../../config/environment');
var io = config.socket;
var middleware = require('../middleware');
var moment = require('moment');

router.get('/', function(req, res) {
  var sendResponse = function(err, reservations) {
    var roomIDs = [];
    var updatedReservations = [];
    _.each(reservations, function(reservation) {
      roomIDs.push(reservation.elementID);
      updatedReservations.push(reservation);
    });

    if (err) {
      res.send(422, 'Bad request');
    }

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
          _.each(config.clients, function(socket) {
            socket.send('reservations');
          });
          res.send({ data: reservation });
        }
      });
    }
  });
});

router.post('/', middleware.requiresUser, function(req, res) {
  var newReservation = req.body;
  var reservations = [newReservation];
  var startDate = moment.utc(newReservation.reservationDate);
  var endDate = moment.utc(newReservation.reservationEndDate);
  var recurringEndDate = moment.utc(newReservation.until);
  var diff, i, reservationID, recurringReservation;
  if (newReservation.recurring) {
    switch(newReservation.interval) {
      case 'day':
        diff = moment(recurringEndDate).diff(startDate, 'day');
        console.log(diff);
        for (i = 0; i < diff; i++) {
          startDate.add(1, 'day');
          endDate.add(1, 'day');
          recurringReservation = _.clone(newReservation);
          recurringReservation.reservationDate = startDate;
          recurringReservation.reservationEndDate = endDate;
          reservations.push(recurringReservation);
        }
        break;
      case 'week1':
      case 'week2':
      case 'week3':
        var week = newReservation.interval.replace(/week/, '');
        diff = moment(recurringEndDate).diff(startDate, 'week');
        for (i = 0; i < diff; i++) {
          startDate.add(week, 'week');
          endDate.add(week, 'week');
          recurringReservation = _.clone(newReservation);
          recurringReservation.reservationDate = startDate;
          recurringReservation.reservationEndDate = endDate;
          reservations.push(recurringReservation);
        }
        break;
      case 'month':
        diff = moment(recurringEndDate).diff(startDate, 'month');
        console.log(diff);
        for (i = 0; i < diff; i++) {
          startDate.add(1, 'month');
          endDate.add(1, 'month');
          recurringReservation = _.clone(newReservation);
          recurringReservation.reservationDate = startDate;
          recurringReservation.reservationEndDate = endDate;
          reservations.push(recurringReservation);
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
      console.log(reservations);
      _.each(reservations, function(newReservation, index) {
        reservation.create(newReservation, function(err, _reservation) {
          console.log('tick');
          if (index === 0) {
            reservationID = _reservation._id;
            if (err) {
              res.status(422);
              res.send({ message: 'Bad request'});
            }
            else {
              _.each(config.clients, function(socket) {
                socket.send('reservations');
              });
              res.status(201).send({ data: _reservation });
            }
          } else {
            _reservation.update({ recurringID: reservationID }, function(err) {
              console.log(err);
            });
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
      if (req.query.recurring === true || req.query.recurring === 'true') {
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
            _.each(config.clients, function(socket) {
              socket.send('reservations');
            });
            res.status(201);
            res.send({ data: reservations} );
          }
        });
    }
  });
});

module.exports = router;
