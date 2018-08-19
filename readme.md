# Express Flash

  Flash Messages for your Express Application

  [![Build Status](https://secure.travis-ci.org/RGBboy/express-flash.png)](http://travis-ci.org/RGBboy/express-flash)

  Flash is an extension of `connect-flash` with the ability to define a flash message
  and render it without redirecting the request.

## Installation

Install it using:

```
npm install --save express-flash
npm install --save express-session
```


## Usage

  Set it up the same way you would `connect-flash`:

``` javascript
  const flash = require('express-flash');
  const session = require('express-session');
  const express = require('express');
  const app = express();

  // initialise session middleware - flash-express depends on it
  app.use(session({
    secret : "<add a secret string here>",
    resave: false,
    saveUninitialized: true
  }));

  // initialise the flash middleware
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

Access messages in Handlebars views use `locals.messages`:

```handlebars
{{#if messages.info}}
<div class="entry">
    <h1> {{messages.info}}</h1>
</div>
{{/if}}
```

## Requires

  * session - http-session middleware - install it using `npm install --save express-session`

## License

(The MIT License)

Copyright (c) 2012 RGBboy &lt;me@rgbboy.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
