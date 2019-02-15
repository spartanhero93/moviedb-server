const axios = require('axios')

module.exports = async (mediaType, itemId, rating, session_id) => {
  try {
    const { data } = await axios.post(
      `https://api.themoviedb.org/3/${mediaType}/${itemId}/rating?api_key=${
        process.env.API_KEY
      }&session_id=${session_id}`,
      {
        value: rating,
      }
    )
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
