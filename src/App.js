import './App.css';
import React, { Component } from 'react'

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

  render() {
    return (
      <div>
        <h3>Counter: { this.state.counter } </h3>
        <button onClick={ this.increase }>Increase</button>
        <button onClick={ this.decrease }>Decrease</button>
      </div>
    )
  }
}

