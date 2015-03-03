client = require('../twitter_client')

function timeline(screenname, cb) {
  var params = {screen_name: screenname}
  client.get('statuses/user_timeline', params, function(err, tweets) {
    if(err) {
      return cb(err)
    }
    return cb(null, tweets)
  })
}

module.exports = timeline