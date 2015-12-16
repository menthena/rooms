'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var floorElementSchema = new Schema({
  floorID: String,
  elementName: String,
  elementType: String,
  elementPositionX: Number,
  elementPositionY: Number,
  elementHeight: Number,
  elementWidth: Number,
  features: Array,
  hasTV: Boolean,
  capacity: Number,
  date: { type: Date, default: Date.now }
});

floorElementSchema.options.toJSON = {
  transform: function(doc, ret) {
    ret.elementID = ret._id;
    delete ret._id;
    delete ret.__v;
  }
};

module.exports = mongoose.model('FloorElement', floorElementSchema);
