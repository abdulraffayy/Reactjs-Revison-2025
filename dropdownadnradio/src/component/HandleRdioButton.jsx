import React, { useState } from 'react'

const HandleRdioButton = () => {
    const [gender, setGender] = useState([])


    const handleGender = (e) => {
        setGender(e.target.value)
    }
  return (
    <>
    <h1>Handle Radio Button and Dropdown
    </h1>
    <h2>Gender: {gender}</h2>

    <div className="dvi">
        <input type='radio' name='gender' value='male' onChange={handleGender} />Male
        <input type='radio' name='gender' value='female' onChange={handleGender} />Female
        <br />
        <input type='radio' name='gender' value='other' onChange={handleGender} />Other
        <br />
        <select class='form-control'>
            <option value='1'>Hindi</option>
            <option value='2'>English</option>
            <option value='3'>Gujarati</option>
            <option value='4'>Marathi</option>
            <option value='5'>Kannada</option>
        </select>
        <br />
        <button>Submit</button>
    </div>
    </>
  )
}

export default HandleRdioButton
