const request = require('supertest');
var test = require('tape')
var app = require('../server/server')

test('test basic get request', t => {
  request(app)
    .get('/')
    .end((err, res) => {
      t.pass('Basic get request successful')
      t.end()
    })
})
