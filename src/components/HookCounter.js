import React, { useEffect, useState } from 'react'

const HookCounter = () => {

  const initialState = 0 

  const [ counter, setCounter ] = useState(initialState)

  // let intervalHandle;

  // const startTimer = () => {
  //   intervalHandle = setInterval(() => {
  //     increment()
  //   }, 1000)
  // }

  // const stopTimer = () => {
  //   clearInterval(intervalHandle)
  // }
  //I think I need state to have paused or not instead of useEffect if I want to be able to pause the timer

  useEffect( () => {
    const timer = setInterval( () => {
      increment()
    }, 1000)
    return () => {
      clearInterval(timer)
    }

  }, [])

  // const start = () => {
  //   startTimer()
  // }

  // const pause = () => {
  //   clearInterval(intervalHandle)
  //   console.log("pause was clicked")
  // }

  const reset = () => {
    return setCounter(initialState)
  }

  const increment = () => {
    return setCounter(prevCount => prevCount + 1)
  }

  const decrement = () => {
    return setCounter(prevCount => prevCount - 1)
  }

  return(
    <div>
      <h2>I am a counter built using hooks</h2>
      { counter }
      {/* <button onClick={ start }>Start</button>
      <button onClick={ pause }>Pause</button> */}
      <button onClick={ reset }>Reset</button>
      <button onClick={ increment }>Increment</button>
      <button onClick={ decrement }>Decrement</button>
    </div>
  )
}

export default HookCounter