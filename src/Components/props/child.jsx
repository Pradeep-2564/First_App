

const Child = (props) =>{
    return(
        <div>
            <h2>Child componet</h2>
            {props.tranfer.map((data, id)=>(
                <div key={id}>
                    <p> Name: {data.name}</p>                   
                    <p>Register no: {data.regNo}</p>
                    <p>Age: {data.age}</p>
                </div>
            ))}
        </div>
    )
}

export default Child