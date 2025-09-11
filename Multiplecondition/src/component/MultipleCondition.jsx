import { useState } from "react"

const MultipleCondition = () => {
    const [counter, setCounter] = useState(0)
  return (
   <>
   <h2>Task</h2>
   <h3>Counter: {counter}</h3>
   {
    counter ==0 ?<h1>Condition 1 </h1>: counter ==2 ?<h1>Conditon 2</h1>: null
   }
   <button className="btn" onClick={() => setCounter(counter + 1)}>Increment</button>
  

   
   
   </>
  )
}

export default MultipleCondition