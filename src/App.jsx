import React from 'react'
import Header from './Header'
import Home from './Home'
import Menu from './Menu'
import About from './About'
import Service from './Service'
import ContactUs from './ContactUs'
import Footer from './Footer'
import './index.css'
import { useEffect } from 'react'

const App = () => {

    console.log(window.scrollY)

  return (
    <>
        <Header/>
        <Home/>
        <Menu/>
        <Service/>
        <ContactUs/>
        <About/>
        <Footer/>
    </>
  )
}

export default App
