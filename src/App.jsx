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
import Spirulina from './pages/productPage/Spirulina'
import BlueSpirulinaPage from './pages/productPage/BlueSpirulinaPage'
import ChlorellaPage from './pages/productPage/ChlorellaPage'
import PhycocyaninPage from './pages/productPage/PhycocyaninPage'
import Animalfeed from './pages/productPage/Animalfeed'
import ScrollToTop from './utils/ScrollToTop'
// import HeroSection2 from './components/HeroSection2'

function App() {
  

  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/blog/:slug" element={<BlogDetail/>}/>
        <Route path="/quality" element={<Quality/>}/>
        <Route path="/products/spirulina" element={<Spirulina/>}/>
        <Route path="/products/blue-spirulina" element={<BlueSpirulinaPage/>}/>
        <Route path="/products/chlorella" element={<ChlorellaPage/>}/>
        <Route path="/products/phycocyanin" element={<PhycocyaninPage/>}/>
        <Route path="/products/animal-feed" element={<Animalfeed/>}/>
        
        


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
