import React, { Component } from 'react'
import axios from 'axios'
class ShowSearch extends Component {
    state={
           name: '',
           data:[]
            }
           
            handleChange = e =>{
                this.setState({name:e.target.value})
                
            }
         
      handleSubmit= e=>{
          e.preventDefault()
          
          axios.get(`http://api.tvmaze.com/search/shows?q=${this.state.name}`)

          .then(res=>{
              console.log(res)
              console.log(res.data)
          })
          }
          
    render() {
        
      

        return (
            <div>
          <form onSubmit={this.handleSubmit}>
              <label>Show:
                  <input type="text" name="name" onChange={this.handleChange}/>
              </label>
              <button type="submit">Submit</button>
          </form>
                   <h1> {this.state.data.map(item=>(
                            <li key={item.id}>
                            {item.name}
                            </li>
                        ))}</h1>    
            
            </div>
        )
        }
            
}
export default ShowSearch