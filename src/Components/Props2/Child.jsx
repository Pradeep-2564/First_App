import React from 'react'
import './child.css'
const Child = (props) => {
  return (
    <div>
      <h4>Child component</h4>

      <table align='center'> 
        <caption>User details</caption>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
            {props.userInfo.map((user, id)=>(
                <tr key={id}>
                    <td>{ user.name }</td>
                    <td>{ user.age }</td>
                    <td>{ user.email }</td>
                    <td>{ user.Address }</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Child
