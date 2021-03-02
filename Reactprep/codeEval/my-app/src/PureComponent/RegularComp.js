import React, { Component } from 'react'
 class RegularComp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }
     
    render() {
        console.log("regcomp")
        return (
            <div>
                regular comp {this.props.name}
            </div>
        )
    }
}

export default RegularComp