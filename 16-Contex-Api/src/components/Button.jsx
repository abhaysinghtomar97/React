import React from 'react'
import {useContext} from 'react'
import {ThemeContextData} from '../context/ThemeContext'

const Button=()=>{
    const [theme,setTheme] = useContext(ThemeContextData)


    function btnClicked(){
     theme =='light' ? setTheme('dark') : setTheme('light')
    
   }
    return (    
        <div className='btn'>
           <button
           onClick={btnClicked}
           >Change Theme</button>
        </div>
    )
}

export default Button