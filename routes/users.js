const express = require('express')
const router = express.Router()

const UserModel = require('../models/User')

/** Routes */

/** Testing only */
router.get('/user', (req, res) => {
  UserModel.find({}, (error, list) => {
    if (error) {
      return res.send({
        error: 'Error, encountered while attempting to list users'
      })
    } else res.send(list)
  })
})
/** ********** */

router.get('/user/:id', (req, res) => {
  const userName = req.params.userName

  UserModel.findOne({ userName }, (error, foundUser) => {
    if (error) {
      return res.send({
        error: 'Error, encountered while attempting to find user'
      })
    }
    if (!foundUser) return res.send({ error: 'Error, user does not exist' })
    else res.send(foundUser)
  })
})

router.post('/user', (req, res) => {
  const link = req.body.userName

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

// router.delete('/user/:id', (req, res) => {
//   const _id = req.params.id

//   PostModel.findOne({ _id }, error => {
//     error
//       ? res.send({ error: 'Error, error encountered while trying to delete' })
//       : PostModel.deleteOne({ _id }, deleteError => {
//         deleteError
//             ? res.send({ error: 'Error, error while trying to delete' })
//             : res.send(_id)
//       })
//   })
// })

module.exports = router
