var mongoose = require('mongoose');

module.exports.oauth = require('./oauth/oauth');
module.exports.floor = require('./floor');
module.exports.company = require('./company');
module.exports.floorElement = require('./floorElement');
module.exports.reservation = require('./reservation');
module.exports.User = require('./user');
module.exports.OAuthClientsModel = require('./oauth/oauth_client');
module.exports.mongoose = mongoose;
