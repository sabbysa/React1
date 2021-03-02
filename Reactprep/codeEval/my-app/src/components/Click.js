// import React from 'react'

// function Click() {
//     function clickHandler(){
//         console.log('Button clicked')
//     }
//     return (
//         <div>
//             <button onClick= {clickHandler}>Click</button>
//         </div>
//     )
// }

// export default Click

import React, { Component } from 'react'

export class Click extends Component {
    clickHandler(){
        console.log("clicked")
    }
    render() {
        return (
            <div>
               <button onClick = {this.clickHandler}>Click Me</button> 
            </div>
        )
    }
}

export default Click




