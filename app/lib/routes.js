var errors = require('./errors')

module.exports = function(app) {

  app.use('/v1/timeline', require('./routers/timeline'))

  app.use(function(req, res) {
    res.status(404)
    res.json(errors.response('uri_not_found'))
  })

}