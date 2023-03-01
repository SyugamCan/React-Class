import React, { Component } from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test'
import Header from './components/Header'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 路由链接 */}
              <MyNavLink to="/about" a={1} b={2}>About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
                  <Route path="/home" component={Test}/>
                  <Redirect to="/about"/>
                </Switch>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
