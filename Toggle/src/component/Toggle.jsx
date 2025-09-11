import React, { useState } from 'react'
import User from './User'

const Toggle = () => {
    const [display, setDisplay] = useState(true)
  return (
    <>
  
    {
        display ?   <User />
        : null
    }
    
    <button onClick={() => setDisplay(!display)}>hide or show </button>
    
    </>
  )
}

export default Toggle