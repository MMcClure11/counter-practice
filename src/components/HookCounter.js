import React, { useState } from 'react'

const HookCounter = () => {
  const [ counter, setCounter ] = useState(0)
  return(
    <div>
      <h2>I am a counter built using hooks</h2>
      { counter }
    </div>
  )
}

export default HookCounter