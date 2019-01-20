const express = require('express')
const router = express.Router()
const getToken = require('../../service/signUpWithTMDB')
const createSession = require('../../service/createSession')

router.get('/get_token', async (req, res) => {
  try {
    const data = await getToken()
    res.send({ data })
  } catch (error) {
    console.log(error)
  }
})
router.get('/create_session/:token', async (req, res) => {
  try {
    const data = await createSession(req.params.token)
    res.send(data)
  } catch (error) {
    console.log(error)
  }
})
module.exports = router
