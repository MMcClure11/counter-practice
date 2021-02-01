import React, { Component } from 'react' 

export default class ClassCounter extends Component {

  state = {
    count: 0
  }

  increment = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }))
  }

  render(){
    return(
      <>
        <h1>I am a counter built using a class component.</h1>
        <h2>Count: { this.state.count }</h2>
        <div>
          <button onClick={ this.increment }>+</button>
        </div>
        <div>
          <button>-</button>
        </div>
        <div>
          <button>0</button>
        </div>
      </>
    )
  }
}

