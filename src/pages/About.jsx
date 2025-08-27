import { useState } from 'react';
import { FaBullseye, FaLightbulb, FaMicroscope, FaLeaf, FaGlobe, FaAward, FaUserFriends, FaChartLine } from 'react-icons/fa';
import hero1 from '../assets/Images/About/abouthero.webp'
import vision from '../assets/Images/About/vision.jpg'
import mission from '../assets/Images/About/mission.jpg'
import mainHero from '../assets/Images/About/heroabout3.webp'
import heroImg from '../assets/Images/About/heroimg2.webp'
import researchBg from '../assets/Images/About/abouthero.webp'

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  // Team members data
  const teamMembers = [
    { id: 1, name: 'Rajesh Kumar', role: 'Founder & CEO', bio: '20+ years in biotechnology with a passion for sustainable nutrition solutions.' },
    { id: 2, name: 'Priya Sharma', role: 'Head of R&D', bio: 'PhD in Microbiology, specializes in algae cultivation and nutrient optimization.' },
    { id: 3, name: 'Vikram Patel', role: 'Production Manager', bio: 'Expert in GMP-certified manufacturing with focus on quality assurance.' },
    { id: 4, name: 'Ananya Singh', role: 'Sustainability Officer', bio: 'Dedicated to implementing eco-friendly practices across our operations.' }
  ];

  return (
    <main className="w-full bg-gradient-to-b from-[#f0f8f0] to-[#e0f0e0] text-gray-800 overflow-hidden">

      {/* Hero Section with Parallax Effect */}
      <section className="relative w-full py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-green-900/10 z-0">
          <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
    style={{ backgroundImage: `url(${mainHero})` }}
  ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/5 to-green-900/20"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--primary-green)] leading-tight mb-4">
                <span className="block text-2xl md:text-3xl font-medium text-green-700 mb-2">About Us</span>
                Leading Organic Spirulina Manufacturer
              </h1>
              <p className="mt-4 text-gray-700 md:text-lg max-w-3xl mx-auto md:mx-0">
                At Spirulife, we specialize in cultivating, processing, and delivering premium Spirulina in powder, tablet, and capsule forms.
                With our advanced microalgae technology and sustainable practices, we ensure top-notch quality that meets global standards.
              </p>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-green-100 flex flex-col items-center">
                  <FaLeaf className="text-green-600 text-2xl mb-2" />
                  <span className="font-bold text-green-800">100%</span>
                  <span className="text-sm text-gray-600">Organic</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-green-100 flex flex-col items-center">
                  <FaGlobe className="text-green-600 text-2xl mb-2" />
                  <span className="font-bold text-green-800">50+</span>
                  <span className="text-sm text-gray-600">Countries</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-green-100 flex flex-col items-center">
                  <FaAward className="text-green-600 text-2xl mb-2" />
                  <span className="font-bold text-green-800">12</span>
                  <span className="text-sm text-gray-600">Certifications</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-green-100 flex flex-col items-center">
                  <FaChartLine className="text-green-600 text-2xl mb-2" />
                  <span className="font-bold text-green-800">98%</span>
                  <span className="text-sm text-gray-600">Satisfaction</span>
                </div>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-green-800/10 border-2 border-green-300/30 rounded-xl w-full aspect-square max-w-md overflow-hidden transform rotate-3">
                  <div 
  className="absolute inset-0 bg-cover bg-center scale-110" 
  style={{ backgroundImage: `url(${heroImg})` }}
></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-green-900/0 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* <div className="flex-1 bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center bg-green-600 text-white p-3 rounded-full mb-6">
                <FaBullseye className="text-xl" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                To promote health and wellness globally by providing the highest quality Spirulina products through sustainable and innovative cultivation practices.
              </p>
              <ul className="space-y-2 mt-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Empower communities with accessible superfood nutrition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Develop innovative cultivation techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Set industry standards for purity and quality</span>
                </li>
              </ul>
            </div> */}

            <div
              className="flex-1 p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              style={{
                backgroundImage: `url(${vision})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-green-50/80 "></div>
              <div className="relative z-10"> {/* Content */}
                <div className="inline-flex items-center justify-center bg-green-600 text-white p-3 rounded-full mb-6">
                  <FaBullseye className="text-xl" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h2>
                <p className="text-gray-800 mb-4">
                  To promote health and wellness globally by providing the highest quality Spirulina products through sustainable and innovative cultivation practices.
                </p>
                <ul className="space-y-2 mt-6">
                  {/* list items */}
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Empower communities with accessible superfood nutrition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Develop innovative cultivation techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Set industry standards for purity and quality</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="flex-1 bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center bg-green-600 text-white p-3 rounded-full mb-6">
                <FaLightbulb className="text-xl" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h2>
              <p className="text-gray-600 mb-4">
                To be the world's leading microalgae-based nutritional company, fostering a healthier and greener planet through sustainable biotechnology.
              </p>
              <ul className="space-y-2 mt-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Pioneer carbon-negative food production</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Establish global nutritional security</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Inspire sustainable industry practices</span>
                </li>
              </ul>
            </div> */}
            {/* our vision */}
<div
              className="flex-1 p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              style={{
                backgroundImage: `url(${mission})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-green-50/80 backdrop-blur-[0px]"></div>
              <div className="relative z-10"> {/* Content */}
                <div className="inline-flex items-center justify-center bg-green-600 text-white p-3 rounded-full mb-6">
                  <FaLightbulb className="text-xl" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h2>
                <p className="text-gray-800 mb-4">
                  To be the world's leading microalgae-based nutritional company, fostering a healthier and greener planet through sustainable biotechnology.
                </p>
                <ul className="space-y-2 mt-6">
                  {/* list items */}
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Pioneer carbon-negative food production</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Establish global nutritional security</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Inspire sustainable industry practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History & Milestones */}
      <section className="w-full py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">From a small research initiative to a global leader in Spirulina production</p>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>

            <div className="space-y-12">
              {/* Milestone 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="inline-block bg-white p-6 rounded-xl shadow-md border border-green-100">
                    <h3 className="text-xl font-bold text-green-700 mb-2">2010</h3>
                    <h4 className="text-lg font-semibold mb-2">Foundation</h4>
                    <p className="text-gray-600">Established our first research facility in Chennai with a vision to revolutionize Spirulina production</p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-start">
                  <div className="w-6 h-6 rounded-full bg-green-500 border-4 border-white shadow-md"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0"></div>
              </div>

              {/* Milestone 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0"></div>
                <div className="md:w-1/2 flex justify-center md:justify-end">
                  <div className="w-6 h-6 rounded-full bg-green-500 border-4 border-white shadow-md"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
                  <div className="inline-block bg-white p-6 rounded-xl shadow-md border border-green-100">
                    <h3 className="text-xl font-bold text-green-700 mb-2">2014</h3>
                    <h4 className="text-lg font-semibold mb-2">First Export</h4>
                    <p className="text-gray-600">Expanded internationally with our first export to Japan, marking our global presence</p>
                  </div>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="inline-block bg-white p-6 rounded-xl shadow-md border border-green-100">
                    <h3 className="text-xl font-bold text-green-700 mb-2">2018</h3>
                    <h4 className="text-lg font-semibold mb-2">Sustainability Award</h4>
                    <p className="text-gray-600">Received Global Sustainability Award for our eco-friendly production methods</p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-start">
                  <div className="w-6 h-6 rounded-full bg-green-500 border-4 border-white shadow-md"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0"></div>
              </div>

              {/* Milestone 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0"></div>
                <div className="md:w-1/2 flex justify-center md:justify-end">
                  <div className="w-6 h-6 rounded-full bg-green-500 border-4 border-white shadow-md"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
                  <div className="inline-block bg-white p-6 rounded-xl shadow-md border border-green-100">
                    <h3 className="text-xl font-bold text-green-700 mb-2">2023</h3>
                    <h4 className="text-lg font-semibold mb-2">Expansion</h4>
                    <p className="text-gray-600">Opened our third production facility with fully automated processing capabilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Passionate experts driving innovation in Spirulina production</p>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              // <div key={member.id} className="bg-gradient-to-b from-white to-green-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              //   <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-60" />
              //   <div className="p-6">
              //     <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              //     <p className="text-green-600 font-medium mb-3">{member.role}</p>
              //     <p className="text-gray-600">{member.bio}</p>
              //   </div>
              // </div>
              <div 
  key={member.id} 
  className="bg-gradient-to-b from-white to-green-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100"
>
  <div 
    className="w-full h-60 bg-cover bg-center rounded-t-xl"
    style={{ backgroundImage: `url(${hero1})` }}
  ></div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
    <p className="text-green-600 font-medium mb-3">{member.role}</p>
    <p className="text-gray-600">{member.bio}</p>
  </div>
</div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Development Section */}
      {/* <section className="w-full py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-br from-green-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center justify-center bg-white/20 text-white p-4 rounded-full mb-6">
                <FaMicroscope className="text-2xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Innovation & Research</h2>
              <p className="text-green-100 md:text-lg mb-8 max-w-3xl">
                Our dedicated R&D team continuously works on enhancing cultivation techniques, nutrient preservation,
                and developing innovative products to meet global health standards. We integrate advanced technology
                with eco-friendly practices to maximize nutritional value while minimizing environmental impact.
              </p>

              <div className="grid grid-cols-2 gap-6 max-w-2xl">
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <h3 className="font-bold text-lg mb-2">Advanced Cultivation</h3>
                  <p className="text-green-100 text-sm">Patented photobioreactor technology for optimal growth</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <h3 className="font-bold text-lg mb-2">Quality Assurance</h3>
                  <p className="text-green-100 text-sm">ISO-certified labs for continuous quality monitoring</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <h3 className="font-bold text-lg mb-2">Sustainability</h3>
                  <p className="text-green-100 text-sm">Closed-loop water systems and renewable energy</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <h3 className="font-bold text-lg mb-2">Product Innovation</h3>
                  <p className="text-green-100 text-sm">Developing new Spirulina-based nutritional solutions</p>
                </div>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="aspect-video bg-gradient-to-r from-emerald-700 to-green-800 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="inline-flex items-center justify-center bg-white/20 text-white p-6 rounded-full mb-6">
                        <FaMicroscope className="text-4xl" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Our Research Facilities</h3>
                      <p className="text-green-100 max-w-md mx-auto">
                        State-of-the-art laboratories with cutting-edge equipment for microalgae research and development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section
      className="w-full py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 text-green-400 relative overflow-hidden"
      style={{ minHeight: '80vh' }}
    >
      {/* 🔮 Blurred Background with Local Image + Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${researchBg})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment:'scroll', // Optional: smooth scroll effect
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Soft blur layer */}
        {/* <div className="absolute inset-0 backdrop-blur-sm bg-black/1"></div> */}
      </div>

      {/* ✅ Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Side: Text & Features */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center justify-center bg-white/20 text-white p-4 rounded-full mb-6">
              <FaMicroscope className="text-2xl" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Innovation & Research
            </h2>

            <p className="text-green-100 font-bold md:text-lg leading-relaxed max-w-3xl">
              Our dedicated R&D team continuously works on enhancing cultivation techniques, nutrient preservation, 
              and developing innovative products to meet global health standards. We integrate advanced technology 
              with eco-friendly practices to maximize nutritional value while minimizing environmental impact.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/15 transition">
                <h3 className="font-bold text-lg mb-2">Advanced Cultivation</h3>
                <p className="text-green-100 text-sm">
                  Patented photobioreactor technology for optimal growth
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/15 transition">
                <h3 className="font-bold text-lg mb-2">Quality Assurance</h3>
                <p className="text-green-100 text-sm">
                  ISO-certified labs for continuous quality monitoring
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/15 transition">
                <h3 className="font-bold text-lg mb-2">Sustainability</h3>
                <p className="text-green-100 text-sm">
                  Closed-loop water systems and renewable energy
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/15 transition">
                <h3 className="font-bold text-lg mb-2">Product Innovation</h3>
                <p className="text-green-100 text-sm">
                  Developing new Spirulina-based nutritional solutions
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Research Card */}
          <div className="flex-1 flex justify-center mt-8 md:mt-0">
            <div className="relative w-full max-w-lg">
              <div className="aspect-video bg-gradient-to-r from-emerald-700 to-green-700 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center bg-white/20 text-white p-6 rounded-full">
                    <FaMicroscope className="text-4xl" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Research Facilities</h3>
                  <p className="text-green-100 max-w-md mx-auto">
                    State-of-the-art laboratories with cutting-edge equipment for microalgae research and development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* Floating Buttons */}
      <div className="fixed right-4 bottom-6 md:bottom-8 z-50 flex flex-col space-y-3">
        <a
          href="#enquiry-form"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-5 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
        >
          <span className="mr-2">📝</span> Enquiry Form
        </a>
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-5 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
        >
          <span className="mr-2">💬</span> WhatsApp Us
        </a>
      </div>
    </main>
  );
}