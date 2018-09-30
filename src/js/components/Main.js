import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Route } from 'react-router-dom'

import Home from './Home'

@hot(module)
class Main extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Home} />
      </div>
    )
  }
}

export default Main
