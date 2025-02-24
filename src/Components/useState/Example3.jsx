import React, { useState } from 'react'
 
const Example3 = () => {
    const [inputValue, setValue] = useState("")
    const handleChange = (e)=>{
        setValue(e.target.value)
    }
  return (
    <div>
        <input type="text" value ={inputValue} onChange={handleChange} id="input" /> <br /><br />
        <p style={{textAlign: 'center'}}>You have typed:{inputValue}</p>
    </div>
  )
}
 
export default Example3