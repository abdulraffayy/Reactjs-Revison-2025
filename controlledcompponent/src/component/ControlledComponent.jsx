import React, { useState } from 'react'

const ControlledComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <>
    <h1>Controlled Component</h1>
   <form>
    <input type="text" value={name} placeholder='Enter your Name' onChange={e => setName(e.target.value)} />
    <br></br>
  
    <br></br>
    <input type="text" value={email} placeholder='Enter your Email' onChange={e => setEmail(e.target.value)} />
    <br></br>

    <br></br>
    <input type="text" value={password} placeholder='Enter your Password' onChange={e => setPassword(e.target.value)} />
    <br></br>
    <br></br>
    <button type='submit'>Submit</button>
    <button type='reset' onClick={() => {setName(''); setEmail(''); setPassword('');}}>Reset</button>
   
   </form>
<div className="div">
    <h1>Name: {name}</h1>
    <h1>Email: {email}</h1>
    <h1>Password: {password}</h1>
</div>
   
    </>
  )
}

export default ControlledComponent
