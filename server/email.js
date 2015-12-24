'use strict';
var postmark = require('postmark')(process.env.POSTMARK_API_TOKEN || '27f5f6f2-1a7c-487a-a7aa-bc0ae3361110');

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
