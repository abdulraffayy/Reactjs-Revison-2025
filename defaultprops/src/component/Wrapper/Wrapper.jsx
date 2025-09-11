import React from 'react'

const Wrapper = ({children, color}) => {
  return (
    <>
    <div style={{color: color, backgroundColor: "blue", padding: "10px", borderRadius: "10px", margin: "10px"}}>
        {children}
   
    </div>
   
    </>
  )
}

export default Wrapper