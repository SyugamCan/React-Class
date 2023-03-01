import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  searchPhoto = ()=>{
    const {keyWordElement:{value:keyWord}} = this
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => {
        PubSub.publish('getData',{userData:response.data.items, isFirst: false})
      },
      error => {
        PubSub.publish('getData',{isFirst: false, errorMessage: error.message})
      }
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Users</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.searchPhoto}>Search</button>
        </div>
      </section>
    )
  }
}
