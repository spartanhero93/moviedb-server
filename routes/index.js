const express = require('express')
const router = express.Router()

const UserModel = require('../models/User')
const PostModel = require('../models/Post')

/** Routes */
router.get('/posts', (req, res) => {
  PostModel.find({}, (err, list) => {
    err ? res.send({ data: 'error' }) : res.send(list)
  })
})

router.post('/posts', (req, res) => {
  console.log(req.body)
})

module.exports = router
