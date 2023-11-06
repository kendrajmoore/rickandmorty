import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

import './App.css'

function App() {


  return (
    <>
     <Header/>
     <Outlet />
     <Footer/>
    </>
  )
}

export default App