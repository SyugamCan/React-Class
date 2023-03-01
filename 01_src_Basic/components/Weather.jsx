import React from "react";

class Weather extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     isHot: true
  //   }
  // }
  state = { isHot: true }
  render() {
    const {isHot} = this.state
    return (
      <h2 onClick={this.changeWeather}>有状态，类组件。今天天气很{isHot ? '炎热' : '凉爽'}</h2>
    )
  }
  changeWeather = () => {
    this.setState({isHot: !this.state.isHot})
  }

}

export default Weather