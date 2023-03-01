import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    msgArr: [
      {id:'01', title:'one'},
      {id:'02', title:'two'},
      {id:'03', title:'three'}
    ]
  }
  render() {
    const {msgArr} = this.state
    return (
      <div>
        <ul>
          {
            msgArr.map((msg) => {
              return (
                <li key={msg.id}>
                  {/* 传递 search 参数 */}
                  <Link to={`/home/message/detail/?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 无需声明接收 search 参数 */}
        <Route path="/home/message/detail" component={Detail}/>
      </div>
    )
  }
}
