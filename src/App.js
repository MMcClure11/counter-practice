import './App.css';
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    counter: 0,
  }

  increase = () => {
    this.setState({counter: this.state.counter + 1})
  }

  render() {
    return (
      <div>
        <h3>Counter: {this.state.counter} </h3>
        <button onClick={ this.increase }>Increase</button>
      </div>
    )
  }
}

