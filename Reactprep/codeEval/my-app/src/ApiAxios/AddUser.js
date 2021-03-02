import React, { Component } from 'react'
import axios from 'axios'
class AddUser  extends Component {
    state={
        //    name: ''
        id:0,
            }
            handleChange = e =>{
                // this.setState({name:e.target.value})
                this.setState({id:e.target.value})
            }
      handleSubmit= e=>{
          e.preventDefault()
        //   
        //   axios.post(`https://jsonplaceholder.typicode.com/users`, {user})
        //   .then(res=>{
        //       console.log(res)
        //       console.log(res.data)
        //   })
        //   axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`, {user})
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
         .then(res=>{
              console.log(res)
              console.log(res.data)
          })
      }
    render() {
        return (
            <div>
          <form onSubmit={this.handleSubmit}>
          <label> Person Id:
                  <input type="number" name="id" onChange={this.handleChange}/>
              </label>
              <button type="submit">delete</button>
              {/* <label>Person Name:
                  <input type="text" name="name" onChange={this.handleChange}/>
              </label>
              <button type="submit">Submit</button> */}
          </form>

            </div>
        )
    }
}
export default AddUser
