const axios = require('axios')

const createNewGuestSession = async token => {
  try {
    const { data } = await axios.post(
      `https://api.themoviedb.org/3/authentication/session/new?api_key=${
        process.env.API_KEY
      }`,
      {
        request_token: token,
      }
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

module.exports = createNewGuestSession
