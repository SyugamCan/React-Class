import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  searchPhoto = ()=>{
    const {keyWordElement:{value:keyWord}} = this
    console.log(keyWord)
    const {update} = this.props
    axios.get(`https://api.github.com/search/users123?q=${keyWord}`).then(
      response => {
        update({userData:response.data.items, isFirst: false})
      },
      error => {
        update({isFirst: false, errorMessage: error.message})
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
