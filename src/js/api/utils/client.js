import axios from 'axios'
import config from '../../config.json'

const client = axios.create({
  baseURL: config.api.location,
  timeout: config.api.timeout,
})

export default client
