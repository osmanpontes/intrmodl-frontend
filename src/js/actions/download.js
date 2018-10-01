import { createTypes } from '../utils/createTypes'
import api from '../api'

export const types = createTypes('download', [
  'FETCH_SHOW',
  'FETCH_SHOW_SUCCESS',
  'FETCH_SHOW_FAILURE',
])

export const fetchShow = ({ id, cursor }) => (dispatch) => {
  dispatch({ type: types.FETCH_SHOW })

  return api.uploads.show({ id, cursor })
    .then((payload) => {
      dispatch({
        type: types.FETCH_SHOW_SUCCESS,
        payload,
      })
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_SHOW_FAILURE,
        payload: {
          error,
        },
      })

      throw error
    })
}
