import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/About'
import ProductShowcaseSection from '../components/ProductShowcaseSection'
import QualitySection from '../components/QualitySection'
import CertificationsSection from '../components/CertificationsSection'
import DifferenceSection from '../components/DifferenceSection'
import NewsSection from '../components/NewsSection'

const HomePage = () => {
  return (
    <div>
    <HeroSection id="home"/>
    <AboutSection id="about"/>
    <ProductShowcaseSection id="products"/>
    <QualitySection id="quality"/>
    <CertificationsSection id="certifications"/>
    <DifferenceSection id="difference"/>
    <NewsSection id="news"/>
    </div>
  )
}

export default HomePage
