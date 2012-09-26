/*!
 * express-flash unit tests
 */

/**
 * Module dependencies.
 */

var express = require('express'),
    should = require('should'),
    flash = require('../');

describe('Flash', function () {

  it('should return a function', function (done) {
    flash().should.be.a('function');
    done();
  });

  describe('.version', function () {

    it('should match the format x.x.x', function (done) {
      flash.version.should.match(/^\d+\.\d+\.\d+$/);
      done();
    });

  });

});