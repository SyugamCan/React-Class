import React from "react";
import ReactDOM from 'react-dom';

// 
export default class Life extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    console.log('constructor被调用');
  }
  add = () => {
    let {count} = this.state
    this.setState({count:count+1})
  }
  render() {
    const {count} = this.state
    return (
      <div>
        <h2>当前和为：{count}</h2>
        <button onClick={this.add}>点击+1</button>
      </div>
    )
  }
}