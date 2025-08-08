// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [productDropdown, setProductDropdown] = useState(false);

//   const navLinkClasses = "relative group inline-block text-lg font-semibold text-gray-800 transition";

//   const underlineEffect = "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--primary-green)] after:transition-all after:duration-300 group-hover:after:w-full";

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="w-full bg-white fixed top-0 left-0 shadow-md z-50">
//         <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
//           <Link to="/" className="text-3xl font-bold text-[var(--primary-green)]">SpiruLife</Link>

//           <div className="hidden md:flex space-x-8 items-center">
//             <Link to="/" className={`${navLinkClasses} ${underlineEffect}`}>Home</Link>
//             <Link to="/about" className={`${navLinkClasses} ${underlineEffect}`}>About Us</Link>
//             <div className="relative group cursor-pointer">
//               <span className={`${navLinkClasses} ${underlineEffect}`}>Our Products</span>
//               <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
//                 {['Spirulina', 'Blue Spirulina', 'Chlorella', 'Phycocyanin', 'Animal Feed'].map((item) => (
//                   <Link key={item} to={`/products/${item.toLowerCase().replace(' ', '-')}`} className="block px-4 py-2 hover:bg-gray-100">{item}</Link>
//                 ))}
//               </div>
//             </div>
//             <Link to="/quality" className={`${navLinkClasses} ${underlineEffect}`}>Quality</Link>
//             <Link to="/contact" className={`${navLinkClasses} ${underlineEffect}`}>Contact Us</Link>
//             <Link to="/blog" className={`${navLinkClasses} ${underlineEffect}`}>Blog</Link>
//             <Link to="/corporate" className={`${navLinkClasses} ${underlineEffect}`}>Corporate Info</Link>
//           </div>

//           {/* Mobile Menu Icon */}
//           <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <FaTimes className="w-6 h-6 text-[var(--primary-green)]" /> : <FaBars className="w-6 h-6 text-[var(--primary-green)]" />}
//           </button>
//         </div>
//       </nav>

//       {/* Sidebar Drawer (Glassmorphism) */}
//       <div className={`fixed top-0 right-0 h-full w-64 backdrop-blur-lg bg-white/50 shadow-lg transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:hidden`}>
//         <div className="flex flex-col p-6 text-lg space-y-4">
//           <Link to="/" onClick={() => setMenuOpen(false)} className="group relative text-gray-800 hover:text-[var(--primary-green)] transition">
//             Home
//             <span className="block h-[2px] bg-[var(--primary-green)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//           </Link>

//           <Link to="/about" onClick={() => setMenuOpen(false)} className="group relative text-gray-800 hover:text-[var(--primary-green)] transition">
//             About Us
//             <span className="block h-[2px] bg-[var(--primary-green)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//           </Link>

//           {/* Our Products Dropdown */}
//           <div className="group relative">
//             <div
//               className="flex justify-between items-center cursor-pointer text-gray-800 hover:text-[var(--primary-green)]"
//               onClick={() => setProductDropdown(!productDropdown)}
//             >
//               <span>Our Products</span>
//               <svg className={`w-4 h-4 transform transition-transform ${productDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//               </svg>
//             </div>

//             {productDropdown && (
//               <div className="ml-4 mt-2 space-y-2">
//                 {['Spirulina', 'Blue Spirulina', 'Chlorella', 'Phycocyanin', 'Animal Feed'].map((item) => (
//                   <Link
//                     key={item}
//                     to={`/products/${item.toLowerCase().replace(' ', '-')}`}
//                     onClick={() => setMenuOpen(false)}
//                     className="block text-gray-600 hover:text-[var(--primary-green)] transition"
//                   >
//                     {item}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           <Link to="/quality" onClick={() => setMenuOpen(false)} className="group relative text-gray-800 hover:text-[var(--primary-green)] transition">
//             Quality
//             <span className="block h-[2px] bg-[var(--primary-green)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//           </Link>

//           <Link to="/contact" onClick={() => setMenuOpen(false)} className="group relative text-gray-800 hover:text-[var(--primary-green)] transition">
//             Contact Us
//             <span className="block h-[2px] bg-[var(--primary-green)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//           </Link>

//           <Link to="/blog" onClick={() => setMenuOpen(false)} className="group relative text-gray-800 hover:text-[var(--primary-green)] transition">
//             Blog
//             <span className="block h-[2px] bg-[var(--primary-green)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//           </Link>

//           <Link to="/corporate" onClick={() => setMenuOpen(false)} className="group relative text-gray-800 hover:text-[var(--primary-green)] transition">
//             Corporate Info
//             <span className="block h-[2px] bg-[var(--primary-green)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }





// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [productDropdown, setProductDropdown] = useState(false);

//   const navLinkClasses = "relative group inline-block text-lg font-semibold text-gray-800 transition";
//   const underlineEffect = "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--primary-green)] after:transition-all after:duration-300 group-hover:after:w-full";

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="w-full bg-white fixed top-0 left-0 shadow-md z-50">
//         <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
//           <Link to="/" className="text-3xl font-bold text-[var(--primary-green)]">SpiruLife</Link>

//           {/* Desktop Menu */}
//           <div className=" hidden md:flex space-x-8 items-center">
//             <Link to="/" className={`${navLinkClasses} ${underlineEffect}`}>Home</Link>
//             <Link to="/about" className={`${navLinkClasses} ${underlineEffect}`}>About Us</Link>
//             <div className="relative group cursor-pointer">
//               <span className={` ${navLinkClasses} ${underlineEffect}`}>Our Products</span>
//               <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
//                 {['Spirulina', 'Blue Spirulina', 'Chlorella', 'Phycocyanin', 'Animal Feed'].map((item) => (
//                   <Link key={item} to={`/products/${item.toLowerCase().replace(' ', '-')}`} className="block px-4 py-2 hover:bg-gray-100">{item}</Link>
//                 ))}
//               </div>
//             </div>
//             <Link to="/quality" className={`${navLinkClasses} ${underlineEffect}`}>Quality</Link>
//             <Link to="/contact" className={`${navLinkClasses} ${underlineEffect}`}>Contact Us</Link>
//             <Link to="/blog" className={`${navLinkClasses} ${underlineEffect}`}>Blog</Link>
//             <Link to="/corporate" className={`${navLinkClasses} ${underlineEffect}`}>Corporate Info</Link>
//           </div>

//           {/* Mobile Menu Icon */}
//           <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <FaTimes className="w-6 h-6 text-[var(--primary-green)]" /> : <FaBars className="w-6 h-6 text-[var(--primary-green)]" />}
//           </button>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         {menuOpen && (
//           <div className="w-full bg-white/50 backdrop-blur-lg shadow-md absolute top-full left- animate-slide-down">
//             <div className="flex flex-col py-4 px-6 space-y-4">
//               <Link to="/" onClick={() => setMenuOpen(false)} className="group relative text-gray-800 hover:text-[var(--primary-green)] transition">
//                 Home
//                 <span className="block h-[2px] bg-[var(--primary-green)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//               </Link>

//               <Link to="/about" onClick={() => setMenuOpen(false)} className="group relative text-gray-800 hover:text-[var(--primary-green)] transition">
//                 About Us
//                 <span className="block h-[2px] bg-[var(--primary-green)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//               </Link>

//               {/* Our Products Dropdown Toggle */}
//               <div>
//                 <div
//                   className="flex justify-between items-center cursor-pointer text-gray-800 hover:text-[var(--primary-green)]"
//                   onClick={() => setProductDropdown(!productDropdown)}
//                 >
//                   <span>Our Products</span>
//                   <svg className={`w-4 h-4 transform transition-transform ${productDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </div>
//                 {productDropdown && (
//                   <div className="ml-4 mt-2 space-y-2">
//                     {['Spirulina', 'Blue Spirulina', 'Chlorella', 'Phycocyanin', 'Animal Feed'].map((item) => (
//                       <Link
//                         key={item}
//                         to={`/products/${item.toLowerCase().replace(' ', '-')}`}
//                         onClick={() => setMenuOpen(false)}
//                         className="block text-gray-600 hover:text-[var(--primary-green)] transition"
//                       >
//                         {item}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link to="/quality" onClick={() => setMenuOpen(false)} className="group relative text-gray-800 hover:text-[var(--primary-green)] transition">
//                 Quality
//                 <span className="block h-[2px] bg-[var(--primary-green)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//               </Link>

//               <Link to="/contact" onClick={() => setMenuOpen(false)} className="group relative text-gray-800 hover:text-[var(--primary-green)] transition">
//                 Contact Us
//                 <span className="block h-[2px] bg-[var(--primary-green)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//               </Link>

//               <Link to="/blog" onClick={() => setMenuOpen(false)} className="group relative text-gray-800 hover:text-[var(--primary-green)] transition">
//                 Blog
//                 <span className="block h-[2px] bg-[var(--primary-green)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//               </Link>

//               <Link to="/corporate" onClick={() => setMenuOpen(false)} className="group relative text-gray-800 hover:text-[var(--primary-green)] transition">
//                 Corporate Info
//                 <span className="block h-[2px] bg-[var(--primary-green)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }



// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [productDropdown, setProductDropdown] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   // Track scroll position for navbar effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setMenuOpen(false);
//     setProductDropdown(false);
//   }, [location]);

//   const navLinkClasses = "relative group inline-block text-lg font-medium transition-colors duration-300";
//   const underlineEffect = "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--primary-green)] after:transition-all after:duration-500 group-hover:after:w-full";

//   // Desktop dropdown animation variants
//   const dropdownVariants = {
//     hidden: { 
//       opacity: 0,
//       y: -10,
//       transition: { duration: 0.2 }
//     },
//     visible: { 
//       opacity: 1,
//       y: 0,
//       transition: { 
//         duration: 0.3,
//         staggerChildren: 0.05,
//         when: "beforeChildren"
//       }
//     }
//   };

//   const dropdownItemVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: { opacity: 1, y: 0 }
//   };

//   return (
//     <>
//       {/* Top Bar */}
//       <div className="w-full bg-gradient-to-r from-green-700 to-emerald-800 text-white text-sm py-2 px-4">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//               </svg>
//               <span>+91 9508868365</span>
//             </div>
//             <div className="flex items-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//               <span>info@gnanamanivernture.com</span>
//             </div>
//           </div>
//           <div className="flex items-center space-x-3">
//             <a href="#" className="hover:text-green-300 transition-colors">
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
//               </svg>
//             </a>
//             <a href="#" className="hover:text-green-300 transition-colors">
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.193-7.715-2.157-10.141-5.126-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14v-.617c.961-.689 1.8-1.56 2.46-2.548z"/>
//               </svg>
//             </a>
//             <a href="#" className="hover:text-green-300 transition-colors">
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav className={`w-full fixed top-8 left-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
//           <Link to="/" className="flex items-center">
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="text-3xl font-bold text-[var(--primary-green)] flex items-center"
//             >
//               <svg className="w-8 h-8 mr-2 text-green-600" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
//               </svg>
//               <strong>Gnan</strong>Venture
//             </motion.div>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8 items-center">
//             <Link to="/" className={`${navLinkClasses} ${underlineEffect} ${location.pathname === '/' ? 'text-[var(--primary-green)] font-semibold' : 'text-gray-800'}`}>
//               Home
//             </Link>

//             <Link to="/about" className={`${navLinkClasses} ${underlineEffect} ${location.pathname === '/about' ? 'text-[var(--primary-green)] font-semibold' : 'text-gray-800'}`}>
//               About Us
//             </Link>

//             <div className="relative">
//               <div 
//                 className={`${navLinkClasses} ${underlineEffect} flex items-center cursor-pointer ${location.pathname.includes('/products') ? 'text-[var(--primary-green)] font-semibold' : 'text-gray-800'}`}
//                 onMouseEnter={() => setProductDropdown(true)}
//                 onMouseLeave={() => setProductDropdown(false)}
//               >
//                 Our Products
//                 <FaChevronDown className="ml-1 text-sm transition-transform duration-300" />
//               </div>

//               <AnimatePresence>
//                 {productDropdown && (
//                   <motion.div 
//                     className="absolute left-0 mt-2 w-56 rounded-xl bg-white shadow-xl border border-green-100 overflow-hidden"
//                     initial="hidden"
//                     animate="visible"
//                     exit="hidden"
//                     variants={dropdownVariants}
//                     onMouseEnter={() => setProductDropdown(true)}
//                     onMouseLeave={() => setProductDropdown(false)}
//                   >
//                     {['Spirulina', 'Blue Spirulina', 'Chlorella', 'Phycocyanin', 'Animal Feed'].map((item) => (
//                       <motion.div key={item} variants={dropdownItemVariants}>
//                         <Link 
//                           to={`/products/${item.toLowerCase().replace(' ', '-')}`} 
//                           className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-[var(--primary-green)] transition-colors flex items-center"
//                         >
//                           <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
//                           {item}
//                         </Link>
//                       </motion.div>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <Link to="/quality" className={`${navLinkClasses} ${underlineEffect} ${location.pathname === '/quality' ? 'text-[var(--primary-green)] font-semibold' : 'text-gray-800'}`}>
//               Quality
//             </Link>

//             <Link to="/contact" className={`${navLinkClasses} ${underlineEffect} ${location.pathname === '/contact' ? 'text-[var(--primary-green)] font-semibold' : 'text-gray-800'}`}>
//               Contact Us
//             </Link>

//             <Link to="/blog" className={`${navLinkClasses} ${underlineEffect} ${location.pathname === '/blog' ? 'text-[var(--primary-green)] font-semibold' : 'text-gray-800'}`}>
//               Blog
//             </Link>

//             <Link to="/corporate" className={`${navLinkClasses} ${underlineEffect} ${location.pathname === '/corporate' ? 'text-[var(--primary-green)] font-semibold' : 'text-gray-800'}`}>
//               Corporate Info
//             </Link>

//             {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Link 
//                 to="/contact" 
//                 className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow"
//               >
//                 Get Quote
//               </Link>
//             </motion.div> */}
//           </div>

//           {/* Mobile Menu Icon */}
//           <motion.button 
//             className="md:hidden z-50"
//             onClick={() => setMenuOpen(!menuOpen)}
//             whileTap={{ scale: 0.9 }}
//           >
//             {menuOpen ? (
//               <FaTimes className="w-6 h-6 text-[var(--primary-green)]" />
//             ) : (
//               <FaBars className="w-6 h-6 text-[var(--primary-green)]" />
//             )}
//           </motion.button>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         <AnimatePresence>
//           {menuOpen && (
//             <motion.div 
//               className="fixed inset-0 bg-gradient-to-b from-green-800 to-emerald-900 text-white z-40"
//               initial={{ opacity: 0, y: "-100%" }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: "-100%" }}
//               transition={{ type: "spring", damping: 25 }}
//             >
//               <div className="container mx-auto px-6 py-24 flex flex-col h-full justify-center">
//                 <div className="space-y-8">
//                   <Link 
//                     to="/" 
//                     className="text-2xl font-bold py-3 border-b border-white/10 flex items-center"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     <div className="w-2 h-2 rounded-full bg-white mr-4"></div>
//                     Home
//                   </Link>

//                   <Link 
//                     to="/about" 
//                     className="text-2xl font-bold py-3 border-b border-white/10 flex items-center"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     <div className="w-2 h-2 rounded-full bg-white mr-4"></div>
//                     About Us
//                   </Link>

//                   <div className="border-b border-white/10 pb-3">
//                     <div
//                       className="flex justify-between items-center cursor-pointer py-3"
//                       onClick={() => setProductDropdown(!productDropdown)}
//                     >
//                       <span className="text-2xl font-bold flex items-center">
//                         <div className="w-2 h-2 rounded-full bg-white mr-4"></div>
//                         Our Products
//                       </span>
//                       {productDropdown ? (
//                         <FaChevronUp className="text-white" />
//                       ) : (
//                         <FaChevronDown className="text-white" />
//                       )}
//                     </div>
//                     {productDropdown && (
//                       <motion.div 
//                         className="ml-8 mt-2 space-y-4"
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                       >
//                         {['Spirulina', 'Blue Spirulina', 'Chlorella', 'Phycocyanin', 'Animal Feed'].map((item) => (
//                           <Link
//                             key={item}
//                             to={`/products/${item.toLowerCase().replace(' ', '-')}`}
//                             onClick={() => setMenuOpen(false)}
//                             className="block text-xl text-white/80 hover:text-white transition-colors flex items-center"
//                           >
//                             <div className="w-1.5 h-1.5 rounded-full bg-white mr-3"></div>
//                             {item}
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </div>

//                   <Link 
//                     to="/quality" 
//                     className="text-2xl font-bold py-3 border-b border-white/10 flex items-center"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     <div className="w-2 h-2 rounded-full bg-white mr-4"></div>
//                     Quality
//                   </Link>

//                   <Link 
//                     to="/contact" 
//                     className="text-2xl font-bold py-3 border-b border-white/10 flex items-center"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     <div className="w-2 h-2 rounded-full bg-white mr-4"></div>
//                     Contact Us
//                   </Link>

//                   <Link 
//                     to="/blog" 
//                     className="text-2xl font-bold py-3 border-b border-white/10 flex items-center"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     <div className="w-2 h-2 rounded-full bg-white mr-4"></div>
//                     Blog
//                   </Link>

//                   <Link 
//                     to="/corporate" 
//                     className="text-2xl font-bold py-3 border-b border-white/10 flex items-center"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     <div className="w-2 h-2 rounded-full bg-white mr-4"></div>
//                     Corporate Info
//                   </Link>

//                   {/* <motion.div 
//                     className="pt-8"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Link 
//                       to="/contact" 
//                       className="inline-block bg-white text-green-700 px-8 py-3 rounded-full font-bold text-lg shadow-lg"
//                       onClick={() => setMenuOpen(false)}
//                     >
//                       Request Quote
//                     </Link>
//                   </motion.div> */}
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </>
//   );
// }

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const location = useLocation();

  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll: hide top bar on down scroll, show on up scroll, fix navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide/show top bar based on scroll direction
      if (window.scrollY > lastScrollY && window.scrollY > 60) {
        setTopBarVisible(false);
      } else {
        setTopBarVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setProductDropdown(false);
  }, [location]);

  // Shared link classes
  const navLinkClasses = "relative group inline-block text-lg font-medium transition-all duration-300";
  const underlineEffect = "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r from-green-500 to-emerald-600 after:transition-all after:duration-500 group-hover:after:w-full";

  // Dropdown variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05, delay: 0.1 } }
  };
  const dropdownItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* Top Bar - Slide Up on Scroll */}
      {/* <motion.div
        className="w-full bg-gradient-to-r from-green-800 to-emerald-900 text-white text-sm py-2 px-4 z-50"
        initial={{ y: 0 }}
        animate={{ y: topBarVisible ? 0 : -60 }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 9508868365</span>
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@gnanamanivernture.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <a href="#" className="hover:text-green-300 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-green-300 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.193-7.715-2.157-10.141-5.126-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14v-.617c.961-.689 1.8-1.56 2.46-2.548z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-green-300 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </motion.div> */}

      {/* Main Navbar - Fixed on Scroll */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-[#7bf1a876] shadow-lg py-3' : 'bg-[#7bf1a876] py-4'
          }`}
        style={{ marginTop: topBarVisible ? 0 : -60 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-green-700 flex items-center"
            >
              <svg className="w-8 h-8 mr-2 text-green-600 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              <strong className="text-green-800">Gnan</strong>
              <span className="text-emerald-600 font-semibold">Venture</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {/* {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' },
              { name: 'Quality', path: '/quality' },
              { name: 'Contact Us', path: '/contact' },
              { name: 'Blog', path: '/blog' },
              { name: 'Corporate Info', path: '/corporate' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${navLinkClasses} ${underlineEffect} ${location.pathname === item.path
                    ? 'text-green-700 font-semibold'
                    : 'text-gray-700 hover:text-green-600'
                  }`}
              >
                {item.name}
              </Link>
            ))} */}

            {/* Products Dropdown */}

            <div className="hidden lg:flex space-x-8 items-center">
              {/* 1. Home */}
              <Link
                to="/"
                className={`${navLinkClasses} ${underlineEffect} ${location.pathname === '/'
                    ? 'text-green-700 font-semibold'
                    : 'text-gray-700 hover:text-green-600'
                  }`}
              >
                Home
              </Link>

              {/* 2. About Us */}
              <Link
                to="/about"
                className={`${navLinkClasses} ${underlineEffect} ${location.pathname === '/about'
                    ? 'text-green-700 font-semibold'
                    : 'text-gray-700 hover:text-green-600'
                  }`}
              >
                About Us
              </Link>

              {/* 3. Our Products - Now in 3rd Position */}
              <div className="relative">
                <div
                  className={`${navLinkClasses} ${underlineEffect} flex items-center cursor-pointer ${location.pathname.includes('/products')
                      ? 'text-green-700 font-semibold'
                      : 'text-gray-700 hover:text-green-600'
                    }`}
                  onMouseEnter={() => setProductDropdown(true)}
                  onMouseLeave={() => setProductDropdown(false)}
                >
                  Our Products
                  <FaChevronDown className="ml-1 text-sm transition-transform duration-300" />
                </div>
                <AnimatePresence>
                  {productDropdown && (
                    <motion.div
                      className="absolute left-0 mt-2 w-56 rounded-xl bg-green-200 shadow-xl border border-green-100 overflow-hidden"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      onMouseEnter={() => setProductDropdown(true)}
                      onMouseLeave={() => setProductDropdown(false)}
                    >
                      {['Spirulina', 'Blue Spirulina', 'Chlorella', 'Phycocyanin', 'Animal Feed'].map((item) => (
                        <motion.div key={item} variants={dropdownItemVariants}>
                          <Link
                            to={`/products/${item.toLowerCase().replace(' ', '-')}`}
                            className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors flex items-center text-sm"
                          >
                            <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                            {item}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 4. Quality */}
              <Link
                to="/quality"
                className={`${navLinkClasses} ${underlineEffect} ${location.pathname === '/quality'
                    ? 'text-green-700 font-semibold'
                    : 'text-gray-700 hover:text-green-600'
                  }`}
              >
                Quality
              </Link>

              {/* 5. Contact Us */}
              <Link
                to="/contact"
                className={`${navLinkClasses} ${underlineEffect} ${location.pathname === '/contact'
                    ? 'text-green-700 font-semibold'
                    : 'text-gray-700 hover:text-green-600'
                  }`}
              >
                Contact Us
              </Link>

              {/* 6. Blog */}
              <Link
                to="/blog"
                className={`${navLinkClasses} ${underlineEffect} ${location.pathname === '/blog'
                    ? 'text-green-700 font-semibold'
                    : 'text-gray-700 hover:text-green-600'
                  }`}
              >
                Blog
              </Link>

              {/* 7. Corporate Info */}
              <Link
                to="/corporate"
                className={`${navLinkClasses} ${underlineEffect} ${location.pathname === '/corporate'
                    ? 'text-green-700 font-semibold'
                    : 'text-gray-700 hover:text-green-600'
                  }`}
              >
                Corporate Info
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {menuOpen ? (
              <FaTimes className="w-6 h-6 text-green-700" />
            ) : (
              <FaBars className="w-6 h-6 text-green-700" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu - Correct Order */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 bg-[#7bf1a8ca] text-gray-700 z-40 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
            >
              <div className="container mx-auto px-6 py-20">
                <div className="space-y-6">

                  {/* 1. Home */}
                  <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className="block text-xl font-semibold py-3 border-b border-gray-100 flex items-center"
                  >
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-4"></div>
                    Home
                  </Link>

                  {/* 2. About Us */}
                  <Link
                    to="/about"
                    onClick={() => setMenuOpen(false)}
                    className="block text-xl font-semibold py-3 border-b border-gray-100 flex items-center"
                  >
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-4"></div>
                    About Us
                  </Link>

                  {/* 3. Our Products */}
                  <div className="border-b border-gray-100 pb-3">
                    <div
                      className="flex justify-between items-center py-3 cursor-pointer"
                      onClick={() => setProductDropdown(!productDropdown)}
                    >
                      <span className="text-xl font-semibold flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-4"></div>
                        Our Products
                      </span>
                      {productDropdown ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    <AnimatePresence>
                      {productDropdown && (
                        <motion.div
                          className="ml-7 mt-2 space-y-3"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {['Spirulina', 'Blue Spirulina', 'Chlorella', 'Phycocyanin', 'Animal Feed'].map((item) => (
                            <Link
                              key={item}
                              to={`/products/${item.toLowerCase().replace(' ', '-')}`}
                              onClick={() => setMenuOpen(false)}
                              className="block text-lg text-gray-600 hover:text-green-700 transition-colors"
                            >
                              • {item}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* 4. Quality */}
                  <Link
                    to="/quality"
                    onClick={() => setMenuOpen(false)}
                    className="block text-xl font-semibold py-3 border-b border-gray-100 flex items-center"
                  >
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-4"></div>
                    Quality
                  </Link>

                  {/* 5. Contact Us */}
                  <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="block text-xl font-semibold py-3 border-b border-gray-100 flex items-center"
                  >
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-4"></div>
                    Contact Us
                  </Link>

                  {/* 6. Blog */}
                  <Link
                    to="/blog"
                    onClick={() => setMenuOpen(false)}
                    className="block text-xl font-semibold py-3 border-b border-gray-100 flex items-center"
                  >
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-4"></div>
                    Blog
                  </Link>

                  {/* 7. Corporate Info */}
                  <Link
                    to="/corporate"
                    onClick={() => setMenuOpen(false)}
                    className="block text-xl font-semibold py-3 border-b border-gray-100 flex items-center"
                  >
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-4"></div>
                    Corporate Info
                  </Link>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}