'use strict';

var models = require('./api/models');

models.floor.count(function(err, count) {
  if (count === 0) {
    models.floor.create({
      floorName: '1st Floor'
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
      floorName: '2nd Floor'
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
//
// models.company.create({
//   companyName: 'Manager company'
// }, function(err, company) {
//   if (company) {
//     models.User.create({
//       email: 'manager@manager.com',
//       companyID: company._id,
//       hashed_password: '$2a$10$URr4pxjP507Zqchmb7kFOu4psFI9thWdalXYdqNZc1BZ/MfiMbVOm',
//       firstName: 'Manager',
//       lastName: 'Company'
//     }, function() {});
//   }
// });
//
// models.User.create({
//   email: 'portfoliotool@portsidegroup.com',
//   hashed_password: '$2a$10$EHaHwkEnA5dWm5PP5XRThe8pZxKnTs/BCekdEe5CBhS3H6BVqFkLu',
//   firstName: 'Portside',
//   lastName: 'Group'
// }, function() {
//   models.OAuthClientsModel.create({
//     clientId: 'portfolio-tool',
//     clientSecret: 'clix2Eal',
//     redirectUri: '/oauth/redirect'
//   }, function(){});
// });
//
// models.User.create({
//   email: 'menthena@gmail.com',
//   hashed_password: '$2a$10$EHaHwkEnA5dWm5PP5XRThe8pZxKnTs/BCekdEe5CBhS3H6BVqFkLu',
//   firstName: 'Menthena',
//   lastName: 'A'
// }, function() {
// });
//
// models.User.create({
//   email: 'rhermann@portsidegroup.com',
//   hashed_password: '$2a$10$EHaHwkEnA5dWm5PP5XRThe8pZxKnTs/BCekdEe5CBhS3H6BVqFkLu',
//   firstName: 'Richard',
//   lastName: 'Hermann'
// }, function() {
// });
