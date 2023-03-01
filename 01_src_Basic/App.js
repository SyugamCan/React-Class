import React,{Component} from "react";

import Hello from './components/Hello.jsx'
import Weather from './components/Weather.jsx'
import Person from './components/Person.jsx'
import Poo from './components/Poo.jsx'
import Demo from './components/Demo.jsx'
import Cmp1 from './components/Cmp1.jsx'
import Life from './components/Life.jsx'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Hello/>
        <Weather/>
        <Person name="csj" sex="male" age={21} />
        <Person name="dsj" age={29} />
        <Person name="esj" />
        <Poo name="Tom" sex="male" age={22} />
        <Demo /> */}
        {/* <Cmp1/> */}
        <Life/>
      </div>
    )
  }
}