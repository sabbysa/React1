import React from 'react'

function Child(props) {
    return (
        <div>
          {/* call parentmethod in child component 
           <button onClick ={props.greetHandler}>Greet Parent</button> */}

           {/* pass parameterm */}
        <button onClick = {()=> props.greetHandler('child')}>Greet Parent</button>


        </div>
    )
}


export default Child
