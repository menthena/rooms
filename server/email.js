'use strict';
var postmark = require('postmark')(process.env.POSTMARK_API_TOKEN || '290daab2-ebd6-4bcc-8157-330b1a7fd089');

module.exports = {
  send: function(to, subject, text) {
    postmark.send({
        'From': 'ahmet@adafon.com',
        'To': to,
        'Subject': subject,
        'TextBody': text
    }, function(error) {
      if(error) {
        console.error('Unable to send via postmark: ' + error.message);
        return;
      }
      console.info('Sent to postmark for delivery');
    });
  }
};
