// require express
var express = require('express');
var path    = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res) {
  res.render('pages/home');
});

// route for our about page
router.get('/about', function(req, res) {
  var users = [
    { name: 'Alpha', email: 'Alpha@sharklasers.com' , avatar: 'http://placekitten.com/700/700'},
    { name: 'Beta', email: 'Beta@sharklasers.com', avatar: 'http://placekitten.com/700/700'},
    { name: 'Delta', email: 'Delta@sharklasers.com', avatar: 'http://placekitten.com/700/700'},
    { name: 'Epsilon', email: 'Epsilon@sharklasers.com', avatar: 'http://placekitten.com/700/700'}
  ];

  res.render('pages/about', { users: users });
});

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.post('/contact', function(req, res) {
  res.send('Thanks for contacting us, ' + req.body.name + '! We will respond shortly!');
});
