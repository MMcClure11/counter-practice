import React, { Component } from 'react'

export default class CountDownFive extends Component {

  state = {
    minutes: 5,
    seconds: 0
  }

  componentDidMount() {
    this.interval = setInterval(() => {

      const { minutes, seconds } = this.state

      if( seconds <= 0 && minutes !== 0 ){
        this.setState(({ minutes }) => ({
          minutes: minutes - 1,
          seconds: 59
        }))
      } else {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
      
      if(seconds === 0 && minutes === 0) {
        clearInterval(this.interval)
      }
    }, 1000)
  }

  render(){
    const { minutes, seconds } = this.state
    return(
      <div>
        { minutes === 0 && seconds === 0 
          ? <h1>Time's up!</h1>
          : <h1>Time Remaining - { minutes } : { seconds < 10 ? `0${seconds}` : seconds }</h1>
        }
      </div>
    )
  }
}