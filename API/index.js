const express = require('express');
const router = express.Router();
const axios = require('axios');

const URL = '';

/** Search the MovieDB api based on client request type */
router.get('/movies/:name', async (req, res) => {
	try {
		const response = await axios.get(
			`https://api.themoviedb.org/3/movie/${req.params.name}?api_key=${process.env.API_KEY}&language=en-US&page=1`
		);
		const { data } = await response;
		res.send({ data });
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
