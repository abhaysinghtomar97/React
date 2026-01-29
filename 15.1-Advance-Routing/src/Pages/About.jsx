import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navi2 from './Navi2'

const About=()=>{
    

    return (
        <div >
            <Navi2 />
            <h1 className='absolute bottom-[50%]  left-[30%] text-2xl underline font-bold'>About Page</h1>
            
        </div>
    )
}

export default About