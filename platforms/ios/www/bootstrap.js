function initialize() {
    initializeCordova();
}
/**
 * Waits for Cordova or if not on a device and cordova is not needed, don't wait and call onDeviceReady.
 */
function initializeCordova() {
    if (!window.hasOwnProperty('cordova')) {
        onDeviceReady();
    }
    else {
        document.addEventListener('deviceready', onDeviceReady, false);
    }
}
function onDeviceReady() {
    System.import('config/app');
    // .catch((error: Object) => console.error('Error: index loading with System:', error.toString()));
}
initialize();
//# sourceMappingURL=bootstrap.js.map
