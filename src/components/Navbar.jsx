import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[var(--soft-cream)] fixed top-0 left-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-3xl font-bold text-[var(--primary-green)]">SpiruLife</div>

        <div className="hidden md:flex space-x-8 font-medium">
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About Us</a>
          <div className="relative group cursor-pointer">
            <span className="nav-link">Our Products</span>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
              {['Spirulina', 'Blue Spirulina', 'Chlorella', 'Phycocyanin', 'Animal Feed'].map((item) => (
                <a key={item} href={`/products/${item.toLowerCase().replace(' ', '-')}`} className="block px-4 py-2 hover:bg-[var(--soft-cream)]">{item}</a>
              ))}
            </div>
          </div>
          <a href="/quality" className="nav-link">Quality</a>
          <a href="/contact" className="nav-link">Contact Us</a>
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/corporate" className="nav-link">Corporate Info</a>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6 text-[var(--primary-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-3">
          {['Home', 'About Us', 'Quality', 'Contact Us', 'Blog', 'Corporate Info'].map((item) => (
            <a key={item} href={`/${item.toLowerCase().replace(' ', '-')}`} className="block nav-link">{item}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
