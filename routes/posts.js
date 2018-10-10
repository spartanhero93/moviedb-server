const express = require('express')
const router = express.Router()

const PostModel = require('../models/Post')

/** Routes */
router.get('/posts', async (req, res, next) => {
  const posts = await PostModel.find({})
  res.send(posts)
})

router.post('/posts', (req, res) => {
  const link = req.body.link

  PostModel.findOne({ link }, (error, linkExists) => {
    if (error) {
      return res.send('Error encountered while attempting posting')
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

router.delete('/posts/:id', (req, res) => {
  const _id = req.params.id

  PostModel.findOne({ _id }, error => {
    error
      ? res.send({ error: 'Error, error encountered while trying to delete' })
      : PostModel.deleteOne({ _id }, deleteError => {
        deleteError
            ? res.send({ error: 'Error, error while trying to delete' })
            : res.send(_id)
      })
  })
})

module.exports = router
