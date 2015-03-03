#!/usr/bin/env node

var express = require('express'),
    config = require('config'),
    logger = require('./lib/logger'),
    app = express()

var port = process.env.PORT || config.server.port

require('./lib/middleware')(app)
require('./lib/routes')(app)

app.set('port', port)

app.listen(port, function(server) {
  logger.info('Server is listening on port', port)
})

module.exports = app