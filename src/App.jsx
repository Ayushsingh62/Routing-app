
import React from 'react'
import Home from './components/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './components/About'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Blogs from './components/Blogs'
import Login from './components/Login'
import Navbar from './components/Navbar'
import './App.css'
function App() {
  return (
    <>

<BrowserRouter>
<div className="container">

  
<Navbar/>

<Routes>
<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path='/menu' element={<Menu/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/blogs' element={<Blogs/>} />
<Route path='/login' element={<Login/>} />

</Routes>
</div>


</BrowserRouter>

    </>
  )
}

export default App