import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Contact from './components/Contact/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Intro />} />
          <Route exact path='/contact' element={<Contact />} />

        </Routes>

      </BrowserRouter>
      {/* <Navbar />
      <Intro /> */}

    </>
  )
}

export default App
