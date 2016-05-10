/*!
 * express-flash
 * Copyright(c) 2012 RGBboy <me@rgbboy.com>
 * MIT Licensed
 */

/**
 * Module Dependencies
 */

var connectFlash = require('connect-flash')();

/**
 * Return a middleware function
 *
 * @return {Function} middleware function
 * @api public
 */
exports = module.exports = function () {

  return function (req, res, next) {
    connectFlash(req, res, function () {
      // Proxy the render function so that the flash is
      // retrieved right before the render function is executed
      var render = res.render;
      res.render = function () {
        // attach flash messages to res.locals.messages
        // but only if messages exist in the session, we don't
        // want empy sessions just for empty messages
        if (req.session && req.session.flash) {
            res.locals.messages = req.flash();
            req.session.messages = undefined;
        } else {
            res.locals.messages = {};
        }
        render.apply(this, arguments);
      }
      next();
    })
  };

};

/**
 * Library version.
 */

exports.version = '0.0.3';
