process.env.NODE_ENV = 'test'

global.assert = require('chai').assert
global.sinon = require('sinon')
global._ = require('lodash')