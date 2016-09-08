var express = require('express')
var exphbs = require('express-handlebars')
var path = require('path')
var db = require('./db/db')
var bodyParser = require('body-parser')
var app = express()

// view engine setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// serve the files in /public
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', function (req, res) {
  res.redirect('/posts') // what is this doing?
})

app.get('/posts', function(req, res) {
  db.getAll('posts', function (err, postsObj) {
    if (err) {
      //if there is an error. throw this message
      res.send('hey sorry user cant find any posts')
    }
    res.render('posts-index', JSON.parse(postsObj))
  })
})

app.get('/posts/new', function(req, res) {
  res.render('posts-new')
})

app.post('/posts', function (req, res) {

  // db.showImg('posts',function(err,postsObj){
  //   if (err){
  //     res.send('some error')
  //   }
  //   res.render('posts-show')
  // })
  // res.send('posted to posts')
  var post = req.body
  console.log(req.body)
  db.add('posts', post, function (results) {
    res.render('posts-index', results)
  })

  // get req.body - template literall body
  // fs read file eadFile cats -
  // parse to obj
  // mutate obj
  // stringify
  // fs write
})

module.exports = app;
