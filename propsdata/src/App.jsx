
import { useState } from 'react'
import './App.css'
import Props from './component/Props'
import College from './component/College'

function App() {
  const [data, setData] = useState(0)
  const name = "Anil Sidu"
  let userobject = {
    nameEmployee: "Anil Sidu",
    ageEmployee: 20,
    city: "New York"
  }

  let arraytoSend = [
    {
      name: "Anil Sidu",
      age: 20,
      city: "New York"
    },
    {
      name: "Anil Sidu",
      age: 20,
      city: "New York"
    },
    
    {
      name: "Anil Sidu",
      age: 20,
      city: "New York"
    }
  ]
 

  return (
    <>
      <h1>React JS 19 Tutorial in Hindi #18: Props in React JS | Pass data between component</h1>
      <Props data={data} setData={setData} name={name} userobject={userobject} arraytoSend={arraytoSend} />
      <College name={arraytoSend[0].name} age={arraytoSend[1].age} city={arraytoSend[2].city} />
    </>
  )
}

export default App
