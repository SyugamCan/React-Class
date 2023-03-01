import React from 'react'

class Cmp1 extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        用户名：<input onChange={this.saveFormdata('username')} type="text" name="username"/>
        密码：<input onChange={this.saveFormdata('password')} type="password" name="password"/>
        <button>登录</button>
      </form>
    )
  }
  saveFormdata = (data) => {
    return (event)=>{
      this.setState({
        [data]: event.target.value
      })
    }
  }
  handleSubmit = () => {
    const {username,password} = this.state
    alert(`username=${username},password=${password}`)
  }
}
export default Cmp1