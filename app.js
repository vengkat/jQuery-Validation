var express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
// Set directory to contain the templates ('views')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(express.bodyParser());
// app.use(express.json());
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/login', function(req, res) {
  res.render('login');
});

app.get('/signup', function(req, res) {
  res.render('signup');
});

app.post('/login', function(req, res) {
  var param = JSON.stringify(req.body);
  var user = JSON.parse(param);
  console.log("login :: request body - "+req.body);
  console.log("login :: user - "+user);  
  console.log("login :: UserName - "+req.body.UserName);
  res.send('Success');
});

app.post('/signup', function(req, res) {
  var param = JSON.stringify(req.body);
  var user = JSON.parse(param);
  console.log("login :: request body - "+req.body);
  console.log("login :: user - "+user);  
  console.log("login :: UserName - "+req.body.UserName);
  res.send('Success');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

// app.post('Login', function(req, res) {
//   res.send('Hello World!');
// });