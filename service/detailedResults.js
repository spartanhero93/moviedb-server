const axios = require('axios')

const callDetailedResults = async (mediaType = 'person', id) => {
  try {
    if (typeof mediaType === 'undefined') {
      person = 'person'
    }

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${
        process.env.API_KEY
      }&language=en-US`
    )
    return await { data, mediaType }
  } catch (error) {
    console.log(error)
  }
}

module.exports = callDetailedResults
