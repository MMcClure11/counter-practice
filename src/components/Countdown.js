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

 render(){
   const { count, minutes, seconds } = this.state
   return(
    <>
      <h1>Time Remaining: { minutes } minutes, { seconds } seconds</h1>
      { minutes === 0 && seconds === 0 
        ? <h2>Time's up!</h2>
        : <h2>Time Remaining: { minutes }:{ seconds < 10 ? `0${seconds}` : seconds }</h2>
      }
    </>
   )
 }
}