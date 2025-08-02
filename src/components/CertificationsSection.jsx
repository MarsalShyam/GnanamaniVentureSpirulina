import { motion } from 'framer-motion';

export default function CertificationsSection() {
  const certifications = [
    {
      name: 'USDA Organic',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/06/USDA_organic_seal.svg',
    },
    {
      name: 'FSSAI Certified',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/FSSAI_logo.svg',
    },
    {
      name: 'ISO 9001',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/ISO_9001-2015.svg',
    },
    {
      name: 'GMP Certified',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/GMP.svg',
    },
    {
      name: 'Halal Certified',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Halal-logo.svg',
    },
    {
      name: 'FDA Registered',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/FDA_logo.svg',
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary-green)]">Our Global Certifications</h2>
        <p className="mt-4 text-gray-600 md:text-lg">We proudly hold internationally recognized certifications ensuring top-tier product quality.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="w-24 h-24 flex items-center justify-center bg-[var(--soft-cream)] rounded-xl shadow-md p-4 hover:scale-105 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={cert.logo} alt={cert.name} className="object-contain h-full w-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
