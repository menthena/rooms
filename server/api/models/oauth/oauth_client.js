'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var authorizedClientIds = ['portfolio-tool'];

var OAuthClientsModel;
var OAuthClientsSchema = new Schema({
  clientId: String,
  clientSecret: String,
  redirectUri: String
});

OAuthClientsSchema.static('getClient', function(clientId, clientSecret, callback) {
  var params = { clientId: clientId };
  if (clientSecret !== null && clientSecret !== undefined) {
    params.clientSecret = clientSecret;
  }
  OAuthClientsModel.findOne(params, callback);
});

OAuthClientsSchema.static('grantTypeAllowed', function(clientId, grantType, callback) {
  if (grantType === 'password' || grantType === 'authorization_code') {
    return callback(false, authorizedClientIds.indexOf(clientId) >= 0);
  }

  callback(false, true);
});

mongoose.model('oauth_clients', OAuthClientsSchema);
OAuthClientsModel = mongoose.model('oauth_clients');
module.exports = OAuthClientsModel;
