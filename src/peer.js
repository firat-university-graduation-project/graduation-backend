const { ExpressPeerServer } = require('peer')

module.exports = app =>
  (peerServer = ExpressPeerServer(app, {
    debug: true,
    port: 3000,
  }))
