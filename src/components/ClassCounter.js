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
      prevState => ({count: prevState.count - 1})
    )
  }

  reset = () => {
    this.setState({count: 0})
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.increment()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <h2>I am a counter using a Class Component</h2>
        <h1>{ this.state.count }</h1>
        <button onClick={ this.increment }>Increment</button>
        <button onClick={ this.decrement }>Decrement</button>
        <button onClick={ this.reset }>Reset</button>
      </div>
    )
  }
}

