'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
  companyName: String,
  googleToken: String,
  date: { type: Date, default: Date.now }
});

companySchema.options.toJSON = {
  transform: function(doc, ret) {
    ret.companyID = ret._id;
    delete ret._id;
    delete ret.__v;
  }
};

module.exports = mongoose.model('Company', companySchema);
