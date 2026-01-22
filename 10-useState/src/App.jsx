import React, {useState} from 'react'

const App=()=>{
  const [num, setnum] = useState(0)


  function increase(){
    setnum(num+1)
  }

  function decrease(){
    setnum(num-1)
  }
  function reset(){
    setnum(num-num)
  }

  console.log(10)
  return(
    <div>
    <h1>Digital Counter</h1>
    
    <div className="container">
      <h1 className="main">{num}</h1>
      <div className="btns">
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Descrease</button>
      <button onClick={reset}>Reset</button>
      </div>
    </div>
    </div>
  )
}


export default App