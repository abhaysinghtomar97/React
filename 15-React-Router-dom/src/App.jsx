import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'

const App=()=>{
  return (
    <div>
      <div className="nav">
        
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/product'>Product</Link>
        
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
