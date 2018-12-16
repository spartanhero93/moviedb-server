const axios = require('axios')

const callTVShowsAPI = async (params, pageNum) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${params}?api_key=${process.env
        .API_KEY}&language=en-US&page=${pageNum}`
    )
    const { data } = await response
    return data
  } catch (error) {
    console.log(error)
  }
}

module.exports = callTVShowsAPI
