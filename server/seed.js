'use strict';

var models = require('./api/models');
var bcrypt = require('bcrypt-nodejs');

function hashPassword(password) {
  var salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

models.floor.count(function(err, count) {
  if (count === 0) {
    models.floor.create({
      floorName: '1st Floor',
      order: 0
    }, function(err, floor) {
      if (floor) {
        models.floorElement.create([
          {
            floorID: floor._id,
            elementName: 'Badlands',
            elementType: 'room',
            elementPositionX: 5,
            elementPositionY: 5,
            elementWidth: 10,
            elementHeight: 0,
            capacity: 5
          }, {
            floorID: floor._id,
            elementName: 'Sharlands',
            elementType: 'room',
            elementPositionX: 25,
            elementPositionY: 25,
            elementHeight: 0,
            elementWidth: 10,
            hasTV: true,
            capacity: 12
          }, {
            floorID: floor._id,
            elementName: 'Sandals',
            elementType: 'placeholder',
            elementPositionX: 85,
            elementPositionY: 5,
            elementWidth: 15,
            elementHeight: 0,
            hasTV: false,
            capacity: 5
          }
        ], function() {

        });
      }
    });

    models.floor.create({
      floorName: '2nd Floor',
      order: 1
    }, function(err, floor) {
      if (floor) {
        models.floorElement.create([
          {
            floorID: floor._id,
            elementName: 'Badlands',
            elementType: 'room',
            elementPositionX: 10,
            elementPositionY: 10,
            elementWidth: 10,
            elementHeight: 0,
            capacity: 5
          }, {
            floorID: floor._id,
            elementName: 'Sharlands',
            elementType: 'placeholder',
            elementPositionX: 30,
            elementPositionY: 30,
            elementWidth: 10,
            elementHeight: 100,
            hasTV: true,
            capacity: 12
          }
        ], function() {

        });
      }
    });
  }
});
models.company.count(function(err, count) {
  if (count === 0) {
    models.company.create({
      companyName: 'Menthena Ltd'
    }, function(err, company) {
      if (company) {
        models.User.create({
          email: 'menthena@gmail.com',
          companyID: company._id,
          hashed_password: hashPassword('asdasd'),
          name: 'Ahmet',
        }, function() {});
        models.User.create({
          email: 'menthena2@gmail.com',
          companyID: company._id,
          hashed_password: hashPassword('asdasd'),
          name: 'Ahmet2',
        }, function() {});
      }
    });
  }
});
