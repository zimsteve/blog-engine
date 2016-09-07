var express = require('express')
var exphbs = require('express-handlebars')
var path = require('path')
var db = require('./db/db')

var app = express()

// view engine setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// serve the files in /public
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.redirect('/posts') // what is this doing?
})

app.get('/posts', function(req, res) {
  db.getAll('posts', function (err, postsObj) {
    if (err) {
      //if there is an error. throw this message
      res.send('hey sorry user cant find any posts')
    }
    res.render('posts-index', postsObj)
  })
})




module.exports = app;
