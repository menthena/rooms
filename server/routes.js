/**
 * Main application routes
 */

'use strict';

module.exports = function(app) {
  var apiRoutes = require('./api/routes')(app);
  require('./oauth')(app);

  app.use('/api', apiRoutes);

  // All undefined asset or api routes should return a 404
  app.route('/:url(auth|components|app|bower_components|assets)/*')
    .get(function(req, res) {
      res.send(404, '404');
    });


  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile('/index.html', { root: app.get('appPath') });
    });

};
