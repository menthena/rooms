System.config({
    defaultJSExtensions: true,
    transpiler: 'none'
});
function initialize() {
    initializeCordova();
}
function initializeCordova() {
    if (!window.hasOwnProperty('cordova')) {
        onDeviceReady();
    }
    else {
        document.addEventListener('deviceready', onDeviceReady, false);
    }
}
function onDeviceReady() {
    System.import('app')
        .catch(function (error) { return console.error('Error: index loading with System:', error.toString()); });
}
initialize();

//# sourceMappingURL=bootstrap.js.map
