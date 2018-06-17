'use strict'

var hapiRouter = require('hapi-router')

var plugin = {
  plugin: hapiRouter,
  options: {
    routes: 'test/plugins/routes2/*Routes.js'
  }
}

module.exports = plugin
