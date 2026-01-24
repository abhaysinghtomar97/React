import React from 'react'
import { X } from 'lucide-react'

function Note(props) {
    
    return (
        <div className="note p-3  w-45 min-h-50 max-h-max rounded bg-[url('./assets/notes_png.png')] bg-cover bg-">
            <div className='flex flex-row relative'>
                <h1 className=' text-shadow-gray-900 ml-4 font-bold border-b absolute'>{props.title}</h1>
                <button
                    onClick={()=>props.deleteNote(props.id)}
                    className='absolute top-1 right-1 bg-red-400 rounded-3xl   '> 
                    <X size={15} color={'white'} />
                </button>
            </div>
            <p className='text-blue-800 font-serif mt-6 ml-4'>{props.details}</p>
        </div>
    )
}

export default Note