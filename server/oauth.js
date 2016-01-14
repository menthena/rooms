'use strict';

module.exports = function(app) {
  var oauthserver = require('oauth2-server');
  var cookieSession = require('cookie-session');
  var models = require('./api/models');
  var User = models.User;
  var email = require('./email');

  app.oauth = oauthserver({
    model: models.oauth,
    grants: ['password', 'authorization_code', 'refresh_token'],
    debug: true
  });

  app.use(cookieSession({
    keys: ['aEkcLL33', 'AejEOk,.']
  }));

  app.all('/oauth/token', app.oauth.grant());
  app.all('/oauth/tokeninfo', function(req, res, next) {
    if (!req.session.userId) {
      res.status(401);
      res.send('');
    } else {
      User.getUserInfo(req.session.userId, function(user) {
        if (user.userType === -1) {
          res.status(401);
          next();
        } else {
          res.send(200, user);
        }
      });
    }
  });

  app.get('/oauth/authorise', function(req, res) {
    if (!req.session.userId) {
      return res.redirect('/login?redirect=' + req.path + '&client_id=' +
        req.query.client_id + '&redirect_uri=' + req.query.redirect_uri);
    }

    res.render('authorise', {
      client_id: req.query.client_id,
      redirect_uri: req.query.redirect_uri
    });
  });

  // Handle authorise
  app.post('/oauth/authorise', function(req, res, next) {
    if (!req.session.userId) {
      return res.redirect('/login?redirect=' + req.path + 'client_id=' +
        req.query.client_id +'&redirect_uri=' + req.query.redirect_uri);
    }

    next();
  }, app.oauth.authCodeGrant(function(req, next) {
    // The first param should to indicate an error
    // The second param should a bool to indicate if the user did authorise the app
    // The third param should for the user/uid (only used for passing to saveAuthCode)
    next(null, req.body.allow === 'yes', req.session.userId, null);
  }));

  app.use(app.oauth.errorHandler());


  app.patch('/oauth/change-password', function(req, res) {
    if (!req.session.userId) {
      return res.redirect('/login?redirect=' + req.path + 'client_id=' +
        req.query.client_id +'&redirect_uri=' + req.query.redirect_uri);
    }

    User.changePassword(req.session.userId, req.body.password, function(err) {
      if (err) {
        res.send(404, err);
      } else {
        res.send(200, 'true');
      }
    });
  });

  app.patch('/oauth/change-email', function(req, res) {
    if (!req.session.userId) {
      return res.redirect('/login?redirect=' + req.path + 'client_id=' +
        req.query.client_id +'&redirect_uri=' + req.query.redirect_uri);
    }

    User.changeEmail(req.session.userId, req.body.email, function(err) {
      if (err) {
        res.send(404, err);
      } else {
        req.session.userId = req.body.email;
        res.send(200, 'true');
      }
    });
  });

  // app.post('/v1/users', routes.users.create);
  // app.get('/account', middleware.requiresUser, routes.users.show);
  app.post('/oauth/forgot-password', function(req, res) {
    var domain = 'http://localhost:9000';
    if (process.env.NODE_ENV === 'development') {
      domain = 'https://project-rax-staging.herokuapp.com';
    } else if (process.env.NODE_ENV === 'production') {
      domain = 'https://project-rax.herokuapp.com';
    }
    User.forgotPassword(req.body.email, function(err, code) {
      if (err) {
        res.send(200, 'true');
      } else {
        email.send(req.body.email, 'Recover password', 'Greetings,\r\n\r\nYou are receiving this email because you requested that your password be reset. \r\n\r\nTo reset your password, please click the following link, or copy and paste it into your web browser: \r\n' + domain + '/#/reset-password/' + code + '\r\n\r\nBest regards');
        res.send(200, 'true');
      }
    });
  });

  app.post('/oauth/reset-password', function(req, res) {
    User.resetPassword(req.body.email, req.body.password, req.body.token, function(err) {
      if (err) {
        res.send(404, err);
      } else {
        res.send(200, 'true');
      }
    });
  });

  app.post('/oauth/login', function(req, res, next) {
    User.authenticate(req.body.email, req.body.password, function(err, user) {
      if (err) {
        return next(err);
      }

      if (user) {
        req.session.userId = user.email;
        res.send(200, user);
      } else {
        res.redirect(401, '/login?incorrect');
      }
    });
  });

  app.get('/oauth/logout', function(req, res) {
    req.session = null;
    res.clearCookie('express:sess');
    res.clearCookie('express:sess.sig');
    res.redirect(301, '/');
  });
};
