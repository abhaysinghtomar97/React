import React from 'react'

function Card(props) {
    
    return (
        <div className="card  rounded">
            <img src={props.url} height="250" width="300" alt="Card Image"></img>
            <h2>{props.id+1}</h2>
            <p>Author: {props.auth}</p>
            <button>Read More</button>
        </div>
    )

}

export default Card