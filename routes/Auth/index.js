const express = require('express')
const router = express.Router()
const createNewGuestSession = require('../../service/sessions')

router.get('/new_guest_session', async (req, res) => {
  try {
    const data = await createNewGuestSession()
    res.send(data)
  } catch (error) {
    res.send(error)
  }
})
module.exports = router
