import React from 'react'

const App=()=>{

  const handle=()=>{
    alert('button clicked')


  }

  const Com=(props)=>{
    return (<h1 className="hi">hello, {props.name} </h1>)
  }


  return (

    <div>
      <button >click</button>
      <Com  name="laxmi"/>
      <Com name="abhay"/>
      
    </div>
  )
}









export default App
