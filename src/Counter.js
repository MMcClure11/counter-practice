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

  return (
    <div>
      <h2>Count: { counter }</h2>
    </div>
  )
}

export default Counter
