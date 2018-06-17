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

    castArray(options.plugins).forEach(function (pattern) {
      var files = glob.sync(pattern, globOptions)

      files.forEach(function (file) {
        var plugin = require(globOptions.cwd + '/' + file)
        server.register(plugin.default || plugin)
      })
    })
  },

  pkg: require('../package.json')
}
