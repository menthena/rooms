'use strict';

var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OAuthUsersModel;
var OAuthUsersSchema = new Schema({
  email: { type: String, unique: true, required: true },
  hashed_password: { type: String, required: true },
  password_reset_token: { type: String, unique: false },
  reset_token_expires: Date,
  name: String,
  userType: Number,
  companyID: String
});

OAuthUsersSchema.options.toJSON = {
  transform: function(doc, ret) {
    ret.userID = ret._id;
    delete ret._id;
    delete ret.__v;
  }
};

function hashPassword(password) {
  var salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

function getResetToken() {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for( var i=0; i < 20; i++ ) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

OAuthUsersSchema.static('register', function(fields, cb) {
  var user;

  fields.hashed_password = hashPassword(fields.password);
  delete fields.password;

  user = new OAuthUsersModel(fields);
  user.save(cb);
});

OAuthUsersSchema.static('forgotPassword', function(email, cb) {
  this.findOne({ email: email }, function(err, user) {
    if (err || !user || user === null) {
      return cb(true);
    }
    var token = getResetToken();
    console.log(token);
    user.update({password_reset_token: token}, function(){});
    cb(null, token);
  }.bind(this));
});

OAuthUsersSchema.static('resetPassword', function(email, password, token, cb) {
  if (token) {
    this.findOne({ email: email, password_reset_token: token }, function(err, user) {
      console.log(err, user);
      if (err || !user || user === null) {
        return cb(true);
      }
      user.update({hashed_password: hashPassword(password), password_reset_token: null}, function(){});
      cb(null);
    }.bind(this));
  } else {
    cb(true);
  }
});

OAuthUsersSchema.static('changePassword', function(id, password, cb) {
  this.findOne({ email: id }, function(err, user) {
    if (err || !user || user === null) {
      return cb(true);
    }
    user.update({hashed_password: hashPassword(password)}, function(){});
    cb(null);
  }.bind(this));
});

OAuthUsersSchema.static('changeEmail', function(id, email, cb) {
  this.findOne({ email: email }, function(err, user) {
    if ((user && user.email !== id) || err) {
      cb(true);
    } else {
      this.findOne({ email: id }, function(err, user) {
        if (err || !user || user === null) {
          return cb(true);
        }
        user.update({email: email}, function(){});
        cb(null);
      }.bind(this));
    }
  });
});

OAuthUsersSchema.static('getUserInfo', function(userId, cb) {
  this.findOne({ email: userId }, function(err, user) {
    var userType = -1;
    var userObject = {};
    if (user) {
      userType = user.userType || 0;
      if (user.companyID) {
        userType = user.userType <= 1 ? 1 : user.userType;
      }
    }
    userObject.userType = userType;
    if (user) {
      userObject.companyID = user.companyID;
      userObject.name = user.name;
    }
    cb(userObject);
  });
});

OAuthUsersSchema.static('getUser', function(email, password, cb) {
  OAuthUsersModel.authenticate(email, password, function(err, user) {
    if (err || !user) {
      return cb(err);
    }
    cb(null, user.email);
  });
});

OAuthUsersSchema.static('authenticate', function(email, password, cb) {
  this.findOne({ email: email }, function(err, user) {
    if (err || !user) {
      return cb(err);
    }
    cb(null, bcrypt.compareSync(password, user.hashed_password) ? user : null);
  });
});

mongoose.model('users', OAuthUsersSchema);

OAuthUsersModel = mongoose.model('users');
module.exports = OAuthUsersModel;
