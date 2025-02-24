import React, { useState } from 'react'
import './FullForm.css'

const FullForm = () => {

    // const initialValues = ;

    const [values, setValues] = useState({
      firstname: '',
      lastname: '',
      email: '',
      contact: '',
      gender: '',
      subject: '',
      resume: '',
      about: ''
    })

    const handleChange = (e)=>{
        setValues({...values, [e.target.name]:[e.target.value]})
    }

const handleSubmit = (e) =>{
    e.preventDefault();
    alert("Form is submitted successful");
    console.log(values);
    // setValues(initialValues);
}


  return (
    <div className='container'>
      <h1>Fill The Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name*</label>
        <input type="text" placeholder='Enter First Name' name='firstname' required onChange={(e)=> handleChange(e)}/>

        <label htmlFor="lasttname">Last Name*</label>
        <input type="text" placeholder='Enter Last Name' name='lastname' required onChange={(e)=> handleChange(e)}/>

        <label htmlFor="email">Email*</label>
        <input type="email" placeholder='Enter Email' name='email' required onChange={(e)=> handleChange(e)}/>

        <label htmlFor="contact">Contact</label>
        <input type="text" placeholder='Enter Phone number' name='contact' required onChange={(e)=> handleChange(e)}/>

        <label htmlFor="gender">Gender</label>
        <input type='radio' name="gender" onChange={(e)=> handleChange(e)}/> Male
        <input type='radio' name="gender" onChange={(e)=> handleChange(e)}/> Female
        <input type='radio' name="gender" onChange={(e)=> handleChange(e)}/> Other

        <label htmlFor="subject">Subject</label>
        <select name="subject" id="subject" onChange={(e)=> handleChange(e)}>
            <option value="Select">Select</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
        </select>

        <label htmlFor="resume">Resume*</label>
        <input type="file" name="resume" placeholder='Select Resume' onChange={(e)=> handleChange(e)}/>

        <label htmlFor="about">About</label>
        <textarea name="about" id="about" placeholder='Enter description' onChange={(e)=> handleChange(e)} ></textarea>
        
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FullForm
