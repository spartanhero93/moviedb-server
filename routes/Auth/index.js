const express = require('express')
const router = express.Router()
const createNewGuestSession = require('../../service/sessions')
const getToken = require('../../service/signUpWithTMDB')

router.get('/get_token', async (req, res) => {
  try {
    const data = await getToken()
    res.send({ data })
  } catch (error) {
    console.log(error)
  }
})
module.exports = router
