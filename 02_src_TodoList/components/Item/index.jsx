import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {
    enter: false
  }
  handleCheck = (id) => {
    const {updateTodo} = this.props
    return (event) => {
      updateTodo(id,event.target.checked)
    }
  }
  handleMouse = (flag) => {
    return () => {
      this.setState({enter: flag})
    }
  }
  handleDelete = (id) => {
    const {deleteTodo} = this.props
    return () => {
      if(window.confirm('确定删除？')) {
        deleteTodo(id)
      }
    }
  }
  render() {
    const {id,name,done} = this.props
    const {enter} = this.state
    return (
      <li style={{backgroundColor: enter ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{display: enter ? 'block' : 'none'}}>删除</button>
      </li>
    )
  }
}
