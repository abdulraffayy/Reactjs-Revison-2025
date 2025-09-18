import React from 'react'
import User from './User'

const ReuseComponent = () => {
    const EmployeData = [
        {
          name: "John",
          age: 20,
          city: "New York",
          salary: 100000,
          designation: "Manager",
          department: "IT"
        },
        {
          name: "Jane",
          age: 21,
          city: "Los Angeles",
          salary: 100000,
          designation: "Manager",
          department: "IT"
        },
        {
          name: "Jim",
          age: 22,
          city: "Chicago",
          salary: 100000,
          designation: "Manager",
          department: "IT"
        },
        {
          name: "Jill",
          age: 23,
          city: "Houston",
          salary: 100000,
          designation: "Manager",
          department: "IT"
        },
        {
          name: "Jack",
          age: 24,
          city: "Miami",
          salary: 100000,
          designation: "Manager",
          department: "IT"
        },
        {
          name: "Jill",
          age: 25,
          city: "San Francisco",
          salary: 100000,
          designation: "Manager",
          department: "IT"
        },
        {
          name: "Jill",
          age: 26,
          city: "Seattle",
          salary: 100000,
          designation: "Manager",
          department: "IT"
        },
        {
          name: "Jill",
          age: 27,
          city: "Boston",
          salary: 100000,
          designation: "Manager",
          department: "IT"
        },
        {
          name: "Jill",
          age: 28,
          city: "Washington",
          salary: 100000,
          designation: "Manager",
          department: "IT"
        },
        {
          name: "Jill",
          age: 29,
          city: "New York",
          salary: 100000,
          designation: "Manager"
         
    
        }
      ]
  return (
    <>
    <h1>Reuse Component in loop</h1>
    {
        EmployeData.map((employe) => (
            <div key={employe.name}>
               <User user={employe}/>
            </div>
        ))
    }
    </>
  )
}

export default ReuseComponent
