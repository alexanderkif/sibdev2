import axios from 'axios'
// import movies from './movies.json'

const KEY = process.env.API_KEY
const baseUrl = 'https://www.googleapis.com/youtube/v3'

export async function getMovies (context, { maxResults, q }) {
  // response.data changed to movies
  // const results = await Promise.all(await movies.items.map(async el => {
  //   el.viewCount = await getViewCount(el.id.videoId || el.id.playlistId || el.id.channelId)
  //   return el
  // }))
  // context.commit('setMovies', results)
  // const total = movies.pageInfo.totalResults
  // context.commit('setTotal', total)
  return await axios.get(`${baseUrl}/search?part=snippet&type=video&maxResults=${maxResults}&q=${q}&key=${KEY}`)
    .then(async function (response) {
      const results = await Promise.all(await response.data.items.map(async el => {
        el.viewCount = await getViewCount(el.id.videoId)
        return el
      }))
      context.commit('setMovies', results)
      const total = response.data.pageInfo.totalResults
      context.commit('setTotal', total)
    })
    .catch(function (error) {
      console.log('getMovies error', error)
      return { error: error }
    })
}

async function getViewCount (videoId) {
  // console.log('videoId', videoId)
  // return 12345
  return await axios.get(`${baseUrl}/videos?id=${videoId}&key=${KEY}&fields=items(id,statistics(viewCount))&part=statistics`)
    .then(function (response) {
      if (response.data.items[0]) {
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
