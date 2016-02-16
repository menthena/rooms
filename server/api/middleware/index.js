'use strict';

var models = require('./../models');
var basicAuth = require('basic-auth');
var User = models.User;

function requiresUser(req, res, next) {
  var user = basicAuth(req);
  // Basic authentication
  if (user && user.name) {
    User.authenticate(user.name, user.pass, function(err, user) {
      if (err) {
        res.redirect(401, '/login');
      } else {
        req.user = user;
        req.id = req.user._id;
        next();
      }
    });
  } else {
    User.getUserInfo(req.session.userId, function(user) {
      if (req.session.userId) {
        req.user = user;
        req.id = req.session.userId;
        next();
      } else {
        res.redirect(401, '/login');
      }
    });
  }
}

function loadUser(req, res, next) {
  User.findOne({ email: req.session.userId}, function(err, user) {
    if (err) {
      return next(err);
    }
    res.locals.user = user;
    next();
  });
}

function isValidationError(err) {
  return err && err.name === 'ValidationError';
}

function notFoundHandler(req, res) {
  res.status(404);
  res.format({
    html: function() {
      res.render('404', { url: req.url });
    },
    json: function() {
      res.send({ error: 'Not Found' });
    }
  });
}

module.exports.requiresUser = requiresUser;
module.exports.loadUser = loadUser;
module.exports.isValidationError = isValidationError;
module.exports.notFoundHandler = notFoundHandler;
