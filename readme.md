# Express Flash

  Flash Messages for your Express Application

  [![Build Status](https://secure.travis-ci.org/RGBboy/express-flash.png)](http://travis-ci.org/RGBboy/express-flash)

  Flash is an extension of `connect-flash` with the ability to define a flash message
  and render it without redirecting the request.

## Usage

  Set it up the same way you would `connect-flash`:

``` javascript
  var flash = require('flash'),
      express = require('express'),
      app = express();

  app.use(express.cookieParser('keyboard cat'));
  app.use(express.session({ cookie: { maxAge: 60000 }}));
  app.use(flash());
```

Use `req.flash()` in your middleware

``` javascript
  app.get('/', function (req, res) {
    req.flash('info', 'Welcome');
    res.render('index', {
      title: 'Home'
    })
  });
  app.get('/addFlash', function (req, res) {
    req.flash('info', 'Flash Message Added');
    res.redirect('/');
  });
```

Access the messages in your views via `locals.messages` (.jade in this case):

``` jade
  - if (messages.info)
    .message.info
      span= messages.info
```

## Requires

  * cookieParser
  * session