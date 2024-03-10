import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home.jsx'
import Navbar from './Components/navbar/Navbar.jsx'
import About from './pages/about/About.jsx'
import User from './pages/dashboard/user.jsx'
import Login from './pages/login/Login.jsx'
import Signup from './pages/Sign/Signup.jsx'
import BlogDetails from './pages/blogdetails/BlogDetails.jsx'


function App() {


  return(
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/dashboard' element={<User />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/sign-up' element={<Signup />}/>
          <Route path='/blogdetails/:id' element={<BlogDetails />}/>
        </Routes>
      </BrowserRouter>
  )
}  


export default App
