import React from 'react'
import {useParams} from 'react-router-dom'

const CourseDetails=()=>{
    const params = useParams()
    console.log(params)
    return(
        <div>
            <Navi2 />
            <h1 className='absolute bottom-[50%]  left-[20%] text-2xl underline font-bold'>{params.courseId} Details Page</h1>
        </div>
    )
}

export default CourseDetails