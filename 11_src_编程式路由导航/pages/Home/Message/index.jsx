import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    msgArr: [
      {id:'01', title:'消息1'},
      {id:'02', title:'消息2'},
      {id:'03', title:'消息3'}
    ]
  }
  pushShow = (path, state) => {
    return () => {
      this.props.history.push(path, state)
    }
  }
  replaceShow = (path, state) => {
    return () => {
      this.props.history.replace(path, state)
    }
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
                  {/* 传递 state 参数 */}
                  <Link to={{pathname:'/home/message/detail', state:{id:msg.id, title:msg.title}}} >{msg.title}</Link>
                  <button onClick={this.pushShow('/home/message/detail', {id:msg.id, title:msg.title})}>pushShow</button>&nbsp;&nbsp;
                  <button onClick={this.replaceShow('/home/message/detail', {id:msg.id, title:msg.title})}>replaceShow</button>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 无需声明接收 state 参数 */}
        <Route path="/home/message/detail" component={Detail}/>
      </div>
    )
  }
}
