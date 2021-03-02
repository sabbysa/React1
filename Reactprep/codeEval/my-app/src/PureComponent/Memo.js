import React from 'react'

function Memo(props) {
    console.log("funcgtional comp")
    return (
        <div>
        Functional compoennt {props.name}
        </div>
    )
}
export default React.memo(Memo) 