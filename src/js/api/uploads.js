import { makeRequest } from './utils'

const uploads = {
  create(formData) {
    return makeRequest({
      method: 'POST',
      url: 'uploads',
      data: formData,
    })
  },

  show({ id, cursor }) {
    return makeRequest({
      method: 'GET',
      url: `uploads/${id}`,
      params: {
        id,
        cursor,
        limit: 50,
      },
    })
  },
}

export default uploads
