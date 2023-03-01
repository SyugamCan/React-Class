import React from "react";
import PropTypes from 'prop-types'

class Person extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    sex: PropTypes.string,
    age: PropTypes.number
  }
  static defaultProps = {
    sex: 'no',
    age: 100
  }

  render() {
    const {name,sex,age} = this.props
    return (
      <ul>
        <li>name: {name}</li>
        <li>sex: {sex}</li>
        <li>age: {age+1}</li>
      </ul>
    )
  }
}

export default Person