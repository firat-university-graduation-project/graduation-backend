const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/ping', (req, res) => {
  res.sendStatus(200)
})

module.exports = router
