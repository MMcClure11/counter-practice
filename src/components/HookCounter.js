import React, { useState } from 'react'

const HookCounter = () => {
  const initialState = 0 
  const [ counter, setCounter ] = useState(initialState)

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
      <button onClick={ reset }>Reset</button>
      <button onClick={ increment }>Increment</button>
      <button onClick={ decrement }>Decrement</button>
    </div>
  )
}

export default HookCounter