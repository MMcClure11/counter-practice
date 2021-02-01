import React, { Component } from 'react'

export default class CountDownFive extends Component {

  state = {
    minutes: 5,
    seconds: 0
  }

  render(){
    const { minutes, seconds } = this.state
    return(
      <div>
        <h1>Time Remaining: { minutes } : { seconds < 10 ? `0${seconds}` : seconds }</h1>
      </div>
    )
  }
}