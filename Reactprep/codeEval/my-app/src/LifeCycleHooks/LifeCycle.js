import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             bool:true
        }
        console.log("---Constrcutor-----")
    }

    static getDerivedStateFromProps(prop,state){
        //to update state when ur state prop depends on prop passed
        console.log("---getderivedStFrProps----")
        return null;
    }
    getSnapshotBeforeUpdate(){
        console.log("--get snapshot----")
        return null;
    }
    shouldComponentUpdate(nextprops, nextstate){
        console.log("--in shouldmountupdate----")
        return true
    }
    componentDidMount(){
        console.log("---mounted-----")
        //api cxalls  
    }
    componentDidUpdate(prevProp,prevState,snapshot){
       
        console.log("----comdidupdate----")
    }
    handleClick=()=>{
        this.setState({
            bool: !this.state.bool
        })
    }
    render() {
        console.log("----render method-------")
        return (
            <div>
              LifeCycle  
              <button onClick={this.handleClick}>Toggle</button>
            </div>
        )
    }
}
export default LifeCycle