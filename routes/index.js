const express = require('express')
const router = express.Router()

const UserModel = require('../models/User')
const PostModel = require('../models/Post')

/** Routes */
router.get('/posts', async (req, res, next) => {
  const posts = await PostModel.find({})
  res.send(posts)
})

router.post('/posts', async (req, res) => {
  const link = req.body.link

  PostModel.findOne({ link }, (error, linkExists) => {
    if (error) {
      return res.send({ error: 'Error encountered while attempting posting' })
    }
    if (linkExists) return res.send({ error: 'Error, link exists' })

    const newPost = new PostModel({ ...req.body })

    return newPost.save(
      error =>
        (error
          ? res.send({ error: 'Error, could not save to DB' })
          : res.send({ newPost }))
    )
  })
})

router.delete('/posts/:id', async (req, res, next) => {
  const id = req.params.id
  try {
    console.log(`Incoming id: ${id}`)
    // const response = await PostModel.deleteOne({  })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
