import React from 'react'

const formHandler=(e)=>{
  e.preventDefault()
  console.log("submitted")

}

const App=(e)=>{
 return (
  <div>
    <form onSubmit={(e)=>{
      formHandler(e)
    }}>
      <input type="text" />
      <button>Submit</button>
    </form>
  </div>
 )
}

export default App;