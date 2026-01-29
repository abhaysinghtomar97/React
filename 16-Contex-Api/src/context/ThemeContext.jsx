import React from 'react'
import {createContext} from 'react'
import {useState} from 'react'

export const ThemeContextData = createContext()

const ThemeContext=(props)=>{
    
    const [theme, setTheme]=useState('light')
    
    return(
        <ThemeContextData.Provider  value={[theme,setTheme]}>
            {props.children}
        </ThemeContextData.Provider>
    )
}

export default ThemeContext