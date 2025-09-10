import React from 'react'

const DataSenderthird = (props) => {
  console.log(props);
  return (
    <>
    <h1 className='text-3xl font-bold underline tetx-red-500 text-center text-xl'>DataSenderthird</h1>
    <h2>Name: {props.name}</h2>
    <h2>Data: {props.data}</h2>
    
    </>
  )
}

export default DataSenderthird