import {
  createStore as _createStore,
  applyMiddleware,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import throttle from 'lodash/throttle'
import thunk from 'redux-thunk'

import config from './config.json'
import reducers from './reducers'
import {
  loadState,
  saveState,
} from './utils/localStorage'

const devToolsOptions = {}
const composeEnhancers = composeWithDevTools(devToolsOptions)

const createStore = (mapStateToStorage) => {
  const persistedState = mapStateToStorage ? loadState() : undefined

  const store = _createStore(
    reducers,
    persistedState,
    composeEnhancers(
      applyMiddleware(thunk),
    ),
  )

  if (mapStateToStorage) {
    const savePersistentState = () => {
      saveState(mapStateToStorage(store.getState()))
    }
    store.subscribe(throttle(savePersistentState, config.statePersistenceInterval))
  }

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line global-require
      const nextReducers = require('./reducers').default
      store.replaceReducer(nextReducers)
    })
  }

  return store
}

export default createStore
