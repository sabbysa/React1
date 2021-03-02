import React, { Component } from 'react'
class Bind extends Component {
constructor(props) {
    super(props)

    this.state = {
         message: 'Hello'
    }
    // this.clickHandler = this.clickHandler.bind(this)
}

clickHandler(){
this.setState({
    message:'Goodbye'
})
}


// clickHandler=()=>{
//     this.setState({
// message:'Goodbye'
// })
// }
    render() {
        return (
            <div> {this.state.message}
             {/* bind type 1 */}
                {/* <button onClick= {this.clickHandler.bind(this)}>Click</button> */}

                    {/* bind type 2 */}
                     <button onClick= {()=>{this.clickHandler() }}>Click</button>

                     {/* bind type 3 & 4 */}
                     {/* <button onClick={this.clickHandler}>Click</button> */}


            </div>
        )
    }
}

export default Bind
