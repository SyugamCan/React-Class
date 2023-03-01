import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  // 删除所有以完成
  handleDeleteAllDone = () => {
    const {deleteAllDone} = this.props
    deleteAllDone()
  }
  // 全选或全不选
  handleAllCheck = () => {
    const {checkAll} = this.props
    return (event) => {
      checkAll(event.target.checked)
    }
  }
  render() {
    const {todos} = this.props
    const allTodos = todos.length
    const doneCount = todos.reduce((pre,todo) => {
      return pre + (todo.done ? 1 : 0)
    },0)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount === allTodos && doneCount !== 0} onChange={this.handleAllCheck()}/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{allTodos}
        </span>
        <button className="btn btn-danger" onClick={this.handleDeleteAllDone}>清除已完成任务</button>
      </div>
    )
  }
}
