// 'use strict';
//
// var models = require('./api/models');
// var _ = require('lodash');
//
// models.User.find({}, function(err, users) {
//   if (!err && users) {
//     _.each(users, function(user) {
//       if (user.userType === null || user.userType === undefined) {
//         user.update({ userType: 0 }, function(){});
//       }
//     });
//   }
// });
