'use strict';

var _ = require('lodash');
var express = require('express');
var router = express.Router();
var models = require('../models');
var company = models.company;
var User = models.User;
var middleware = require('../middleware');
var allowedUserProps = ['firstName', 'lastName', 'email', 'password', 'userType'];

router.get('/', middleware.requiresUser, function(req, res) {
  var sendResponse = function(err, companies) {
    res.send({ data: companies });
  };

  if (req.query.includes === 'users') {
    company.find({}, sendResponse);
  } else {
    company.find({}).select('_id companyName date').exec(sendResponse);
  }
});

router.get('/:id/users', middleware.requiresUser, function(req, res) {
  var sendResponse = function(err, users) {
    res.send({ data: users });
  };

  User.find({ companyID: req.params.id }, sendResponse);
});

router.get('/:id', middleware.requiresUser, function(req, res) {
  var sendResponse = function(err, company) {
    if (err) {
      res.status(404);
      res.send({ message: 'Not found'});
      return;
    }

    res.send({ data: company });
  };

  if (req.query.includes === 'users') {
    company.findById(req.params.id, sendResponse);
  }
  else {
    company.findById(req.params.id).select('_id companyName').exec(sendResponse);
  }
});

router.patch('/:id', middleware.requiresUser, function(req, res) {
  var updatedModel = _.pick(req.body, 'companyName');

  company.findOne({ companyName: updatedModel.companyName }, function(err, companyDetails) {
    if (companyDetails && String(companyDetails._id) !== String(req.params.id)) {
      res.status(500);
      res.send({ message: 'Already exists' });
    } else {
      company.findOneAndUpdate({ _id: req.params.id }, updatedModel, function(err, company) {
        if (err) {
          res.status(422);
          res.send({ message: 'Bad request'});
        }
        else {
          res.send({ data: company });
        }
      });
    }
  });
});

router.patch('/:id/users/:userID', middleware.requiresUser, function(req, res) {
  var updatedModel = _.pick(req.body, allowedUserProps);

  var keys = Object.keys(updatedModel),
  keysLen = keys.length,
  prefix = 'users.$.';

  for (var i = 0; i < keysLen ; i++) {
    updatedModel[prefix + keys[i]] = updatedModel[keys[i]];
    delete updatedModel[keys[i]];
  }

  var companyID = req.params.id;
  var userID = req.params.userID;

  company.findOneAndUpdate({ _id: companyID, 'users._id': userID }, updatedModel, function(err, company) {
    if (err) {
      res.status(422);
      res.send({ message: 'Bad request'});
    }
    else {
      res.send({ data: company });
    }
  });
});

router.post('/', middleware.requiresUser, function(req, res) {
  var newCompany = _.pick(req.body, ['companyName']);
  company.count({ companyName: newCompany.companyName }, function(err, companyCount) {
    if (err) {
      res.status(422);
      res.send({ message: 'Bad request'});
    } else if (companyCount > 0) {
      res.status(500);
      res.send({ message: 'Already exists' });
    } else {
      company.create(newCompany, function(err, company) {
        if (err) {
          res.status(422);
          res.send({ message: 'Bad request'});
        }
        else {
          res.status(201).send({ data: company });
        }
      });
    }
  });
});

router.post('/:id/users', middleware.requiresUser, function(req, res) {
  var newUser = _.pick(req.body, allowedUserProps);
  var companyID = req.params.id;

  company.findOneAndUpdate({ _id: companyID }, { $push: { users: newUser }}, function(err, company) {
    if (err) {
      res.status(422);
      res.send({ message: 'Bad request'});
    }
    else {
      res.status(201).send({ data: company });
    }
  });
});

router.delete('/:id', middleware.requiresUser, function(req, res) {

  company.remove({ _id: req.params.id }, function(err) {
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

router.delete('/:id/users/:userID', middleware.requiresUser, function(req, res) {

  var companyID = req.params.id;
  var userID = req.params.userID;

  company.findOneAndUpdate({ _id: companyID }, { $pull: { users: { _id: userID }}}, function(err) {
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
