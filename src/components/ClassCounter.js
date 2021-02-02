import React, { Component } from 'react' 

export default class ClassCounter extends Component {

  state = {
    count: 0
  }

  increment = () => {
    this.setState(prevState => (
      {count: prevState.count + 1}))
  }

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }))
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

  render(){
    return(
      <div>
        <h1>Count: { this.state.count }</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>0</button>
      </div>
    )
  }
}