import axios from 'axios'

const KEY = process.env.API_KEY
const baseUrl = 'https://www.googleapis.com/youtube/v3'

export async function getMovies (context, { maxResults, q }) {
  return await axios.get(`${baseUrl}/search?part=snippet&maxResults=${maxResults}&q=${q}&key=${KEY}`)
    .then(function (response) {
      console.log(response)
      // if (response.data.length) context.commit('setUser', response.data[0])
      return { movies: response.data }
    })
    .catch(function (error) {
      console.log(error)
      return { error: error }
    })
}
