import React from 'react'
import Fun2 from './Fun2'
import ErrorHandler from './ErrorHandler'
function fun1() {
    return (
        <div>
          <ErrorHandler> <Fun2 name={" @Java"}></Fun2></ErrorHandler> 
          <Fun2 name={"C++"}></Fun2>
            {/* gives error
            <Fun2 name={"Java@"}></Fun2>  */}

        </div>
    )
}
export default  fun1