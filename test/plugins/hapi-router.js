'use strict'

var hapiRouter = require('hapi-router')

var plugin = {
  plugin: hapiRouter,
  options: {
    routes: 'test/plugins/routes/*Routes.js'
  }
}

module.exports = plugin
