import React from 'react'
import {useContext} from 'react'
import {ThemeContextData} from '../context/ThemeContext'

const Navbar=()=>{
    const [theme,setTheme] = useContext(ThemeContextData)
    
    return (    
        <div className={theme}>
            <p >Navbar</p>
            {/* {props.children[0]} */}
            <div className="links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">{theme}</a>
            </div>
        </div>
    )
}

export default Navbar