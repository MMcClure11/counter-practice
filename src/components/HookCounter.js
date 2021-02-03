import React, { useEffect, useState } from 'react'

const HookCounter = () => {

  const initialState = 0 

  const [ counter, setCounter ] = useState(initialState)

  useEffect( () => {
    const timer = setInterval( () => {
      increment()
    }, 1000)
    return () => {
      clearInterval(timer)
    }

  }, [])

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
    <div data-test='hook-counter-component'>
      <h2>I am a counter built using hooks</h2>
      <h3 data-test='counter-display'>
        Count is at:&nbsp;
        <span data-test='count'>{ counter }</span>
      </h3>
      <button data-test='reset-button' 
        onClick={ reset }>Reset</button>
      <button data-test='increment-button' 
        onClick={ increment }>Increment</button>
      <button data-test='decrement-button' 
        onClick={ decrement }>Decrement</button>
    </div>
  )
}

export default HookCounter