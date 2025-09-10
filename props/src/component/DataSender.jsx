import React from 'react'

const DataSender = (props) => {
    console.log(props);
  return (
    <>
    <h1 className='text-3xl font-bold underline tetx-red-500 text-center text-xl'>DataSender</h1>
    <h2>Name: {props.name}</h2>
    <h3>Data: {props.data}</h3>
    
    </>
  )
}

export default DataSender
