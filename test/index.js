'use strict'

var lab = exports.lab = require('lab').script()
var Hapi = require('hapi')
var expect = require('code').expect

lab.describe('hapi-register', () => {
  var server

  lab.beforeEach(() => {
    return (server = new Hapi.Server())
  })

  async function register (options) {
    await server.register({
      plugin: require('../'),
      options
    })
  }

  lab.test('can take an array of register no patterns', async () => {
    await register({
      registers: [
        'test/plugins/hapi-router.js'
      ]
    })

    expect(Object.keys(server.registrations)).to.only.include(['hapi-register', 'hapi-router'])
  })

  lab.test('can take an array of register no patterns with cwd', async () => {
    await register({
      registers: [
        'test/plugins/hapi-router2.js'
      ],
      cwd: process.cwd()
    })

    expect(Object.keys(server.registrations)).to.only.include(['hapi-register', 'hapi-router'])
  })
})
