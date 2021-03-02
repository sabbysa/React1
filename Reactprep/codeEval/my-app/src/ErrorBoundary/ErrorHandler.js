import React, { PureComponent } from 'react'

class ErrorHandler extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
             flag:false
        }
    }
    static getDerivedStateFromError(error){
        return{
            flag: true
        }
    }
    componentDidCatch(error){
        console.log(error)
    }
    render() {
        if(this.state.flag){
            return(
                   <p>Somenthing wrong</p>
            )
            } else
        return ( <> 
                {this.props.children}
            </>
        )}      
    } 
export default ErrorHandler