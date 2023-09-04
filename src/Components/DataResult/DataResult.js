import React, { useState } from "react";
import './DataResult.css'

const DataResult = ({userData, currentTime}) => {
    const [id, setId] = useState(0)

    return (
        <div id="data-result">
            {userData.map((value, index)=> (
                <div className="data" key={index} >
                    <h2>id:{index}</h2>
                    <h3>data:{value.date}</h3> 
                    <p>nome:{value.name}</p>
                    <p>email:{value.email}</p>
                    <p>{value.cpf === undefined? 'senha:' + value.password : 'email' + value.cpf}</p>
                    <p>{value.product === undefined? '' : value.product}</p>
                </div>
                
            ))}
        </div>
    )
}

export default DataResult