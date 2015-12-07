'use strict';

var mongoose = require('mongoose');

var floorSchema = {
  floorName: String,
  companyID: String,
  date: { type: Date, default: Date.now }
};

module.exports = mongoose.model('Floor', floorSchema);
