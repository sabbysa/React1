import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'
import Memo from './Memo'
class ParentClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"js"
        }
    }
    componentDidMount(){
        setInterval(()=>this.setState({
            name:"js"
        }), 5000)
    }
    
    render() {
        console.log("---parent comp-----")
        return (
            <div>
                <PureComp name={this.state.name}></PureComp>
                <RegularComp name={this.state.name}></RegularComp>
                <Memo name = {this.props.name}></Memo>
            </div>
        )
    }
}
export default ParentClass