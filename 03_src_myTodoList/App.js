import React,{Component} from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import {nanoid} from 'nanoid'
import './App.css'

export default class App extends Component {
  state = {todos: [
    {id:'001', name:'吃饭', done:true},
    {id:'002', name:'睡觉', done:false},
    {id:'003', name:'打豆豆', done:true},
    {id:'004', name:'敲代码', done:false}
  ]
  }
  // 添加一个
  addTodo = (name) => {
    const {todos} = this.state
    const todo = {id:nanoid(), name, done:false}
    const newTodos = [todo,...todos]
    this.setState({todos: newTodos})
  }
  // 删除一个特定id的todo
  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({todos: newTodos})
  }
  // 改变特定id的todo的done
  updateTodo = (id,flag) => {
    const {todos} = this.state
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        return {...todo,done:flag}
      }
      else return todo
    })
    this.setState({todos: newTodos})
  }
  // 删除所有已完成
  deleteAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter((todo) => {
      return todo.done === false
    })
    this.setState({todos: newTodos})
  }
  // 改变所有的done
  checkAll = (flag) => {
    const {todos} = this.state
    const newTodos = todos.map((todo) => {
      if(todo.done !== flag) {
        return {...todo,done:flag}
      }
      else return todo
    })
    this.setState({todos: newTodos})
  }
  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}/>
          <Footer todos={todos} deleteAllDone={this.deleteAllDone} checkAll={this.checkAll}/>
        </div>
      </div>
    )
  }
}