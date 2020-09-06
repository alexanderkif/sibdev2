import axios from 'axios'

const KEY = process.env.API_KEY
const baseUrl = 'https://www.googleapis.com/youtube/v3'

export async function getMovies (context, { maxResults, q }) {
  return await axios.get(`${baseUrl}/search?part=snippet&maxResults=${maxResults}&q=${q}&key=${KEY}`)
    .then(function (response) {
      // console.log(response.data)
      // if (response.data.length) context.commit('setUser', response.data[0])
      return response.data
    })
    .catch(function (error) {
      console.log(error)
      return { error: error }
    })
}

export async function getViewCount (context, videoId) {
  return await axios.get(`${baseUrl}/videos?id=${videoId}&key=${KEY}&fields=items(id,statistics(viewCount))&part=statistics`)
    .then(function (response) {
      if (response.data.items[0]) {
        // console.log('getViewCount', response.data.items[0].statistics.viewCount)
        return response.data.items[0].statistics.viewCount
      } else {
        return null
      }
    })
    .catch(function (error) {
      console.log(error)
      return { error: error }
    })
}
