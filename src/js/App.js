import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import store from './store'
import Main from './components/Main'

const App = () => (
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>
)

export default App
