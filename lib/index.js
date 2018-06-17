'use strict'

var glob = require('glob')
var castArray = require('cast-array')

exports.plugin = {
  register: (server, options) => {
    var globOptions = {
      nodir: true,
      strict: true,
      cwd: options.cwd || process.cwd(),
      ignore: options.ignore
    }

    castArray(options.registers).forEach(function (pattern) {
      var files = glob.sync(pattern, globOptions)

      files.forEach(function (file) {
        var register = require(globOptions.cwd + '/' + file)
        console.log('register: ', register)
        server.register(register.default || register)
      })
    })
  },

  pkg: require('../package.json')
}
