import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Courses from './Pages/Cources'
import CourseDetails from './Pages/CourseDetails'
import NotFound from './Pages/NotFound'


// import Navbar from './components/Navbar'

const App = () => {


  return (
    <div className='bg-black min-h-screen flex flex-col text-white'>
      <div className='bg-cyan-800 flex justify-center gap-5 h-8 text-white text-lg '>
      

        <Link to='/' >Home</Link>
        <Link to='/About' >About</Link>
        <Link to='/Product' >Product</Link>
        <Link to='/Courses' >Courses</Link>

      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} >
          <Route path="men" element={<Men/>} />
          <Route path="Women" element={<Women/>} />
        </Route>
        
        <Route path='/Courses' element={<Courses />} />
        <Route path='/Courses/:courseId' element={<CourseDetails />} />
        <Route path='*' element={<NotFound />} />
        
      </Routes>

      <div className='bg-cyan-700 absolute bottom-0 w-full flex justify-center text-sm'>
        FOOTER
      </div>

        </div>
        )
}


        export default App