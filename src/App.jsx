import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

import './App.css'

function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <>
     <Header/>
      <Outlet context={{ favorites, setFavorites }}/>
       <Footer/>
    </>
  )
}

export default App
