import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        console.log("opurecomp")
        return (
            <div>
              Pure comp  {this.props.name}
            </div>
        )
    }
}
export default PureComp