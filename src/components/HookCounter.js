import React, { useState } from 'react'

const HookCounter = () => {
  const [ counter, setCounter ] = useState(0)

  const increment = () => {
    return setCounter(prevCount => prevCount + 1)
  }

  return(
    <div>
      <h2>I am a counter built using hooks</h2>
      { counter }
      <button onClick={ increment }>Increment</button>
      <button>Decrement</button>
    </div>
  )
}

export default HookCounter