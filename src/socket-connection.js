const io = require('socket.io')
const xss = require('xss')

let socketServer = null

sanitizeString = str => {
  return xss(str)
}

let connections = {}
let messages = {}
let timeOnline = {}

module.exports = (app, server) => {
  if (socketServer) return socketServer

  socketServer = io(server)

  // socketServer.of('/stream').on('connection', socket => {
  //   socket.on('subscribe', data => {
  //     //subscribe/join a room
  //     socket.join(data.room)
  //     socket.join(data.socketId)

  //     //Inform other members in the room of new user's arrival
  //     if (socket.adapter.rooms[data.room].length > 1) {
  //       socket.to(data.room).emit('new user', { socketId: data.socketId })
  //     }
  //   })

  //   socket.on('newUserStart', data => {
  //     socket.to(data.to).emit('newUserStart', { sender: data.sender })
  //   })

  //   socket.on('sdp', data => {
  //     socket.to(data.to).emit('sdp', { description: data.description, sender: data.sender })
  //   })

  //   socket.on('ice candidates', data => {
  //     socket.to(data.to).emit('ice candidates', {
  //       candidate: data.candidate,
  //       sender: data.sender,
  //     })
  //   })

  //   socket.on('chat', data => {
  //     socket.to(data.room).emit('chat', { sender: data.sender, msg: data.msg })
  //   })
  // })

  socketServer.on('connection', socket => {
    socket.on('join-call', path => {
      if (connections[path] === undefined) {
        connections[path] = []
      }
      connections[path].push(socket.id)

      timeOnline[socket.id] = new Date()

      for (let a = 0; a < connections[path].length; ++a) {
        socket.to(connections[path][a]).emit('user-joined', socket.id, connections[path])
      }

      if (messages[path] !== undefined) {
        for (let a = 0; a < messages[path].length; ++a) {
          socket
            .to(socket.id)
            .emit(
              'chat-message',
              messages[path][a]['data'],
              messages[path][a]['sender'],
              messages[path][a]['socket-id-sender']
            )
        }
      }

      console.log(path, connections[path])
    })

    socket.on('signal', (toId, message) => {
      socket.to(toId).emit('signal', socket.id, message)
    })

    socket.on('chat-message', (data, sender) => {
      data = sanitizeString(data)
      sender = sanitizeString(sender)

      let key
      let ok = false
      for (const [k, v] of Object.entries(connections)) {
        for (let a = 0; a < v.length; ++a) {
          if (v[a] === socket.id) {
            key = k
            ok = true
          }
        }
      }

      if (ok === true) {
        if (messages[key] === undefined) {
          messages[key] = []
        }
        messages[key].push({
          sender: sender,
          data: data,
          'socket-id-sender': socket.id,
        })
        console.log('message', key, ':', sender, data)

        for (let a = 0; a < connections[key].length; ++a) {
          socket.to(connections[key][a]).emit('chat-message', data, sender, socket.id)
        }
      }
    })

    socket.on('disconnect', () => {
      let diffTime = Math.abs(timeOnline[socket.id] - new Date())
      let key
      for (const [k, v] of JSON.parse(JSON.stringify(Object.entries(connections)))) {
        for (let a = 0; a < v.length; ++a) {
          if (v[a] === socket.id) {
            key = k

            for (let a = 0; a < connections[key].length; ++a) {
              socket.to(connections[key][a]).emit('user-left', socket.id)
            }

            let index = connections[key].indexOf(socket.id)
            connections[key].splice(index, 1)

            console.log(key, socket.id, Math.ceil(diffTime / 1000))

            if (connections[key].length === 0) {
              delete connections[key]
            }
          }
        }
      }
    })
  })
}
