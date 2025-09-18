import React from 'react'

const User = ({user}) => {
  return (
    <>
    <h1>User</h1>
    <h1>Name:<span style={{color: 'red'}}> {user.name}</span></h1>
    <h1>{user.age}</h1>
    <h1>City:<span style={{color: 'blue'}}> {user.city}</span></h1>
    <h1>Salary:<span style={{color: 'green'}}> {user.salary}</span></h1>
    <h1>Designation:<span style={{color: 'purple'}}> {user.designation}</span></h1>
    <h1>{user.department}</h1>
    </>
  )
}

export default User
