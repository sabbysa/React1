import React from 'react'
import {useState, useEffect, useRef, useMemo, useCallback} from 'react'


function ReactHooks() {
    const [count, setCount]= useState(0)
    useEffect(()=>{
        document.title=count
        return ()=>console.log("cleared")
    },[count])



    let x = 5
    const fact = useMemo(()=>factorial(x), [x])
    
    console.log(fact)
const fact2 = useCallback(() => factorial(x),[x])

console.log(fact2)
    //useref
const inputRef = useRef()

const handleClick=()=>{
    console.log(inputRef)
    inputRef.current.focus()
}

const showDetails=()=>{
  console.log(inputRef.current.value)
}

return (
        <div>
            <input type="text" ref={inputRef}></input>
            <button onClick={()=>handleClick()}>Focus</button>
            <button onClick={()=>showDetails()}>Show value</button>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
    )
}
function factorial(x){
    if(x == 1){
        console.log("factorial called")
        return 1
    }
    else{
        return x * factorial(x-1)
    }
}


export default  ReactHooks