var errors = require('./errors')

module.exports = function(app) {

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })

  app.use('/v1/timeline', require('./routers/timeline'))

  app.use(function(req, res) {
    res.status(404)
    res.json(errors.response('uri_not_found'))
  })

}