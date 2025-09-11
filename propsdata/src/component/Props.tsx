import React from 'react'

const Props = (props:any) => {
  return (
    <>
    <h1>Props: {props.data}</h1>
    <button onClick={() => props.setData(props.data + 1)}>Change Data</button>
    <h2>Paarent to child data send on props: {props.name}</h2>
    <h3>Paarent to child object data send on props: {props.userobject.nameEmployee}</h3>
    </>
  )
}

export default Props