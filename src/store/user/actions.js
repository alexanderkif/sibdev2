import axios from 'axios'
// import { Notify } from 'quasar'

const baseUrl = 'https://my-json-server.typicode.com/alexanderkif/sibdev2'

export async function loginUser (context, { name, password }) {
  return await axios.get(`${baseUrl}/users?name=${name}&password=${password}`)
    .then(function (response) {
      if (response.data.length) context.commit('setUser', response.data[0])
      return { user: response.data[0] }
    })
    .catch(function (error) {
      console.log(error)
      return { error: error }
    })
}

export function setUser (context, user) {
  context.commit('setUser', user)
}

export function exitUser (context) {
  context.commit('exitUser')
}
