const axios = require('axios')

const querySearch = async (params, pageNum) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi&language=en-US&query=${params}&page=${pageNum}&include_adult=false`,
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

module.exports = querySearch
