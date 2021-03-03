import React, { Component } from 'react'
import axios from 'axios'

class ShowSearch extends Component {
    constructor() {
        super()
    
        this.state = {
            name: '',
            data:[] 
        }
    }

           
    handleChange = e =>{
                this.setState({name:e.target.value})  
            }
         
    handleSubmit= e=>{
          e.preventDefault()
    axios.get(`http://api.tvmaze.com/search/shows?q=${this.state.name}`)
          .then(res=>{
              this.setState({
 //   console.log(res)
 data:res.data
 //   console.log(res.data)
              })
            })}
        
    render() {
        return (
            <div>
          <form>
              <label> Shows List
                  <input type="text" name="name" onChange={this.handleChange}/>
              </label>
              <button type="submit" onClick={this.handleSubmit}>Submit</button>
          </form>

          <>
              {this.state.data.map((i)=>            
              <li key={i.id}>{i.show.name}</li>

              )}
          </>
                              
            </div>
        )
        }
            
}
export default ShowSearch