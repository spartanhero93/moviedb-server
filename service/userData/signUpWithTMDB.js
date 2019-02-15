const axios = require('axios')

const getToken = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${
        process.env.API_KEY
      }`
    )
    return await data
  } catch (error) {
    console.log('ERROR')
  }
}

module.exports = getToken
