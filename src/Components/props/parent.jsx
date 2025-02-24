import React from 'react'
import Child from './child'

const Parent = () => {
    const studentData = [
        {name: "Pradeep", regNo: "101", age: "25", id: 1},
        {name: "Vinesh", regNo: "102", age: "26", id: 2},
        {name: "Abhi", regNo: "103", age: "26", id: 3},
        {name: "Gopal", regNo: "104", age: "25", id: 4},
    ]
  return (
    <div>
        <h1>Parent component</h1>
        <Child tranfer = {studentData}/>
      
    </div>
  )
}

export default Parent
