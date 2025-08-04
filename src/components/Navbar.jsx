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


import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);

  const navLinkClasses = "relative group inline-block text-lg font-semibold text-gray-800 transition";
  const underlineEffect = "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--primary-green)] after:transition-all after:duration-300 group-hover:after:w-full";

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-white fixed top-0 left-0 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <Link to="/" className="text-3xl font-bold text-[var(--primary-green)]">SpiruLife</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={`${navLinkClasses} ${underlineEffect}`}>Home</Link>
            <Link to="/about" className={`${navLinkClasses} ${underlineEffect}`}>About Us</Link>
            <div className="relative group cursor-pointer">
              <span className={`${navLinkClasses} ${underlineEffect}`}>Our Products</span>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
                {['Spirulina', 'Blue Spirulina', 'Chlorella', 'Phycocyanin', 'Animal Feed'].map((item) => (
                  <Link key={item} to={`/products/${item.toLowerCase().replace(' ', '-')}`} className="block px-4 py-2 hover:bg-gray-100">{item}</Link>
                ))}
              </div>
            </div>
            <Link to="/quality" className={`${navLinkClasses} ${underlineEffect}`}>Quality</Link>
            <Link to="/contact" className={`${navLinkClasses} ${underlineEffect}`}>Contact Us</Link>
            <Link to="/blog" className={`${navLinkClasses} ${underlineEffect}`}>Blog</Link>
            <Link to="/corporate" className={`${navLinkClasses} ${underlineEffect}`}>Corporate Info</Link>
          </div>

          {/* Mobile Menu Icon */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes className="w-6 h-6 text-[var(--primary-green)]" /> : <FaBars className="w-6 h-6 text-[var(--primary-green)]" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="w-full bg-white/80 backdrop-blur-lg shadow-md absolute top-full left- animate-slide-down">
            <div className="flex flex-col py-4 px-6 space-y-4">
              <Link to="/" onClick={() => setMenuOpen(false)} className="group relative text-gray-800 hover:text-[var(--primary-green)] transition">
                Home
                <span className="block h-[2px] bg-[var(--primary-green)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>

              <Link to="/about" onClick={() => setMenuOpen(false)} className="group relative text-gray-800 hover:text-[var(--primary-green)] transition">
                About Us
                <span className="block h-[2px] bg-[var(--primary-green)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>

              {/* Our Products Dropdown Toggle */}
              <div>
                <div
                  className="flex justify-between items-center cursor-pointer text-gray-800 hover:text-[var(--primary-green)]"
                  onClick={() => setProductDropdown(!productDropdown)}
                >
                  <span>Our Products</span>
                  <svg className={`w-4 h-4 transform transition-transform ${productDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {productDropdown && (
                  <div className="ml-4 mt-2 space-y-2">
                    {['Spirulina', 'Blue Spirulina', 'Chlorella', 'Phycocyanin', 'Animal Feed'].map((item) => (
                      <Link
                        key={item}
                        to={`/products/${item.toLowerCase().replace(' ', '-')}`}
                        onClick={() => setMenuOpen(false)}
                        className="block text-gray-600 hover:text-[var(--primary-green)] transition"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/quality" onClick={() => setMenuOpen(false)} className="group relative text-gray-800 hover:text-[var(--primary-green)] transition">
                Quality
                <span className="block h-[2px] bg-[var(--primary-green)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>

              <Link to="/contact" onClick={() => setMenuOpen(false)} className="group relative text-gray-800 hover:text-[var(--primary-green)] transition">
                Contact Us
                <span className="block h-[2px] bg-[var(--primary-green)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>

              <Link to="/blog" onClick={() => setMenuOpen(false)} className="group relative text-gray-800 hover:text-[var(--primary-green)] transition">
                Blog
                <span className="block h-[2px] bg-[var(--primary-green)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>

              <Link to="/corporate" onClick={() => setMenuOpen(false)} className="group relative text-gray-800 hover:text-[var(--primary-green)] transition">
                Corporate Info
                <span className="block h-[2px] bg-[var(--primary-green)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
