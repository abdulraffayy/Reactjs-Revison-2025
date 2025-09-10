import React, { useState } from 'react'

const FuncionalComponent = () => {
    const [data, setData] = useState(0)
  return (
    <>
    <h1 className='text-center font-semibold'>{data}</h1>
    <button className='bg-blue-500 text-white p-2 rounded-md mx-auto block' onClick={() => setData(data + 1)}>Increment</button>
    </>
  )
}

export default FuncionalComponent
