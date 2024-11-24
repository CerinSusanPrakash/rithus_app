import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Viewprod from './components/Viewprod'
import Productpage from './components/Productpage'
import Aboutus from './components/Aboutus'
import Footer from './components/Footer'
import Adminlogin from './components/Adminlogin'
import Adminhome from './components/Adminhome'
import Dressimage from './components/Dressimage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Dressimage/> */}
      Hello
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Viewprod/>}></Route>
        <Route path='/buyproduct' element={<Productpage/>}></Route>
        <Route path='/aboutus' element={<Aboutus/>}></Route>
        <Route path='/admin' element={<Adminlogin/>}></Route>
        <Route path='/adminhome' element={<Adminhome/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
