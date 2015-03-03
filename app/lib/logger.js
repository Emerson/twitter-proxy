var bunyan = require('bunyan'),
    config = require('config')


var create = function(name) {
  var options = {
    name: name
  }

  if(typeof config.log_level !== 'undefined') {
    options.level = config.log_level
  }

  return bunyan.createLogger(options)
}

create('default')

module.exports = create('default')
module.exports.create = create