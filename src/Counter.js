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

  return (
    <div>
      <h2>Count: { counter }</h2>
      <button onClick={ increment }>Increment</button>
    </div>
  )
}

export default Counter
