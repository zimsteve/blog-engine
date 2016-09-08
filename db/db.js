var fs = require('fs')

function getAll(resourse, callback) {

  fs.readFile(`${__dirname}/${resourse}.json`, 'utf8', function (err, file) {
      //template literals
    // console.log("file", file)
    // console.log("err", err)
    // console.log("callback", callback)
    if (err) callback(err)

    callback(null, file)
   })
}
var add = function (resource, newObj, callback) {
  getNextIndex(resource, function (resource, newIndex) {
    console.log(newObj)
    newObj.id = newIndex
    getAll(resource, function(err, postsAsString) {
      var postsObj = JSON.parse(postsAsString)
      postsObj.posts.push(newObj)
      writeAll(resource, postsObj)
      callback(postsObj)
    })
  })
}

var getNextIndex = function (resource, callback) {
  fs.readFile(`./db/${resource}.json`, 'utf8', function (err, postsAsString) {
    var postsObj = JSON.parse(postsAsString)
    console.log(postsObj);
    var maxId = postsObj.posts.reduce(function (preV, curV) {
      return preV.id > curV.id ? preV.id : curV.id
    })
    console.log(maxId)
    callback(resource, maxId + 1)
  })
}
var writeAll = function (resource, lotsObj) {
  var lotsAsString = JSON.stringify(lotsObj)

  fs.writeFile(`./db/${resource}.json`, lotsAsString, 'utf8', (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});
}
module.exports = {
  getAll: getAll,
  add: add
}
