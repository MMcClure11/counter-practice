import React, { Component } from 'react'

export default class ClassCounter extends Component {

  state = {
    count: 0,
  }

  increment = () => {
    this.setState(
      prevState => ({count: prevState.count + 1})
    )
  }

  decrement = () => {
    this.setState(
      prevState => ({count: prevState.count -1})
    )
  }

  reset = () => {
    this.setState({count: 0})
  }

  componentDidMount() {
    let timer = setInterval(() => {
      this.increment()
    }, 1000)
  }
  

  render() {
    return (
      <div>
        <h2>I am a counter using a Class Component</h2>
        { this.state.count }
        <button onClick={ this.increment }>Increment</button>
        <button onClick={ this.decrement }>Decrement</button>
        <button onClick={ this.reset }>Reset</button>
      </div>
    )
  }
}

