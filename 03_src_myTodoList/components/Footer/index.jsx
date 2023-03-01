import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  handleDeleteAllDone = () => {
    const {deleteAllDone} = this.props
    deleteAllDone()
  }
  handleCheckAll = (event) => {
    const {checkAll} = this.props
    checkAll(event.target.checked)
  }
  render() {
    const {todos} = this.props
    const doneNum = todos.reduce((pre, cur) => pre + (cur.done ? 1 : 0),0)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={todos.length>0 && doneNum===todos.length} onChange={this.handleCheckAll}/>
        </label>
        <span>
          <span>已完成{doneNum}</span> / 全部{todos.length}
        </span>
        <button onClick={this.handleDeleteAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
