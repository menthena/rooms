if (!Object.hasOwnProperty('name')) {
  Object.defineProperty(Function.prototype, 'name', {
    get: function() {
      var matches = this.toString().match(/^\s*function\s*(\S*)\s*\(/);
      var name = matches && matches.length > 1 ? matches[1] : "";
      Object.defineProperty(this, 'name', {value: name});
      return name;
    }
  });
}

// Tun on full stack traces in errors to help debugging
Error.stackTraceLimit=Infinity;


jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

// // Cancel Karma's synchronous start,
// // we will call `__karma__.start()` later, once all the specs are loaded.
__karma__.loaded = function() {};

System.config({
  baseURL: '/base/',
  defaultJSExtensions: true,
  paths: {
    'angular2/*': 'node_modules/angular2/*.js',
    'rxjs/*': 'node_modules/rxjs/*.js',
    'rxjs': 'node_modules/rxjs/bundles/Rx.min.js',
    // 'dist/app/*': 'base/dist/app/*.js',
    'styles/*.css': 'dist/app/styles/*.css',
    'client': 'dist',
    // 'ionic-framework/*': 'node_modules/ionic-framework/bundles/*.js'
  },
  map: {
    'ionic-framework': 'node_modules/ionic-framework',
    'components': 'dist/app/components',
    'services': 'dist/app/services',
    // rxjs: 'base/node_modules/rxjs',
  },

  packages: {
    // 'rxjs': {
    //   defaultJSExtensions: true,
    //   transpiler: 'none',
    //
    // },

    // 'dist/app/': {
      // defaultJSExtensions: true
    // }
  }
});

Promise.all([
  System.import('angular2/src/platform/browser/browser_adapter'),
  System.import('angular2/platform/testing/browser'),
  System.import('angular2/testing')
]).then(function (modules) {
  var browser_adapter = modules[0];
  var providers = modules[1];
  var testing = modules[2];
  testing.setBaseTestProviders(providers.TEST_BROWSER_PLATFORM_PROVIDERS,
                       providers.TEST_BROWSER_APPLICATION_PROVIDERS);

  browser_adapter.BrowserDomAdapter.makeCurrent();
}).then(function() {
  return Promise.all(
    Object.keys(window.__karma__.files) // All files served by Karma.
    .filter(onlySpecFiles)
    .map(function(path) {
      return System.import(path).then(function(module) {
        if (module.hasOwnProperty('main')) {
          module.main();
        } else {
          throw new Error('Module ' + path + ' does not implement main() method.');
        }
      });
  }));
})
.then(function() {
  __karma__.start();
}, function(error) {
  __karma__.error(error.stack || error);
});


function filePath2moduleName(filePath) {
  return filePath.
           replace(/^\//, '').              // remove / prefix
           replace(/\.\w+$/, '');           // remove suffix
}


function onlyAppFiles(filePath) {
  return /^\/base\/dist\/app\/.*\.js$/.test(filePath);
}

function onlyRXFiles(filePath) {
  return /^\.*rxjs.*$/.test(filePath);
}


function onlySpecFiles(path) {
  return /-spec\.js$/.test(path);
}
