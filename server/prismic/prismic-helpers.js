'use strict';

var PrismicIO = require('prismic.io').Prismic,
  Configuration = require('./prismic-configuration').Configuration;

exports.previewCookie = PrismicIO.previewCookie;

// -- Helpers

exports.getApiHome = function(accessToken, callback) {
  PrismicIO.Api(Configuration.apiEndpoint, callback, accessToken);
};

exports.getDocument = function(ctx, id, slug, onSuccess, onNewSlug, onNotFound) {
  ctx.api.forms('everything').ref(ctx.ref).query('[[:d = at(document.id, "' + id + '")]]').submit(function(err, documents) {
    var results = documents.results;
    var doc = results && results.length ? results[0] : undefined;
    if (err) {
      onSuccess(err);
    } else if (doc && (!slug || doc.slug === slug)) {
      onSuccess(null, doc);
    } else if (doc && doc.slugs.indexOf(slug) > -1 && onNewSlug) {
      onNewSlug(doc);
    } else if (onNotFound) {
      onNotFound();
    }
    else {
      onSuccess();
    }
  });
};

exports.getDocuments = function(ctx, ids, callback) {
  if (ids && ids.length) {
    ctx.api.forms('everything').ref(ctx.ref).query('[[:d = any(document.id, [' + ids.map(function(id) { return '"' + id + '"';}).join(',') + '])]]').submit(function(err, documents) {
      callback(err, documents.results);
    });
  } else {
    callback(null, []);
  }
};

exports.getBookmark = function(ctx, bookmark, callback) {
  var id = ctx.api.bookmarks[bookmark];
  if (id) {
    exports.getDocument(ctx, id, undefined, callback);
  } else {
    callback();
  }
};

// -- Exposing as a helper what to do in the event of an error (please edit prismic-configuration.js to change this)
exports.onPrismicError = Configuration.onPrismicError;

// -- Route wrapper that provide a "prismic context" to the underlying function

exports.route = function(callback) {
  return function(req, res) {
    exports.getApiHome(Configuration.accessToken, function(err, Api) {
      if (err) {
        exports.onPrismicError(err, req, res);
        return;
      }
      var ref = req.cookies[PrismicIO.previewCookie] || Api.master(),
        ctx = {
          api: Api,
          ref: ref,
          maybeRef: ref === Api.master() ? undefined : ref
        };
      ctx.linkResolver = Configuration.linkResolver(ctx);
      res.locals.ctx = ctx;
      callback(req, res, ctx);
    });
  };
};

// -- Preview endpoint
exports.preview = exports.route(function(req, res, ctx) {
  var previewToken = req.query.token;
  ctx.api.previewSession(previewToken, ctx.linkResolver, '/', function(err, redirectUrl) {
    res.cookie(PrismicIO.previewCookie, previewToken, { maxAge: 60 * 30, path: '/', httpOnly: false });
    res.redirect(redirectUrl);
  });
});
