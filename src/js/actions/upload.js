import { createTypes } from '../utils/createTypes'
import api from '../api'

export const types = createTypes('upload', [
  'FETCH_CREATE',
  'FETCH_CREATE_SUCCESS',
  'FETCH_CREATE_FAILURE',
])

export const fetchCreate = formData => (dispatch) => {
  dispatch({ type: types.FETCH_CREATE })

  return api.uploads.create(formData)
    .then((payload) => {
      dispatch({
        type: types.FETCH_CREATE_SUCCESS,
        payload,
      })
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_CREATE_FAILURE,
        payload: {
          error,
        },
      })

      throw error
    })
}
