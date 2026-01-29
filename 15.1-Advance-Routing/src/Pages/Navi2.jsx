import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navi2=()=>{

    let navigate= useNavigate()
    
    return(
        <div className='flex gap-5'> 
            <button 
            onClick={()=>{navigate('/')}}
            className='font-medium bg-amber-600 cursor-pointer px-5 py-2 rounded active:scale-95'
            >Return to Home Page</button>

            <button
            onClick={()=>{navigate(-1)}}
             className='font-medium bg-amber-600 cursor-pointer px-5 py-2 rounded active:scale-95'
             >Back</button>
             
            <button
            onClick={()=>{navigate(+1)}}
             className='font-medium bg-amber-600 cursor-pointer px-5 py-2 rounded active:scale-95'
             >Next</button>

        </div>
    )
}

export default Navi2