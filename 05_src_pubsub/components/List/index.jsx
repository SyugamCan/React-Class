import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'
export default class List extends Component {
  state = {
    userData: [],
    isFirst: true,
    errorMessage: '' 
  }

  componentDidMount() {
    this.token = PubSub.subscribe('getData',(_,dataObj)=>{
      // console.log(dataObj)
      this.setState(dataObj)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {userData,isFirst,errorMessage} = this.state
    console.log('@@@',userData);
    return (
      <div className="row">
        {
          isFirst ? <h2>Welcome</h2> :
          errorMessage ? <h2>{errorMessage}</h2> :
          userData.map(
            user => (
            <div className="card" key={user.id}>
              <a rel="noopener noreferrer" href={user.html_url} target="_blank">
                <img alt="head_photo" src={user.avatar_url} style={{width: '100px'}}/>
              </a>
              <p className="card-text">{user.login}</p>
            </div>)
          )
        }
      </div>
    )
  }
}