
import './App.css'
import DataSender from './component/DataSender'
import DataSenderSecond from './component/DataSenderSecond'
import DataSenderthird from './component/DataSenderthird'
import { useState } from 'react'
function App() {

  const [data, setData] = useState(0);

  return (
    <>
     <h1 className='text-3xl font-bold underline tetx-red-500'>Pops Video paractice </h1>
     <DataSender name="Bruce"  data={data}/>  
     <DataSenderSecond name="Clark" data={data}/>
     <DataSenderthird name="Diana" data={data} />
     <button onClick={() => setData(data + 1)}>Increment</button>
    </>
  )
}

export default App
