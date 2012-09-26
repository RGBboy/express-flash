// Flash Component Example

// MODULE DEPENDENCIES
// -------------------

var express = require('express'),
    app = module.exports = express(),
    flash = require('../index');

// Views
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', { layout: false });

// Configuration

app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));

app.use(express.cookieParser('keyboard cat'));
app.use(express.session({ cookie: { maxAge: 60000 }}));

// Flash
app.use(flash());

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Home'
  });
});

// You can add single messages
app.get('/add-message', function (req, res) {
  req.flash('info', 'Flash Message Added');
  res.redirect('/');
});

// You can add multiple messages
app.get('/add-messages', function (req, res) {
  req.flash('info', 'Flash Message 1 Added');
  req.flash('info', 'Flash Message 2 Added');
  req.flash('info', 'Flash Message 3 Added');
  res.redirect('/');
});

// You can also add and show a flash message within the same route.
app.get('/add-and-show-message', function (req, res) {
  req.flash('info', 'Flash Message Added');
  res.render('index', {
    title: 'Add and Show Message'
  });
});

// Router
app.use(app.router);
// Error Handler
app.use(express.errorHandler());

// MODULE EXPORTS
// --------------

if (!module.parent) {
  app.listen(8000);
  console.log('Express app started on port 8000');
};