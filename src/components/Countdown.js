import React, { Component } from 'react'

export default class CountDown extends Component {

  state = {
    count: 0,
    minutes: 3,
    seconds: 0
  }

 render(){
   const { count, minutes, seconds } = this.state
   return(
    <div>
      <h1>Time Remaining: { minutes } minutes, { seconds } seconds</h1>     
    </div>
   )
 }
}