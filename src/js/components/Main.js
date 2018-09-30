import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Route } from 'react-router-dom'

import Home from './Home'
import UploadCsv from './UploadCsv'

@hot(module)
class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/uploads" component={UploadCsv} />
      </div>
    )
  }
}

export default Main
