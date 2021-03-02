import React, { Component } from 'react'

export default class ClassState extends Component {
    constructor(props) {
        super(props)
    
        this.state= {
            count:0
        }   
        this.list=[
            {name:"abi", id:1},
            {name:"hello", id:2},
            {name:"happy", id:3}
        ]
    }

    handleClick(){
        this.setState({
            count:this.state.count+1
        
    })
}
    render() {
        return (
            <div>
               <h2> Count : {this.state.count}</h2>
               <button onClick= {this.handleClick.bind(this)}>Click</button>
               {this.list.map((i)=><h2 key={i.id}>{i.name }</h2>)}
            </div>
        )
    
    }
}

