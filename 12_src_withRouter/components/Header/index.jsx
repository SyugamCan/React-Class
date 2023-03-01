import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {
  back = () => {
    this.props.history.goBack()
  }
  forward = () => {
    this.props.history.goForward()
  }

  render() {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.back}>back</button>
        <button onClick={this.forward}>forward</button>
      </div>
    )
  }
}

export default withRouter(Header)