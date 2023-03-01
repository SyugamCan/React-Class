import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'

export default class App extends Component {
  state = {
    userData: [],
    isFirst: true,
    errorMessage: '' 
  }
  update = (stateObj) => {
    this.setState({...stateObj})
  }
  render() {
    return (
      <div className="container">
        <Search {...this.state} update={this.update}/>
        <List {...this.state}/>
      </div>
    )
  }
}
