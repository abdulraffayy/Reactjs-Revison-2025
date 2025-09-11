import { useState } from "react"


const StatesTutorial = () => {
    const [name, setName] = useState("ABDUL RAFAY")
    const [counter, setCounter] = useState(0)
  return (
    <>
    <h1>Name : {name}</h1>
    <button onClick={() => setName("Malik Faizan")}>updated name </button>
   
   <h2>COUNTER: {counter}</h2>
   <button onClick={() => setCounter(counter + 4)}>Updated counter</button>
    
    
    </>
  )
}

export default StatesTutorial