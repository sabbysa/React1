import React, { Component } from 'react'
import ChildComp from './ChildComp'
class ParentToChild extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
         count:0    
        }
    }
    handleClick=()=>{
this.setState({
    count:this.state.count+1,
})
    }
    render() {
        return (
            <div>
                <h2>Parent Comp</h2>
                <h2>{this.state.count}</h2>
                {/* <button onClick={this.handleClick}>Click</button> */}
                <ChildComp count={this.state.count} updateFunc={this.handleClick}></ChildComp>
            </div>
        )
    }
}
export default ParentToChild