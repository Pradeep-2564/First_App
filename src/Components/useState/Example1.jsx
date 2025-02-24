import React, { useState } from 'react'

const Example1 = () => {
    const [name, setName] = useState('');

    const handleChange = (e) =>{
        setName(e.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        alert("Name is Submitted: "+ name);
        setName('');
    }

  return (
    <div>
      <form onSubmit={handleSubmit} align='center'>
        <label>
            Name: 
            <input type="text" value={name} onChange={handleChange}  />
        </label><br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Example1
