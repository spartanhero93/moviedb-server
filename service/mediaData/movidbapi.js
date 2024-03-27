const axios = require('axios')

const callMovieAPI = async (params, pageNum = 1) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${params}&include_adult=false&language=en-US&page=${pageNum}`,
      { headers: {
        Authorization: `Bearer ${process.env.API_KEY}` 
      }}
    )
    const { data } = await response
    return data
  } catch (error) {
    console.log(error)
  }
}

module.exports = callMovieAPI
