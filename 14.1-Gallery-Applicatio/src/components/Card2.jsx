import React from 'react'

function Card(props) {
   
    return (
        <div className="hover:scale-105  card bg-gray-600  w-48 rounded">
            <img src={props.url}  className='min-h-40 max-h-40 w-50'  alt="Card Image"></img>
            <div className="px-4 relative p-2 h-30 mb-3">
                
                <p  className=' font-bold text-lg' >Author: {props.author}</p>
                <button className='absolute  bottom-0.5 right-1 left-0.5 active:scale-95 bg-amber-600 px-4 py-1 rounded flex justify-center m-2 w-11/12'>Read More</button>
            </div>
        </div>

    )

}

export default Card