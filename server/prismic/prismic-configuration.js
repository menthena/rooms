'use strict';

exports.Configuration = {

  apiEndpoint: 'https://godrivecms.prismic.io/api',

  // -- Access token if the Master is not open
  // accessToken: 'MC5WV3hBQkNNQUFQZ0FMRmlH.WQdYXilbRBpTeu-_ve-_ve-_ve-_vRwdYO-_vTQd77-9KO-_vUXvv73vv71NbH0n77-9cg',

  // OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx',

  // -- Links resolution rules
  linkResolver: function(ctx) {
    return function(doc) {
      if (doc.isBroken) {
        return false;
      }

      if (doc.id === ctx.api.bookmarks['frequently-asked-questions']) {
        return '/frequently-asked-questions';
      }

      if (doc.id === ctx.api.bookmarks['terms-and-conditions']) {
        return '/terms-and-conditions';
      }

      if (doc.id === ctx.api.bookmarks['privacy-policy']) {
        return '/privacy-policy';
      }

      if (doc.id === ctx.api.bookmarks['cookie-policy']) {
        return '/cookie-policy';
      }

      if (doc.id === ctx.api.bookmarks['terms-of-service']) {
        return '/terms-of-service';
      }

      if (doc.id === ctx.api.bookmarks.home) {
        return '/home';
      }
    };
  },

  // -- What to do in the event of an error from prismic.io
  onPrismicError: function(err, req, res) {
    res.send(500, 'Error 500: ' + err.message);
  }
};
