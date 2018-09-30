import { makeRequest } from './utils'

const uploads = {
  create(formData) {
    return makeRequest({
      method: 'POST',
      url: 'uploads',
      data: formData,
    })
  },
}

export default uploads
