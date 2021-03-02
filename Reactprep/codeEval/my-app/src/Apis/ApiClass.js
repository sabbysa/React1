import React, { PureComponent } from 'react'

class ApiClass extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
            list:[] 
        }
        this.data=null;
    }
    handleClick=()=>{
       this.data= fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json())
        .then((data)=>this.setState({list:data}))
    //    .then((data)=>this.setState({list:this.state.list.concat(data)}))
    //    console.log(this.data)
       setTimeout(()=>console.log(this.data),1000)
    }

    handlePost=()=>{
        let data ={name:"JS", id:5}
fetch("https://jsonplaceholder.typicode.com/users",{
    method:'POST',
    header:{'Content-Type':'application/json'},
    body:JSON.stringify(data),
})
.then((res)=>res.json())
.then((revData)=>console.log(revData))

    }
    render() {
        return (
            <div>
        
                <button onClick={this.handleClick}>GetDAta</button>
                <button onClick={this.handlePost}>PostData</button>
                {this.state.list.map((user,index)=><h2 key={index}>{user.name}</h2>)}
            
            </div>
        )
    }
}
export default  ApiClass