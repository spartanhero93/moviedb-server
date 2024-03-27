const axios = require('axios')

const callDetailedResults = async (mediaType = 'person', id) => {
  try {
    if (typeof mediaType === 'undefined') {
      person = 'person'
    }

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}&language=en-US`,
      { headers: {
        Authorization: `Bearer ${process.env.API_KEY}` 
      }}
    )
    return await { data, mediaType }
  } catch (error) {
    console.log(error)
  }
}

module.exports = callDetailedResults
