import React, { Component } from 'react'

class Count extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
   handleClick(){
        this.setState({
            count:this.state.count+1
        
    })}
// with prevState update a state based on prev state value
//     handleClick(){
//         this.setState((prevState)=>({
//             count:prevState.count+1
//         }))
//         console.log(this.state.count)
//     }
    render() {
        return (
            <div>
                           <h2> Count : {this.state.count}</h2>
               <button onClick= {this.handleClick.bind(this)}>Click</button>
            
            </div>
        ) 
    }
}
export default Count