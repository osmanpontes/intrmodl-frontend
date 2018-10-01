import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Route } from 'react-router-dom'

import Home from './Home'
import UploadCsv from './UploadCsv'
import ShowCsv from './ShowCsv'

@hot(module)
class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/uploads" component={UploadCsv} />
        <Route path="/uploads/:id" component={ShowCsv} />
      </div>
    )
  }
}

export default Main
