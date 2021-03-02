// import React from 'react'
// const  Greet = ({name}) =>{
//     return (
//         <div>
//             <h1>Hello {name}</h1>
//         </div>
//     )
// }
// export default Greet





import React, { Component } from 'react'

class  Greet extends Component {
    render() {
        // destructuring
        //const {name, hero} = this.props
        return (
            <div>
                 <h1> Welcome {this.props.name} </h1>
                {/* destruting code
                <h1> Welcome {name} {hero}</h1> */}
            </div>
        )
    }
}


export default Greet
