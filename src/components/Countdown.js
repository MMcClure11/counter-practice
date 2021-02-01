import React, { Component } from 'react'

export default class CountDown extends Component {

  state = {
    count: 0,
    minutes: 3,
    seconds: 0
  }

  componentDidMount() {
    this.inverval = setInterval(() => {
      let seconds = this.state.seconds - 1
      let minutes = this.state.minutes - 1
      if ( seconds >= 0 ) {
        this.setState({
          seconds: seconds
        })
      } else {
        this.setState({
          minutes: minutes,
          seconds: 59
        })
      }
      if ( minutes === 0 ) {
        clearInterval(this.inverval)
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

 render(){
   const { count, minutes, seconds } = this.state
   return(
    <>
      <h1>Time Remaining: { minutes } minutes, { seconds } seconds</h1>
      <h2>{ count }</h2>     
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
      <button>0</button>
    </>
   )
 }
}