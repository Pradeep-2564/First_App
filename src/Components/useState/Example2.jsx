import React from 'react'

const Example2 = () => {
  return (
    <div className='container'>
      <div className="content">
        <p>Validation Checkbox input</p>
      </div>
      <div>
        <div>
          <div>
            <input type="checkbox" value= 'yes' id="" />
          </div>
          <div>
            <p className='terms'>I agree with the Terms and Conditions</p>
          </div>
        </div>
        <div>Error</div>
      </div>
      <div>
        <input type='submit' value='submit' id="" />
      </div>
    </div>
  )
}

export default Example2
