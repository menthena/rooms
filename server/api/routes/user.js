'use strict';

var _ = require('lodash');
var express = require('express');
var router = express.Router();
var models = require('../models');
var User = models.User;
var bcrypt = require('bcrypt-nodejs');
var middleware = require('../middleware');

function hashPassword(password) {
  var salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

router.get('/', middleware.requiresUser, function(req, res) {
  var filter = {};
  var sendResponse = function(err, User) {
    res.send({ data: User });
  };
  if (req.user && req.user.userType !== 0) {
    filter.companyID = req.user.companyID;
  } else {
    filter.userType = 0;
  }
  User.find(filter).select('_id firstName lastName email userType date').exec(sendResponse);
});

router.get('/:id', middleware.requiresUser, function(req, res) {
  var sendResponse = function(err, User) {
    if (err) {
      res.status(404);
      res.send({ message: 'Not found'});
      return;
    }

    res.send({ data: User });
  };

  User.findById(req.params.id).select('_id firstName lastName email date').exec(sendResponse);
});

router.patch('/:id', middleware.requiresUser, function(req, res) {
  var updatedModel = _.pick(req.body, ['firstName', 'lastName', 'email', 'userType']);
  User.findOne({ email: updatedModel.email }, function(err, user) {
    if (user && String(user._id) !== String(req.params.id)) {
      res.status(500);
      res.send({ message: 'Already exists' });
    } else {
      var filter = {
        _id: req.params.id
      };
      var userType = -1;
      if (req.user.userType !== 0) {
        filter.companyID = req.user.companyID;
      }
      if (req.user.userType === 0) {
        userType = updatedModel.userType || 0;
      } else {
        userType = updatedModel.userType > 0 ? updatedModel.userType : 1;
      }
      console.log(filter, userType);
      User.findOneAndUpdate(filter, {firstName: updatedModel.firstName, lastName: updatedModel.lastName, email: updatedModel.email, userType: userType}, function(err, User) {
        if (err) {
          res.status(422);
          res.send({ message: 'Bad request'});
        }
        else {
          res.send({ data: User });
        }
      });
    }
  });
});

router.post('/', middleware.requiresUser, function(req, res) {
  var newUser = _.pick(req.body, ['companyID', 'firstName', 'lastName', 'email', 'password', 'userType']);
  User.count({ email: newUser.email }, function(err, userCount) {
    if (err) {
      res.status(422);
      res.send({ message: 'Bad request'});
    } else if (userCount > 0) {
      res.status(500);
      res.send({ message: 'Already exists' });
    } else {
      var companyID = newUser.companyID;
      var userType;
      if (req.user.userType !== 0) {
        companyID = req.user.companyID;
      }
      if (req.user.userType === 0) {
        userType = newUser.userType;
      } else {
        userType = newUser.userType > 0 ? newUser.userType : 1;
      }
      User.create({ companyID: companyID, firstName: newUser.firstName, lastName: newUser.lastName, email: newUser.email, hashed_password: hashPassword(newUser.password), userType: userType }, function(err, User) {
        if (err) {
          res.status(422);
          res.send({ message: 'Bad request'});
        }
        else {
          res.status(201).send({ data: User });
        }
      });
    }
  });
});

router.delete('/:id', middleware.requiresUser, middleware.requiresUser, function(req, res) {
  var filter = {
    _id: req.params.id
  };
  if (req.user.userType !== 0) {
    filter.companyID = req.user.companyID;
  }

  User.remove(filter, function(err) {
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
