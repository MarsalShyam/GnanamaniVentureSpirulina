import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="w-full bg-white bg-[var(--soft-blue-bg) py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 flex flex-col md:flex-row items-center justify-center gap-10">
      
      {/* Left: YouTube Video Embed */}
      <motion.div 
        className="w-full md:w-1/2 h-64 md:h-96 rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/YE3qUddEqU8"  // <-- Replace with your Video ID
          title="About Spirulina Manufacturing"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>

      {/* Right: Text Content */}
      <motion.div 
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary-green)] leading-snug">
          We Manufacture Spirulina from Algae to Capsules
        </h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg">
          Our company specializes in cultivating, processing, and delivering premium quality Spirulina in powder, tablet, and capsule forms. We ensure nutrient preservation through advanced spray drying and microalgae technology, catering to global standards of purity and efficacy.
        </p>
        <button className="btn-primary mt-6">Read More</button>
      </motion.div>
    </section>
  );
}
