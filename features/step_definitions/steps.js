const assert = require('cucumber-assert')
const Url = require('url')
const extend = require('xtend')

const config = require('../../config')

module.exports = function () {

  this.Given('I am viewing the page at "$string"', function (pathname) {
    browser.url(`http://localhost:5050${pathname}`) // hardcoded localhost
    // real world example below
    // browser.url(Url.format(extend(config.proxy, { pathname: pathname })))
  })

  this.Then('I can see the list item "$string"', function (text, callback) {
    const listItemExists = browser.waitForExist(`li=${text}`)
    assert.equal(listItemExists, true, callback)
  })
}
