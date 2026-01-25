import React,{useState} from 'react'
import axios from 'axios'
import Card from './components/Card2'

const App=()=>{
  const [photo, setPhoto] = useState([])

  async function getData(){
    // const res = await fetch('https://jsonplaceholder.typicode.com/todos/2')
    // const res2=await res.json()
    // console.log(res2)
    
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
    // console.log(response.data)
    setPhoto(response.data)

  }

  return <div className="container">
    {
      photo.map((elem,idx)=>{
       
        return <Card id={idx} h={elem.height} w={elem.width} auth={elem.author} url={elem.download_url}/>
      
      })
    }
    
    <button onClick={getData}>Get Data</button>
  </div>

}

export default App