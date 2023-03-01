import React, { Component } from 'react'

import './index.css'

export default class Header extends Component {
  handleKeyUp = (event) => {
    const {addTodo} = this.props
    const {keyCode, target} = event
    if(keyCode === 13) {
      addTodo(target.value)
      target.value = ''
    }
    else return
  }
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
