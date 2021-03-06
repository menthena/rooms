var path = require('path');


module.exports = {
  entry: [
    path.normalize('es6-shim/es6-shim.min'),
    'reflect-metadata',
    // 'web-animations.min',
    path.normalize('zone.js/dist/zone-microtask')
  ],
  output: {
    path: path.resolve('www'),
    filename: 'app.bundle.js',
    pathinfo: false // show module paths in the bundle, handy for debugging
  },
  module: {
    noParse: [
      /es6-shim/,
      /reflect-metadata/,
      // /web-animations/,
      /zone\.js(\/|\\)dist(\/|\\)zone-microtask/
    ]
  },
  resolve: {
    root: [
      'www'
    ],
    alias: {
      'angular2': path.resolve('node_modules/angular2'),
      'ionic': 'ionic-framework'
      // 'web-animations.min': path.normalize('ionic-framework/js/web-animations.min')
    },
    extensions: ['', '.js']
  }
};
