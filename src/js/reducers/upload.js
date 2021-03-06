import { types } from '../actions/upload'

const initialState = {
  loading: false,
  error: null,
  statusCode: null,
  sentFiles: [],
}

const upload = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_CREATE:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case types.FETCH_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        statusCode: null,
        sentFiles: [
          ...state.sentFiles,
          payload,
        ],
      }
    case types.FETCH_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error.status === 400
          ? payload.error.data.errors
          : payload.error.data,
      }
    default:
      return state
  }
}

export default upload
