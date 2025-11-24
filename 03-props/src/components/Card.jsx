import React from 'react'

function Card(prop) {
    
    return (
        <div className="card">
            <img src={prop.img} alt="Card Image"></img>
            <h2>{prop.user} {prop.age}</h2>
            <p>This is a basic card built using only HTML and CSS.</p>
            <button>Read More</button>
        </div>
    )
}

export default Card;