import REACT, { useState } from 'react'
import Card2 from './components/Card2'
import Button from './components/Button'
import axios from 'axios'
import { useEffect } from 'react'

const App = () => {

    const [UserData, setUserData] = useState([])
    const [index, setindex] = useState(1)
    


    async function getData() {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)
        
        setUserData(response.data)
    }


    useEffect(() => { 
        getData()

    }, [index])
    let PrintUserData = 'Loading...'
    
    if (UserData.length > 0) {
        PrintUserData = UserData.map((elem,idx) => {
            
            return (
               <Card2 id={idx} author={elem.author} url={elem.download_url}/> 
            )
        })

    }

    return(
        <div className="bg-black text-white min-h-screen flex flex-col">

      <div className="flex-1 flex flex-wrap gap-5 p-5 items-center justify-center">{PrintUserData}
        </div>

       <div className=" flex gap-5 justify-center items-center p-4">

      <Button text='prev' 
        disable={index==1}
        onClick={()=>{
            if(index>1){
            setindex(index-1)
            setUserData([])
            }}}/>

        {index}

        <Button text='next'  
        onClick={()=>{
            setindex(index+1)
            setUserData([])
        }}
        />
        
        </div>
        </div>
    )
}

export default App