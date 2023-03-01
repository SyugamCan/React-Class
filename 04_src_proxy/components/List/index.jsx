import React, { Component } from 'react'
import './index.css'
export default class List extends Component {

  render() {
    const {userData,isFirst,isLoading,errorMessage} = this.props
    console.log('@@@',userData);
    return (
      <div className="row">
        {
          isFirst ? <h2>Welcome</h2> :
          isLoading ? <h2>Loading...</h2> :
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


/*
avatar_url
: 
"https://avatars.githubusercontent.com/u/8559056?v=4"
events_url
: 
"https://api.github.com/users/aaaddress1/events{/privacy}"
followers_url
: 
"https://api.github.com/users/aaaddress1/followers"
following_url
: 
"https://api.github.com/users/aaaddress1/following{/other_user}"
gists_url
: 
"https://api.github.com/users/aaaddress1/gists{/gist_id}"
gravatar_id
: 
""
html_url
: 
"https://github.com/aaaddress1"
id
: 
8559056
login
: 
"aaaddress1"
node_id
: 
"MDQ6VXNlcjg1NTkwNTY="
organizations_url
: 
"https://api.github.com/users/aaaddress1/orgs"
received_events_url
: 
"https://api.github.com/users/aaaddress1/received_events"
repos_url
: 
"https://api.github.com/users/aaaddress1/repos"
score
: 
1
site_admin
: 
false
starred_url
: 
"https://api.github.com/users/aaaddress1/starred{/owner}{/repo}"
subscriptions_url
: 
"https://api.github.com/users/aaaddress1/subscriptions"
type
: 
"User"
url
: 
"https://api.github.com/users/aaaddress1"
*/