import { useState } from "react"

const Events = () => {
    const [counter, SetCounter] = useState(0)
  return (
   <>
   <h1>Counter: {counter}</h1>
   <button onClick={() => SetCounter(counter + 1)}>Increment</button>
   </>
  )
}

export default Events