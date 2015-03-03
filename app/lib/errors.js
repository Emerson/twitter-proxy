var config = require('config')

module.exports.response = function(id) {
  return {
    id: id,
    message: config.messages[id]
  }
}