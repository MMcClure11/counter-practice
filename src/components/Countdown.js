import React, { Component } from 'react'

export default class CountDown extends Component {

  state = {
    count: 0,
    minutes: 3,
    seconds: 0
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state

      if (seconds > 0) {
          this.setState(({ seconds }) => ({
              seconds: seconds - 1
          }))
      }
      if (seconds === 0) {
          if (minutes === 0) {
              clearInterval(this.myInterval)
          } else {
              this.setState(({ minutes }) => ({
                  minutes: minutes - 1,
                  seconds: 59
              }))
          }
      } 
    }, 1000)

  }

  increment = () => {
    this.setState( prevState => ({
      count: prevState.count + 1
    }))
  }

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count -1 
    }))
  }

  reset = () => {
    this.setState({count: 0})
  }

 render(){
   const { count, minutes, seconds } = this.state
   return(
    <>
      <h1>Time Remaining: { minutes } minutes, { seconds } seconds</h1>
      <h2>{ count }</h2>     
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
      <button onClick={this.reset}>0</button>
    </>
   )
 }
}