import React,{Component} from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css'

export default class App extends Component {
  state = {todos: [
    {id:'001', name: '吃饭', done: true},
    {id:'002', name: '睡觉', done: false},
    {id:'003', name: '玩游戏', done: true},
    {id:'004', name: '敲代码', done: false}
  ]}
  // 添加todo
  addTodo = (todoObj) => {
    const newTodos = [todoObj,...this.state.todos]
    this.setState({todos: newTodos})
  }
  // 勾选或取消勾选某个特定的todo
  updateTodo = (id,done) => {
    const {todos} = this.state
    // 加工一下数组
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id) return {...todoObj,done:done}
      else return todoObj
    })
    this.setState({todos: newTodos})
  }
  // 删除todo
  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({todos: newTodos})
  }
  // 删除所有已完成的todo
  deleteAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter((todo) => {
      return todo.done === false
    })
    this.setState({todos: newTodos})
  }
  // 全选或全不选
  checkAll = (flag) => {
    const {todos} = this.state
    const newTodos = todos.map((todo) => {
      if(todo.done === flag) return todo
      else return {...todo,done: flag}
    })
    this.setState({todos: newTodos})
  }
  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} deleteAllDone={this.deleteAllDone} checkAll={this.checkAll}/>
        </div>
      </div>
    )
  }
}