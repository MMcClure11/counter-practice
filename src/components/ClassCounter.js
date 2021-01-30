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

  render() {
    return (
      <div>
        <h2>I am a counter using a Class Component</h2>
        { this.state.count }
        <button onClick={ this.increment }>Increment</button>
      </div>
    )
  }
}

