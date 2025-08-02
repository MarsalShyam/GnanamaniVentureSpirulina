import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/About'
import QualitySection from './components/QualitySection'
import CertificationsSection from './components/CertificationsSection'
import ProductShowcaseSection from './components/ProductShowcaseSection'
import DifferenceSection from './components/DifferenceSection'
import NewsSection from './components/NewsSection'
import FooterSection from './components/FooterSection'

function App() {
  

  return (
    <>
     
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <QualitySection/>
      <CertificationsSection/>
      <ProductShowcaseSection/>
      <DifferenceSection/>
      <NewsSection/>
      <FooterSection/>
      {/* <div className="text-center text-2xl text-[var(--primary-green)] py-12">
        (Next Sections Will Be Built Here...)
      </div> */}
    

    </>
  )
}

export default App
