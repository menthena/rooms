'use strict';

var mongoose = require('mongoose');

var floorElementSchema = {
  floorID: String,
  elementName: String,
  elementType: String,
  elementPositionX: Number,
  elementPositionY: Number,
  elementHeight: Number,
  elementWidth: Number,
  hasTV: Boolean,
  capacity: Number,
  date: { type: Date, default: Date.now }
};

module.exports = mongoose.model('FloorElement', floorElementSchema);
