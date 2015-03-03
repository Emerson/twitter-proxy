var request = require('supertest'),
    express = require('express'),
    config = require('config'),
    nock = require('nock')
    mockRequest = require('../fixtures/twitter_request')

var routes = require('../../lib/routes')

describe ('routes', function() {

  describe('missing route', function() {
    var app = express()
    routes(app)

    it('responds with 404 and JSON error response', function(done) {
      request(app)
        .get('/missing')
        .expect('Content-Type', /json/)
        .expect(404)
        .expect(function(res) {
          assert.deepEqual(res.body, {
            id: 'uri_not_found',
            message: config.messages.uri_not_found
          })
        })
        .end(done)
    })

  })

  describe('timeline routes', function() {
    var app = express()
    routes(app)

    it('provides a users twitter feed', function(done) {
      nock('https://api.twitter.com')
        .get('/1.1/statuses/user_timeline.json')
        .reply(200, mockRequest)
      request(app)
        .get('/v1/timeline/emerson_lackey')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(function(res) {
          assert.equal(res.body.tweets.length, 20)
        })
        .end(done)
    })

  })

})