import GrandChild from "./grandChild"


const Child = (props)=>{
    
    return(
        <div>
            <h2>Child Component</h2>
            {props.empData.map((employee,id)=>(
                <GrandChild
                    key={id}
                    name={employee.name}
                    regNo={employee.regNo}
                    address={employee.address}
                />
            ))}
        </div>
    )
}

export default Child