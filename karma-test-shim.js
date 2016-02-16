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
  transpiler: 'none',
  // paths: {
  //   'rxjs': 'base/node_modules/rxjs/rx.js',
  //   'rxjs/*': 'base/node_modules/rxjs/*.js',
  //   'rxjs/add/*': 'base/node_modules/rxjs/add/*.js',
  //   'rxjs/add/operator/*': 'base/node_modules/rxjs/add/operator/*.js',
  //   'rxjs/add/subject/*': 'base/node_modules/rxjs/add/subject/*.js',
  //   'rxjs/add/util/*': 'base/node_modules/rxjs/add/util/*.js',
  // },
  paths: {
    'styles/*.css': 'base/dist/app/styles/*.css'
  },
  map: {
    'ionic-framework': 'ionic',
    rxjs: 'base/client/app/vendor/rx',
  },

  packages: {
    // 'rxjs': {
    //   defaultJSExtensions: true,
    //   transpiler: 'none',
    //
    // },

    'base/dist/app/': {
      defaultJSExtensions: true
    },
    'base/client/app': {
      defaultExtension: false,
      format: 'register',
      map: Object.keys(window.__karma__.files).
            filter(onlyAppFiles).
            reduce(function createPathRecords(pathsMapping, appPath) {
              // creates local module name mapping to global path with karma's fingerprint in path, e.g.:
              // './hero.service': '/base/src/app/hero.service.js?f4523daf879cfb7310ef6242682ccf10b2041b3e'
              var moduleName = appPath.replace(/^\/base\/dist\/app\//, './').replace(/\.js$/, '');
              if (moduleName.indexOf('.css') > - 1) {
                // moduleName = moduleName.substring(2);
              }
              pathsMapping[moduleName] = appPath + '?' + window.__karma__.files[appPath];
              // console.log(moduleName, pathsMapping[moduleName]);
              return pathsMapping;
            }, {})

      }
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
      console.log(path);
      return System.import(path).then(function(module) {
        console.log(module);
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
