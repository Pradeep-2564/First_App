import React from 'react'

const GrandChild = (props) => {
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map((item , id)=>(
                <tr key={id}>
                    <td>{ item.name }</td>
                    <td>{ item.description }</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default GrandChild
