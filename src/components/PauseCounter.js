import React, { Component } from 'react' 

export default class PauseCounter extends Component {

  state = {
    count: 0
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  start = () => {
    this.interval = setInterval(() => {
      this.increment()
    }, 1000);
  }

  pause = () => {
    clearInterval(this.interval)
  }

  reset = () => {
    this.setState({count: 0})
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render(){
    return(
      <div>
        <h2>Count: { this.state.count }</h2>
        <div>
          <button onClick={ this.start }>Start</button>
          <button onClick={ this.pause }>Pause</button>
          <button onClick={ this.reset }>Reset</button>
        </div>
      </div>
    )
  }
}