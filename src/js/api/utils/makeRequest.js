import client from './client'

const makeRequest = config => Promise.resolve(config)
  .then(client)
  .then(({ data }) => data)
  .catch((error) => {
    if (error.response) {
      throw error.response
    }

    if (error.request) {
      throw error.request
    }

    throw error
  })

module.exports = makeRequest
