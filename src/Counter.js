import React, { useEffect, useState } from 'react'

const Counter = () => {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prevCount => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []); // Pass in empty array to run effect only once!

  const increment = () => {
    setCounter(prevCount => prevCount + 1)
  }

  const decrement = () => {
    setCounter(prevCount => prevCount - 1)
  }

  const reset = () => {
    setCounter(0)
  }

  return (
    <div>
      <h2>Count: { counter }</h2>
      <button onClick={ increment }>Increment</button>
      <button onClick={ decrement }>Decrement</button>
      <button onClick={ reset }>Reset</button>
    </div>
  )
}

export default Counter
