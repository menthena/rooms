module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // paths loaded by Karma
      // 'node_modules/traceur/bin/traceur-runtime.js', // Required by PhantomJS2, otherwise it shouts ReferenceError: Can't find variable: require
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/reflect-metadata/Reflect.js',
      // {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
      {pattern: 'node_modules/ionic-framework/bundles/ionic.system.js', included: true, watched: true},
      {pattern: 'node_modules/socket.io-client/socket.io.js', included: true, watched: true},
      // {pattern: '', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/http.dev.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/router.dev.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/angular2-polyfills.min.js', included: true, watched: true},
      {pattern: 'node_modules/rxjs/bundles/Rx.min.js', included: true, watched: true},
      {pattern: 'node_modules/lodash/index.js', included: true, watched: true},
      {pattern: 'node_modules/moment/moment.js', included: true, watched: true},
      {pattern: 'karma-test-shim.js', included: true, watched: true},
      {pattern: 'dist/unit/matchers.js', included: true, watched: true},
      {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/angular2/**/*.js', included: false, watched: false},
      // {pattern: 'node_modules/ionic-framework/**/*.js', included: false, watched: false},

      // paths loaded via module imports
      {pattern: 'dist/**/*.js', included: false, watched: false},

      // paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {pattern: 'dist/**/*.html', included: false, watched: true},
      {pattern: 'dist/**/*.css', included: false, watched: true}
    ],

    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      "/base/client/app": "/base/dist/app",
      "/app/": "/base/app/",
      "/styles/": "/base/dist/app/styles/"
    },

    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
