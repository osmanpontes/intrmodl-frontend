import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const bindActions = actions => dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

const enhancedConnect = (mapStateToProps, actions = {}) => (TargetComponent) => {
  @connect(mapStateToProps, bindActions(actions))
  class EnhancedComponent extends Component {
    render() {
      return <TargetComponent {...this.props} />
    }
  }

  return EnhancedComponent
}

export default enhancedConnect
