// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

// export default function FooterSection() {
//   return (
//     <footer className="w-full bg-green-200 bg-[var(--primary-green)] text-[var(--primary-green)] pt-16 pb-6 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        
//         {/* About Us */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">About Us</h3>
//           <p className="text-sm text-gray-600">
//             We are a leading manufacturer of premium quality Spirulina products, ensuring purity and nutrient-rich formulations through sustainable practices.
//           </p>
//         </div>

//         {/* Our Products */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">Our Products</h3>
//           <ul className="space-y-2 text-sm text-gray-500 underline">
//             <li><a href="#" className="hover:text-[var(--accent-yellow)] transition">Spirulina Powder</a></li>
//             <li><a href="#" className="hover:text-[var(--accent-yellow)] transition">Blue Spirulina</a></li>
//             <li><a href="#" className="hover:text-[var(--accent-yellow)] transition">Chlorella Tablets</a></li>
//             <li><a href="#" className="hover:text-[var(--accent-yellow)] transition">Phycocyanin Extract</a></li>
//             <li><a href="#" className="hover:text-[var(--accent-yellow)] transition">Animal Feed</a></li>
//           </ul>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-sm text-gray-500 underline">
//             <li><a href="#" className="hover:text-[var(--accent-yellow)] transition">Home</a></li>
//             <li><a href="#" className="hover:text-[var(--accent-yellow)] transition">About Us</a></li>
//             <li><a href="#" className="hover:text-[var(--accent-yellow)] transition">Quality</a></li>
//             <li><a href="#" className="hover:text-[var(--accent-yellow)] transition">Contact</a></li>
//             <li><a href="#" className="hover:text-[var(--accent-yellow)] transition">Corporate Info</a></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">Contact Us</h3>
//           <p className="text-sm text-gray-700">123, Green Valley Industrial Park<br />Chennai, India - 600001</p>
//           <p className="mt-2 text-sm text-gray-700">Phone: +91 98765 43210</p>
//           <p className="mt-1 text-sm text-gray-700">Email: info@spirulinapure.com</p>
//           <div className="flex gap-4 mt-4">
//             <a href="#" className="hover:text-[var(--accent-yellow)] transition"><FaFacebookF /></a>
//             <a href="#" className="hover:text-[var(--accent-yellow)] transition"><FaInstagram /></a>
//             <a href="#" className="hover:text-[var(--accent-yellow)] transition"><FaLinkedinIn /></a>
//             <a href="#" className="hover:text-[var(--accent-yellow)] transition"><FaTwitter /></a>
//           </div>
//         </div>

//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-white/45 pt-4 text-center text-sm text-gray-900">
//         &copy; 2025 Gnanamani Verture. All Rights Reserved.
//       </div>
//     </footer>
//   );
// }



import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FooterSection() {
  const [isSubmitted,setIsSubmitted]=useState(false);
  return (
    <footer className="w-full bg-gradient-to-b from-[var(--primary-green)] to-emerald-900 text-white pt-16 pb-8 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-green-800/20 to-transparent -z-10"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-green-700/10 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-5">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                <FaLeaf className="text-green-400" />
              </div>
              <h2 className="text-2xl font-bold">GnanVenture</h2>
            </div>
            <p className="text-green-100 mb-6 max-w-md">
              Leading manufacturer of premium organic Spirulina products, ensuring purity and nutrient-rich formulations through sustainable practices.
            </p>
            
            <div className="flex gap-4 mt-6">
              <motion.a 
                href="#" 
                whileHover={{ y: -5 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition"
              >
                <FaFacebookF className="text-white" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -5 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fb3d2c] transition"
              >
                <FaInstagram className="text-white" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -5 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-700 transition"
              >
                <FaLinkedinIn className="text-white" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -5 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-black transition"
              >
                <FaTwitter className="text-white" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -5 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition"
              >
                <FaYoutube className="text-white" />
              </motion.a>
            </div>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-lg font-bold mb-5 pb-2 border-b border-green-700 inline-block">Our Products</h3>
            <ul className="space-y-3">
              {['Spirulina Powder', 'Blue Spirulina', 'Chlorella Tablets', 'Phycocyanin Extract', 'Animal Feed'].map((product, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-green-100 hover:text-white transition"
                >
                  <a href="#" className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-3"></div>
                    {product}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          {/* Quick Links */}
<div>
  <h3 className="text-lg font-bold mb-5 pb-2 border-b border-green-700 inline-block">Quick Links</h3>
  <ul className="space-y-3">
    {[
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Quality Assurance', path: '/quality' },
      { name: 'Products', path: '/products' },
      { name: 'Contact', path: '/contact' },
      { name: 'Blog', path: '/blog' },
      { name: 'Corporate Info', path: '/about' } // or a dedicated page later
    ].map((link, index) => (
      <motion.li 
        key={index}
        whileHover={{ x: 5 }}
        className="text-green-100 hover:text-white transition"
      >
        <Link 
          to={link.path} 
          className="flex items-center"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-3"></div>
          {link.name}
        </Link>
      </motion.li>
    ))}
  </ul>
</div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-5 pb-2 border-b border-green-700 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mr-3">
                  <FaMapMarkerAlt className="text-green-400" />
                </div>
                <span className="text-green-100">Gnyanamani Venture Pvt. Ltd.,<br />No.62A/1, Kattanachampatti,<br/>Block No 2, Rasipuram, Namakkal,<br/>Tamilnadu, India - 637408.</span>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mr-3">
                  <FaPhone className="text-green-400" />
                </div>
                <span className="text-green-100">+91 95088 68365</span>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mr-3">
                  <FaEnvelope className="text-green-400" />
                </div>
                <span className="text-green-100">info@gnyanventure.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="bg-gradient-to-r from-green-700 to-emerald-800 rounded-xl p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-green-100">Get updates on new products, industry insights, and special offers.</p>
            </div>
            
            <div className="flex-1 w-full max-w-md">
              <form className="flex flex-col md:flex-row gap-2 ">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1  px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-amber-400 to-yellow-500 text-gray-900 font-semibold px-5 py-3 rounded-lg hover:shadow-lg transition"
                >
                  Subscribe
                </motion.button>
              </form>
              <p className="text-green-200 text-xs mt-2">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div> */}
        {/* Newsletter */}
<div className="bg-gradient-to-r from-green-700 to-emerald-800 rounded-xl p-6 mb-12">
  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
    <div className="flex-1">
      <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
      <p className="text-green-100">Get updates on new products, industry insights, and special offers.</p>
    </div>

    <div className="flex-1 w-full max-w-md">
      {isSubmitted ? (
        // ✅ Success Message (shown after submit)
        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-green-100 text-center animate-fade-in-up">
          <p className="font-medium">✅ Thank you for subscribing!</p>
          <p className="text-sm mt-1 opacity-90">We'll keep you updated with the latest from GnyanVenture.</p>
        </div>
      ) : (
        //  Subscription Form
        <form
          action="https://formspree.io/f/xgvzpbwr"
          method="POST"
          onSubmit={() => setIsSubmitted(true)}
          className="flex flex-col md:flex-row gap-2"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-amber-400 to-yellow-500 text-gray-900 font-semibold px-5 py-3 rounded-lg hover:shadow-lg transition"
          >
            Subscribe
          </button>
        </form>
      )}
      <p className="text-green-200 text-xs mt-2">
        We respect your privacy. No spam, ever.
      </p>
    </div>
  </div>
</div>
        {/* Bottom Bar */}
        <div className="border-t border-green-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-green-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Gnyanamani Venture. All Rights Reserved.
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {['Privacy Policy', 'Terms of Service', 'Sitemap', 'FAQs'].map((item, index) => (
              <a 
                key={index} 
                href="#" 
                className="text-green-300 hover:text-white text-sm transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating leaf decoration */}
      <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-green-700/10 blur-3xl -z-10"></div>
    </footer>
  );
}