var test = require('tape')
var db = require('../db/db')

test('get all posts', function(t){

  //arrange

var expectedPostObj = {
  posts: [
    {"id": 1, "name": "first-post", "image": "http://www.knoxroad.com/wp-content/uploads/2009/05/cute-kitten.jpg"}
  ]
}
  //act
  db.getAll('posts', function (err, postsObj) {

  //assert
  t.deepEqual(postsObj, expectedPostObj, 'get function should return all posts')
  t.end()
  })



})
