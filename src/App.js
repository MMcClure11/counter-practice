import './App.css';
import React, { Component } from 'react'
import Counter from './Counter'

export default class App extends Component {

  state = {
    counter: 0,
  }

  increase = () => {
    this.setState((prevState) => ({ 
      counter: prevState.counter + 1 
    }))
  }

  decrease = () => {
    this.setState((prevState) => ({ 
      counter: prevState.counter - 1 
    }))
  }

  reset = () => {
    this.setState({counter: 0})
  }

  // componentDidMount(){
  //   console.log('Hello from cdm')
  //   setInterval(function(){ console.log("Hello"); }, 5000);
  //   // setInterval( this.increase, 5000);
  //   // const timer = setInterval( () => {
  //   //   this.setState((prevState) => ({ 
  //   //     counter: prevState.counter + 1 
  //   //   })), 1000
  //   // })
  // }

  render() {
    return (
      <div>
        <h3>Counter: { this.state.counter } </h3>
        <button onClick={ this.increase }>Increase</button>
        <button onClick={ this.decrease }>Decrease</button>
        <button onClick={ this.reset }>Reset</button>
        <Counter />
      </div>
    )
  }
}

