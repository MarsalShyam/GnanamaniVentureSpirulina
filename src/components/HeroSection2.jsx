import React from 'react';

export default function HeroSection() {
  return (
    <section
      className="relative w-screen h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1581092334445-992cb48b61b5')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Global Reach & Sustainability</h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Delivering Spirulina Superfoods worldwide with sustainable practices.
        </p>
      </div>

      {/* Floating Buttons */}
      <div className="fixed top-1/3 right-0 bg-yellow-400 text-black px-4 py-3 rounded-l-lg shadow-lg cursor-pointer z-50 hover:bg-yellow-500 transition-transform duration-300 transform -translate-y-1/2">
        Enquiry Form
      </div>

      <div className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg cursor-pointer z-50 hover:bg-green-600 transition-transform duration-300">
        <a href="https://wa.me/919508868365" target="_blank" rel="noopener noreferrer">
          WhatsApp Us
        </a>
      </div>
    </section>
  );
}