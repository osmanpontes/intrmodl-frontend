import { types } from '../actions/download'

const initialState = {
  loading: false,
  error: null,
  statusCode: null,
  value: [],
  name: null,
  cursor: null,
}

const download = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_SHOW:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case types.FETCH_SHOW_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        statusCode: null,
        value: [
          ...state.value,
          ...payload.lines,
        ],
        name: payload.name,
        cursor: payload.cursor,
      }
    case types.FETCH_SHOW_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error.data.error,
      }
    default:
      return state
  }
}

export default download
