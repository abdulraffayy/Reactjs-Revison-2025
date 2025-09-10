import React from 'react'
import petsimg from '../assets/petimages.jpg'




const Assignment = () => {
    const username = "Anil Sidhu Todos"

    const alertFunc =() => {
        alert("Hello World")
    }
  return (
    <>
    <h1>{username}</h1>
    <img src={petsimg}></img>
    <ul>
        <li>Invent new trafic</li>
        <li>Rehabilitate the food chain</li>
        <li>Destroy the food chain</li>

    </ul>
    <button onClick={alertFunc}>Click Me</button>
    </>
  )
}

export default Assignment