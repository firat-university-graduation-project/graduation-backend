const express = require('express')
const User = require('../models/user')
// const socketServer = require('../socket-connection')

const router = express.Router()

router.get('/', async (req, res) => {
  res.send(await User.find())
})

// router.get('/:room', (req, res) => {
//   res.render('room', { title: 'Room Page', roomId: req.params.room })
// })

module.exports = router
