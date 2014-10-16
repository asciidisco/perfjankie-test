var perfjankie = require('perfjankie');

perfjankie({
  url: "http://localhost:8080",

  name: "Perfjankie Button",
  suite: "Button",
  time: new Date().getTime(),
  run: "commit#" + new Date().getTime(),

  browsers: [{
    browserName: "chrome"
  }],

  selenium: {
    hostname: "localhost",
    port: 4444
  },

  log: {
    fatal: console.log.bind(console, 'fatal:'),
    error: console.log.bind(console, 'error:'),
    warn: console.log.bind(console, 'warn:'),
    info: console.log.bind(console, 'info:'),
    debug: console.log.bind(console, 'debug:'),
    trace: console.log.bind(console, 'trace:')
  },

  couch: {
    server: 'http://localhost:5984',
    database: 'perfjankie-demo',
    updateSite: true,
    onlyUpdateSite: false
  },

  callback: function(err, res) {
    if (err) console.log('err:', err);
  }

});