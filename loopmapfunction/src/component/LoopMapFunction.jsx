import React from 'react'

const LoopMapFunction = () => {
    const CollegeData = ["MIT", "Harvard", "Stanford", "Cambridge", "Oxford"];
    const userData00 = [
        {
            name: "John",
            age: 20,
            city: "New York"
        },
        {
            name: "Jane",
            age: 21,
            city: "Los Angeles"
        },
        {
            name: "Jim",
            age: 22,
            city: "Chicago"
        },
        {
            name: "Jill",
            age: 23,
            city: "Houston"
        },
        {
            name: "Jack",
            age: 24,
            city: "Miami"
        }
    ]
  return (
    <>
    <h1>Dummy Data</h1>
  <table border={1} className='table-data'>
    <thead>
        <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
    </thead>
    <tbody className='table-body'>
        {userData00.map((user, index) => (
            <tr key={index}>
                <td>{index}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.city}</td>
            </tr>
        ))}
    </tbody>
  </table>

  <h2>Loop Data</h2>

  <table border={1} className='table-data'>
    <thead>
        <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
    </thead>
    <tbody className='table-body'>
        {userData00.map((user, index) => (
            <tr key={index}>
                <td>{index}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.city}</td>
            </tr>
        ))}
    </tbody>
  </table>
    
    </>
  )
}

export default LoopMapFunction
