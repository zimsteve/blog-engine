var fs = require('fs')

function getAll(resourse, callback) {

  fs.readFile(`${__dirname}/${resourse}.json`, 'utf8', function (err, file) {
      //template literals
    // console.log("file", file)
    // console.log("err", err)
    // console.log("callback", callback)
    if (err) callback(err)

    callback(null, JSON.parse(file))
   })
}

module.exports = {
  getAll: getAll
}
