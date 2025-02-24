import Child from "./child"
import './parent.css'

const Parent = ()=>{
    const employees = [
        {name: "Pradeep",regNo:"12",address:"Medak",id:1},
        {name: "Vinesh",regNo:"13",address:"Medak",id:2},
        {name: "Abhi",regNo:"14",address:"Medak",id:3},
    ]
    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <Child empData={employees}/>
        </div>
    )
}

export default Parent