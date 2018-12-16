const express = require('express')
const router = express.Router()
const callMovieAPI = require('../service/movidbapi')
const callTVShowsAPI = require('../service/tvShowsAPI')

/** Search the MovieDB api based on client request type */
router.get('/movies/:name/:pageNum', async (req, res) => {
  try {
    const data = await callMovieAPI(req.params.name, req.params.pageNum)
    await res.send({ data })
  } catch (error) {
    console.log(error)
  }
})
router.get('/tv/:name/:pageNum', async (req, res) => {
  try {
    const data = await callTVShowsAPI(req.params.name, req.params.pageNum)
    await res.send({ data })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router