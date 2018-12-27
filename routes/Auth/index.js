const express = require('express')
const router = express.Router()
const createNewGuestSession = require('../../service/sessions')

router.get('/key', async (req, res) => {
  try {
    res.send({ key: process.env.API_KEY })
    // const data = await createNewGuestSession()
    // res.send(data)
  } catch (error) {
    res.send(error)
  }
})
module.exports = router
