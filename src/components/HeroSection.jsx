import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1580656519531-d5dfd95f6b73",  // Spirulina Farm
  "https://images.unsplash.com/photo-1560807707-8cc77767d783",      // Spirulina Powder
  "https://images.unsplash.com/photo-1609864680411-7876ac6b180c",   // Capsules / Tablets
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen md:h-[85vh] sm:h-[70vh] xs:h-[60vh] overflow-hidden pt-20">
      <AnimatePresence>
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt="Hero Slide"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
        />
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-green)]/80 via-[var(--primary-green)]/50 to-transparent flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-md">
            Empowering Health with Spirulina
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-2xl font-medium">
            Organic Powders & Capsules Direct from Nature
          </p>
          <button className="btn-primary mt-6">Explore Products</button>
        </div>
      </div>
    </div>
  );
}
