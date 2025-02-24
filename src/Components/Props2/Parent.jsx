import React from 'react'
import Child from './Child'
import GrandChild from './GrandChild'

const ParentProp = () => {
    const userData = [
        {name: "Pradeep", age: "25", email: "pradeep@gmail.com", Address: "Hyderabad", id: 1},
        {name: "Vinesh", age: "25", email: "vinesh@gmail.com", Address: "Medak", id: 2},
        {name: "Vishnu", age: "24", email: "vishnu@gmail.com", Address: "Gajwel", id: 3},
        {name: "Abhishek", age: "25", email: "abhi@gmail.com", Address: "Ameerpet", id: 4},
        {name: "Ramesh", age: "28", email: "ramesh@gmail.com", Address: "Madhapur", id: 5},
    ]
    const status = [

        {id: 1 , name: "Pradeep", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta autem aspernatur dolorum quibusdam minima ea possimus sapiente reprehenderit nostrum. Consequuntur corrupti tempora modi ullam inventore. Incidunt veniam labore debitis illum!"}, 
        {id: 2 , name: "Vinesh", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta autem aspernatur dolorum quibusdam minima ea possimus sapiente reprehenderit nostrum. Consequuntur corrupti tempora modi ullam inventore. Incidunt veniam labore debitis illum!"}, 
        {id: 3 , name: "Vishmu", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta autem aspernatur dolorum quibusdam minima ea possimus sapiente reprehenderit nostrum. Consequuntur corrupti tempora modi ullam inventore. Incidunt veniam labore debitis illum!" },
        {id: 4 , name: "Abhishek", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta autem aspernatur dolorum quibusdam minima ea possimus sapiente reprehenderit nostrum. Consequuntur corrupti tempora modi ullam inventore. Incidunt veniam labore debitis illum!" },
        {id: 5 , name: "Ramesh", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta autem aspernatur dolorum quibusdam minima ea possimus sapiente reprehenderit nostrum. Consequuntur corrupti tempora modi ullam inventore. Incidunt veniam labore debitis illum!" }
    ]
  return (
    <div>
      <h2 style={{textAlign: "center"}}>Parent componet</h2>
      <Child userInfo = { userData } />
      <GrandChild data = {status }/>
    </div>
  )
}

export default ParentProp
