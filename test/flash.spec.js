/*!
 * express-flash spec
 */

// MODULE DEPENDENCIES
// -------------------

var app = require('../example/app'),
    should = require('should'),
    request = require('superagent');

// TESTS
// -----

describe('Flash Messages', function () {

  var baseURL,
      server;

  before(function (done) {
    var port = 8000;
    server = app.listen(port);
    baseURL = 'http://localhost:' + port;
    done();
  });

  after(function (done) {
    server.close(done);
  })

  describe('GET /add-message', function () {

    it('should add a single flash message', function (done) {
      request.agent()
        .get(baseURL + '/add-message')
        .redirects(1)
        .end(function (err, res) {
          res.statusCode.should.equal(200);
          res.text.should.include('<title>Home</title>');
          res.text.should.include('Flash Message Added')
          done();
        })
    });

  });

  describe('GET /add-messages', function () {

    it('should add multiple flash message', function (done) {
      request.agent()
        .get(baseURL + '/add-messages')
        .redirects(1)
        .end(function (err, res) {
          res.statusCode.should.equal(200);
          res.text.should.include('<title>Home</title>');
          res.text.should.include('Flash Message 1 Added');
          res.text.should.include('Flash Message 2 Added');
          res.text.should.include('Flash Message 3 Added');
          done();
        })
    });

  });

  describe('GET /add-message', function () {

    it('should add and show a single flash message', function (done) {
      request.agent()
        .get(baseURL + '/add-and-show-message')
        .redirects(0)
        .end(function (err, res) {
          res.statusCode.should.equal(200);
          res.text.should.include('<title>Add and Show Message</title>');
          res.text.should.include('Flash Message Added')
          done();
        })
    });

  });

});