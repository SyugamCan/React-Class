import React from "react"
function Poo(props) {
  const {name,sex,age} = props
  return (
    <ul>
      <li>name: {name}</li>
      <li>sex: {sex}</li>
      <li>age: {age+1}</li>
    </ul>
  )
}

export default Poo