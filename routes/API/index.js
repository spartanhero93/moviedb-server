const express = require('express')
const router = express.Router()
const callMovieAPI = require('../../service/mediaData/movidbapi')
const callTVShowsAPI = require('../../service/mediaData/tvShowsAPI')
const querySearch = require('../../service/mediaData/querySearch')
const callDetailedResults = require('../../service/mediaData/detailedResults')

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
router.get('/detailed/:mediaType/:id', async (req, res) => {
  try {
    const data = await callDetailedResults(req.params.mediaType, req.params.id)
    await res.send({ data })
  } catch (error) {
    console.log(error)
  }
})
router.get('/search/:query/:pageNum', async (req, res) => {
  try {
    const data = await querySearch(req.params.query, req.params.pageNum)
    await res.send({ data })
  } catch (error) {
    console.log(error)
  }
})
router.get('/account/details/:id', async (req, res) => {
  try {
  } catch (error) {}
})

module.exports = router
