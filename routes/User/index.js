const express = require('express')
const router = express.Router()
const getToken = require('../../service/userData/signUpWithTMDB')
const createSession = require('../../service/userData/createSession')
const removeSession = require('../../service/userData/removeSession')
const rateItem = require('../../service/userData/rateItem')

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

router.get('/remove_session/:session', async (req, res) => {
  try {
    const data = await removeSession(req.params.session)
    res.send(data)
  } catch (error) {
    console.error(error)
  }
})
router.post('/rateItem/:mediaType/:id/:rating/:sessionId', async (req, res) => {
  try {
    const { mediaType, id, rating, sessionId } = req.params
    const data = await rateItem(mediaType, id, rating, sessionId)
  } catch (error) {}
})

module.exports = router
