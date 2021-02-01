import React, { Component } from 'react'

export default class CountDown extends Component {

  state = {
    minutes: 3,
    seconds: 0
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state

      if (seconds > 0) {
          this.setState((prevState) => ({
              seconds: prevState.seconds - 1
          }))
      }
      if (seconds === 0) {
          if (minutes === 0) {
              clearInterval(this.myInterval)
          } else {
              this.setState((prevState) => ({
                  minutes: prevState.minutes - 1,
                  seconds: 59
              }))
          }
      } 
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

 render(){
   const { minutes, seconds } = this.state
   return(
    <>
      <h3>3 Min Countdown built with a class component</h3>
      <h1>Time Remaining: { minutes } minutes, { seconds } seconds</h1>
      { minutes === 0 && seconds === 0 
        ? <h2>Time's up!</h2>
        : <h2>Time Remaining: { minutes }:{ seconds < 10 ? `0${seconds}` : seconds }</h2>
      }
    </>
   )
 }
}