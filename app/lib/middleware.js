var bunyanLogger = require('express-bunyan-logger'),
    logger = require('./logger').create('express')

module.exports = function(app) {
  app.use(bunyanLogger({
    logger: logger,
    excludes: [
      'req-headers',
      'res-headers',
      'req',
      'res',
      'incoming',
      'user-agent',
      'referer',
      'body',
      'http-version',
      'ip'
    ],
    format: ':remote-address :method :url :status-code :response-time ms'
  }))
  app.use(bunyanLogger.errorLogger({logger: logger}))
}