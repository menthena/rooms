'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var floorSchema = new Schema({
  floorName: String,
  companyID: String,
  date: { type: Date, default: Date.now }
});

floorSchema.options.toJSON = {
  transform: function(doc, ret) {
    ret.floorID = ret._id;
    delete ret._id;
    delete ret.__v;
  }
};

module.exports = mongoose.model('Floor', floorSchema);
