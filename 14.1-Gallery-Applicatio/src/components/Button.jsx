import React from 'react'

function Button(props) {
    return (
        <button
            disabled={props.disable}
            onClick={props.onClick}
           className={`
        px-4 py-2 rounded
        ${props.disable 
          ? 'bg-gray-600 cursor-not-allowed opacity-50' 
          : 'bg-amber-400 text-black hover:bg-amber-700'}
      `}            >
            {props.text}
        </button>
    )
}


export default Button