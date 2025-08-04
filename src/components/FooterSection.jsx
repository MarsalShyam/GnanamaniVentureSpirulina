import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function FooterSection() {
  return (
    <footer className="w-full bg-green-200 bg-[var(--primary-green)] text-[var(--primary-green)] pt-16 pb-6 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-sm text-gray-600">
            We are a leading manufacturer of premium quality Spirulina products, ensuring purity and nutrient-rich formulations through sustainable practices.
          </p>
        </div>

        {/* Our Products */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Products</h3>
          <ul className="space-y-2 text-sm text-gray-500 underline">
            <li><a href="#" className="hover:text-[var(--accent-yellow)] transition">Spirulina Powder</a></li>
            <li><a href="#" className="hover:text-[var(--accent-yellow)] transition">Blue Spirulina</a></li>
            <li><a href="#" className="hover:text-[var(--accent-yellow)] transition">Chlorella Tablets</a></li>
            <li><a href="#" className="hover:text-[var(--accent-yellow)] transition">Phycocyanin Extract</a></li>
            <li><a href="#" className="hover:text-[var(--accent-yellow)] transition">Animal Feed</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-500 underline">
            <li><a href="#" className="hover:text-[var(--accent-yellow)] transition">Home</a></li>
            <li><a href="#" className="hover:text-[var(--accent-yellow)] transition">About Us</a></li>
            <li><a href="#" className="hover:text-[var(--accent-yellow)] transition">Quality</a></li>
            <li><a href="#" className="hover:text-[var(--accent-yellow)] transition">Contact</a></li>
            <li><a href="#" className="hover:text-[var(--accent-yellow)] transition">Corporate Info</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-700">123, Green Valley Industrial Park<br />Chennai, India - 600001</p>
          <p className="mt-2 text-sm text-gray-700">Phone: +91 98765 43210</p>
          <p className="mt-1 text-sm text-gray-700">Email: info@spirulinapure.com</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-[var(--accent-yellow)] transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-[var(--accent-yellow)] transition"><FaInstagram /></a>
            <a href="#" className="hover:text-[var(--accent-yellow)] transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-[var(--accent-yellow)] transition"><FaTwitter /></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/45 pt-4 text-center text-sm text-gray-900">
        &copy; 2025 Gnanamani Verture. All Rights Reserved.
      </div>
    </footer>
  );
}
