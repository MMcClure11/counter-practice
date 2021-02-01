import React, { Component } from 'react'

export default class CountDownFive extends Component {

  state = {
    minutes: 1,
    seconds: 0
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if( this.state.seconds <= 0 && this.state.minutes !== 0 ){
        this.setState((prevState) => ({
          minutes: prevState.minutes - 1,
          seconds: 59
        }))
      } else {
        this.setState((prevState) => ({
          seconds: prevState.seconds - 1
        }))
      }
      if(this.state.seconds === 0 && this.state.minutes === 0) {
        clearInterval(this.interval)
      }
    }, 1000)
  }

  render(){
    const { minutes, seconds } = this.state
    return(
      <div>
        <h1>Time Remaining - { minutes } : { seconds < 10 ? `0${seconds}` : seconds }</h1>
      </div>
    )
  }
}