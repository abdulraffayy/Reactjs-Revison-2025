import React, { useState } from 'react'

const HandlerCheckbox = () => {
  const [skills, setSkills] = useState([]);


  const HandleSkills = (event) => {
    console.log(event.target.value, event.target.checked);
    if(event.target.checked){
      setSkills([...skills, event.target.value]);
    }
    else{
      setSkills([skills.filter((item) => item!=event.target.value)]);
    }
  }
  
  return (
    <>
    <h1>Hnadle Checkbox</h1>
    <h3>Select your skills</h3>
  <input type='checkbox' name='skills' value='PHP' id='PHP' onChange={HandleSkills}/>
  <label htmlFor='PHP'>HTML</label>
  <br/><br/>
    
  <input type='checkbox' name="skills" value='HTML' id='HTML' onChange={HandleSkills}/>
  <label htmlFor='HTML'>HTML</label>
  <br/><br/>
  <input type='checkbox' name="skills" value='CSS' id='CSS' onChange={HandleSkills}/>
  <label htmlFor='CSS'>CSS</label>
  <br/><br/>
  <input type='checkbox' name="skills" value='JavaScript' id='JavaScript' onChange={HandleSkills}/>
  <label htmlFor='JavaScript'>JavaScript</label>
  <br/><br/>
  <input type='checkbox' name="skills" value='React' id='React' onChange={HandleSkills}/>
  <label htmlFor='React'>React</label>
  <br/><br/>
  <input type='checkbox' name="skills" value='Node' id='Node' onChange={HandleSkills}/>
  <label htmlFor='Node'>Node</label>
  <br/><br/>
  <input type='checkbox' name="skills" value='MongoDB' id='MongoDB' onChange={HandleSkills}/>
  <label htmlFor='MongoDB'>MongoDB</label>
  <br/><br/>
  <input type='checkbox' name="skills" value='MySQL' id='MySQL' onChange={HandleSkills}/>
  <label htmlFor='MySQL'>MySQL</label>
  <br/><br/>
  <input type='checkbox' name="skills" value='PostgreSQL' id='PostgreSQL' onChange={HandleSkills}/>
  <label htmlFor='PostgreSQL'>PostgreSQL</label>
  <br/><br/>
  <input type='checkbox' name="skills" value='Oracle' id='Oracle' onChange={HandleSkills}/>
  <label htmlFor='Oracle'>Oracle</label>
  <br/><br/>
  
  <br/><br/>

  <h1>Skills:{skills}</h1>
 
    </>
  )
}

export default HandlerCheckbox
