import React, { Component } from 'react' 

export default class ClassCounter extends Component {

  state = {
    count: 0
  }

  increment = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }))
  }

  decrement = () => {
    this.setState(({ count }) => ({
      count: count - 1
    }))
  }

  reset = () => {
    this.setState({count: 0})
  }

  render(){
    return(
      <>
        <h1>I am a counter built using a class component.</h1>
        <h2>Count: { this.state.count }</h2>
        <div>
          <button onClick={ this.increment }>+</button>
        </div>
        <div>
          <button onClick={ this.decrement }>-</button>
        </div>
        <div>
          <button onClick={ this.reset }>0</button>
        </div>
      </>
    )
  }
}

