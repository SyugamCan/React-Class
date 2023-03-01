import React, { Component } from 'react'

export default class Detail extends Component {
  state = {
    detailData: [
      {id:'01', content:'content===1'},
      {id:'02', content:'content===2'},
      {id:'03', content:'content===3'}
    ]
  }
  render() {
    console.log(this.props)
    const {id, title} = this.props.location.state
    const {detailData} = this.state
    const thisDetail = detailData.find((detail) => {
      return detail.id === id
    })
    return (
      <ul>
        <li>id: {id}</li>
        <li>title: {title}</li>
        <li>content: {thisDetail.content}</li>
      </ul>
    )
  }
}
