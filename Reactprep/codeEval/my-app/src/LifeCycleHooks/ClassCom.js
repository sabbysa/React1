import React, { Component } from 'react'

class ClassCom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count2:0
        }
        console.log("in constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("-----in getDerivedState-----")
        console.log(props,state)
if(props.count == 4){
    return {count2:state.count2+1}
}
    else{
        return null
    }
}
    
componentDidMount(){
    console.log("mounted")
}

componentWillReceiveProps(){
    console.log("new props")
}
    render() {
        console.log("----child render----")
        return (
            <div>
                <h2>Child Comp</h2>
                <h2>Count2:{this.state.count2}</h2>
            </div>
        )
    }
}
export default ClassCom