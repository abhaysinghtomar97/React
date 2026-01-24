import React, {useState} from 'react'


const formHandler=(e)=>{
    e.preventDefault()
    
    
}


const App=()=>{
    const [title, setTitle] = useState('')

    return(
        <div>
            <form onSubmit={(e)=>{
                formHandler(e)
                console.log("form is Submitted by:",title)
                setTitle('')
            }}>
                <input 
                type="text" 
                value={title}
                onChange={(e)=>{
                    
                setTitle(e.target.value)
                    
                }} 
                placeholder="Enter your name: "
                />
                <button>Submit</button>
            </form>
        </div>
    )
}


export default App;