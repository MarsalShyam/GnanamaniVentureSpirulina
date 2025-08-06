import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

import FooterSection from './components/FooterSection'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Products from './pages/Products'
import ContactUs from './pages/ContactUs'
import BlogPage from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Quality from './pages/Quality'
// import HeroSection2 from './components/HeroSection2'

function App() {
  

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/blog/:slug" element={<BlogDetail/>}/>
        <Route path="/quality" element={<Quality/>}/>

      </Routes>
      <FooterSection/>
    </Router>
    // <>
     
    //   <Navbar />
      
    //   <FooterSection/>
    //   {/* <div className="text-center text-2xl text-[var(--primary-green)] py-12">
    //     (Next Sections Will Be Built Here...)
    //   </div> */}
    // </>
  )
}

export default App
