import React from 'react'
import {useState} from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'

function App() {
 
  const [theme, settheme] = useState('light')
  
   
  return (
    <div>
      <Navbar  theme={theme}>
        <p>1st</p>
        <p>This is 2nd Nav bar</p>
      </Navbar>
      <Button/>
    </div>
  )
}

export default App
