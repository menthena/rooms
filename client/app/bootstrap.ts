declare var System: any;

function initialize(): void {
  initializeCordova();
}

/**
 * Waits for Cordova or if not on a device and cordova is not needed, don't wait and call onDeviceReady.
 */
function initializeCordova(): void {
  if (!window.hasOwnProperty('cordova')) {
    onDeviceReady();
  } else {
    document.addEventListener('deviceready', onDeviceReady, false);
  }
}

function onDeviceReady(): void {
  System.import('config/app')
    .catch((error: Object) => {
      console.log(error, arguments);
    });
}

initialize();
