const io = require('socket.io')
let socketServer = null

module.exports = (app, server) => {
  if (socketServer) return socketServer

  socketServer = io(server)

  socketServer.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {
      socket.join(roomId)
      socket.to(roomId).broadcast.emit('user-connected', userId)
      socket.on('message', message => {
        // send message to the same room
        io.to(roomId).emit('createMessage', message)
      })

      socket.on('disconnect', () => {
        socket.to(roomId).broadcast.emit('user-disconnected', userId)
      })
    })
  })
}
