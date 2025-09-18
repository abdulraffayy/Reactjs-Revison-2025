import React, { useState } from 'react'
import Clock from './Clock'

const Dropdown = () => {
    const [color, setColor] = useState("green");
  return (
    <>
    <h1>Dropdown</h1>
    <select onChange={(e) => setColor(e.target.value)}>
        <option value="green">green</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
    </select>
    <Clock color={color}/>
    
    </>
  )
}

export default Dropdown
