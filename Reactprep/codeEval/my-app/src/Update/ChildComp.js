import React, { Component } from 'react'

class ChildComp extends Component {
    constructor(props) {
        super(props)
    
      
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>Child Comp</h2>
               <h2>{this.props.count}</h2> 
               <button onClick={()=>this.props.updateFunc()}>update</button>
            </div>
        )
    }
}
export default ChildComp