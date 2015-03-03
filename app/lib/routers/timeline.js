var router = require('express').Router(),
    apicache = require('apicache').middleware,
    timeline = require('../twitter/user_timeline')



router.route('/:screenname')

  .get(apicache('30 minutes'), function(req, res) {
    timeline(req.query.screenname, function(err, tweets) {
      if(!err) {
        res.send({tweets: tweets})
      }else{
        res.send({error: err})
      }
    })
  })

module.exports = router