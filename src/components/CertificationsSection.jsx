import { motion } from 'framer-motion';
import usda from '../assets/logos/1.png'
import fss from '../assets/logos/2.png'
import iso from '../assets/logos/3.png'
import fssc from '../assets/logos/4.png'
import ecocert from '../assets/logos/5.png'
import eu from '../assets/logos/6.png'

export default function CertificationsSection() {
  const certifications = [
    {
      name: 'USDA Organic',
      logo: usda,
    },
    {
      name: 'FSSAI Certified',
      logo: fss,
    },
    {
      name: 'ISO 9001',
      logo: iso,
    },
    {
      name: 'GMP Certified',
      logo: fssc,
    },
    {
      name: 'Halal Certified',
      logo: ecocert,
    },
    {
      name: 'FDA Registered',
      logo: eu,
    }
  ]

  return (
    <section className="w-full bg-green-50 py-10 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
      {/* <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary-green)]">Our Global Certifications</h2>
        <p className="mt-4 text-gray-600 md:text-lg">We proudly hold internationally recognized certifications ensuring top-tier product quality.</p>
      </div> */}
      <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center text-green-600 font-medium mb-3">
            <div className="w-6 h-0.5 bg-green-500 mr-2"></div>
            CERTIFICATIONS
            <div className="w-6 h-0.5 bg-green-500 ml-2"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[var(--primary-green)]">Global Certifications</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We proudly hold internationally recognized certifications ensuring top-tier product quality.
          </p>
        </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="w-35 h-24 flex items-center justify-center bg-green-50 bg-[var(--soft-cream)] hover:scale-105 transition"
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
