'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reservationSchema = new Schema({
  elementID: String,
  reservationDate: Date,
  reservationEndDate: Date,
  description: String,
  room: String,
  recurring: String,
  recurringEndDate: Date,
  recurringID: String,
  calendarID: String,
  date: { type: Date, default: Date.now }
});

reservationSchema.options.toJSON = {
  transform: function(doc, ret) {
    ret.reservationID = ret._id;
    delete ret._id;
    delete ret.__v;
  }
};

module.exports = mongoose.model('Reservation', reservationSchema);
