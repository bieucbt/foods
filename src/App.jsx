import React, { useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import StoreContextProvider from './context/storeContext'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Mozar from './components/Mozar'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'



const App = () => {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
     window.addEventListener('scroll', handleScroll)
     return () => {
      window.removeEventListener('scroll', handleScroll)
     }
  }, [])

  return (
    <BrowserRouter>
      <StoreContextProvider>
        <Mozar  setScrollY={setScrollY} />
        <main className='w-full h-full bg-white'>
          <div className='relative max-w-[1280px] mx-auto px-10
          max-md:px-5'>
            <Header scrollY={scrollY} />
            <Routes>
              <Route path='/foods' element={<Home />} />
              {/* <Route path='/cart' element={<Cart />} /> */}
              <Route path='/checkout' element={<CheckOut />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </StoreContextProvider>
    </BrowserRouter>
  )
}

export default App
