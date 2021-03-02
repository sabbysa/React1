import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            list:[],
             
        }
        this.text= ''
       this.inputRef =  React.createRef()
    }
    handleChange=(e)=>{

    this.text= e.target.value

    }
    handleClick=()=>{
this.setState({
 list:[...this.state.list,this.text]
})
    }
handleDelete=(index)=>{

    const newList = this.state.list.filter((val,ind)=>ind !==index)
    console.log(newList)
    // this.state({
    //     list:newList
    // })
}
handleUpdate = () =>{

}

componentDidMount(){
    this.inputRef.current.focus()
}
    
    render() {
        console.log(this.state.list )
        return (
            <div>
           <input type="text" ref={this.inputRef} onChange={this.handleChange}></input>
           {/* <h2>{this.state.name}</h2> */}
           <button onClick={this.handleClick}>Submit</button>
           {this.state.list.map((value,ind)=><h2 key={ind}>{value}
           <button onClick={()=>this.handleDelete(ind)}>Delete</button></h2>)}
           <button onClick={()=>this.handleUpdate}>Update</button>
           </div>
        )
    }
}
