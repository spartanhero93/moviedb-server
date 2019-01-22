const axios = require('axios')

module.exports = async (session) => {
  const { data } = await axios.delete(
    `https://api.themoviedb.org/3/authentication/session?api_key=<<api_key>>
    `,
    {
      data: {
        session_id: session
      }
    }
  )
  return await data
}
