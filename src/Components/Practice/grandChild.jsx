import './grandChild.css'

const GrandChild = (props)=>{
    
    return(
        <div className="grand-child">
            <p><b>Name: </b>{props.name}</p>
            <p><b>Register no: </b>{props.regNo}</p>
            <p><b>Address: </b>{props.address}</p>
        </div>
    )
}

export default GrandChild