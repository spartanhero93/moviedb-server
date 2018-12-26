const axios = require('axios')

const createNewGuestSession = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${
        process.env.API_KEY
      }`
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

module.exports = createNewGuestSession
