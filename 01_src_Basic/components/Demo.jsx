import React from "react";

class Demo extends React.Component {
  render() {
    return (
      <div>
        <input ref={(currentNode)=>{this.input1=currentNode}} type="text" placeholder="点击按钮提示数据"/>
        <button onClick={this.handleClick}>点击提示左侧数据</button>
        <input ref={(currentNode)=>{this.input2=currentNode}} onBlur={this.handleBlur} type="text" placeholder="失去焦点提示数据"/>
      </div>
    )
  }
  handleClick = () => {
    const {input1} = this
    alert(input1.value)
  }
  handleBlur = () => {
    const {input2} = this
    alert(input2.value)
  }
}

export default Demo