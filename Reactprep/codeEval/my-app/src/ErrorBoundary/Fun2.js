import React from 'react'
function Fun2(props) {
    if(props.name.includes('@')){
        throw Error("invalid name")
    }
    else{
    return (
        <div>
<h2>{props.name}</h2>
        </div>
    )
    }
}

export default  Fun2