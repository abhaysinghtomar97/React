import React from 'react'
import Card from './components/Card'




const App=()=>{
    return (
        <div >
            <Card  user="Abhay" age={20} img="https://gimgs2.nohat.cc/thumb/f/640/flat-person-icon-download-dummy-man--m2i8d3i8N4d3N4K9.jpg"/>
            <Card  user="Aman" age={19} img="https://kkmcollege.ac.in/web/public/user/assets/img/mentors/dummy.png"/>
            <Card  user="Laxmi" age={20} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjXROTa9_-4k-o2MkZEPuTtx6vBTFmyuWBPg&s"/>
        </div>
    )
}

export default App