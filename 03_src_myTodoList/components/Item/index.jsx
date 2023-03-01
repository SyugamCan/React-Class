import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {isEnter: false}
  handleDelete = () => {
    const {todo,deleteTodo} = this.props
    deleteTodo(todo.id)
  }
  handleMouseEnter = () => {
    this.setState({isEnter: true})
  }
  handleMouseLeave = () => {
    this.setState({isEnter: false})
  }
  handleCheck = (event) => {
    const {todo,updateTodo} = this.props
    updateTodo(todo.id,event.target.checked)
  }
  render() {
    const {todo} = this.props
    const {isEnter} = this.state
    return (
      <li style={{backgroundColor: isEnter ? '#ddd' :'white'}} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <label>
          <input type="checkbox" checked={todo.done} onChange={this.handleCheck}/>
          <span>{todo.name}</span>
        </label>
        <button onClick={this.handleDelete} className="btn btn-danger" style={{display: isEnter ? 'block' :'none'}}>删除</button>
      </li>
    )
  }
}
