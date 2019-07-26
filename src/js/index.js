var Sentry = require('@sentry/browser');
Sentry.init({ dsn: 'https://bc2d5367cf2b4f0baa7f6344738e2c49@sentry.io/1514838' });

require("bootstrap/dist/js/bootstrap.js");

if ('serviceWorker' in navigator && !env.DISABLE_SERVICEWORKER) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js?v=' + env.version);
  });
}