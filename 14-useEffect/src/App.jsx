import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'

const App=()=>{

  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(0)

  useEffect(()=>{
    console.log("Num is running")
  },[num2])

  return (
    <div>
      <h1>num is: {num}</h1>
      <h1>num2 is: {num2}</h1>
      <button onClick={()=>{
        setnum(num+1)
        
      }}>Click</button>
      <button onClick={()=>{
        
        setnum2(num2-1)
      }}>Click 2</button>
    </div>
  )
}


export default App