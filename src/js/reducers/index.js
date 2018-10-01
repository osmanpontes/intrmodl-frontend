import { combineReducers } from 'redux'
import upload from './upload'
import download from './download'

export default combineReducers({
  upload,
  download,
})
