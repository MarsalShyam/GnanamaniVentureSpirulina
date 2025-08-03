import { motion } from 'framer-motion';
import { FaGlobeAsia, FaCertificate, FaFlask, FaLeaf } from 'react-icons/fa';

export default function QualitySection() {
  const stats = [
    {
      icon: <FaFlask className="text-4xl text-[var(--accent-blue)]" />,
      number: '15+',
      title: 'Years Experience',
      desc: 'Microalgae Technology & Research Expertise.',
    },
    {
      icon: <FaGlobeAsia className="text-4xl text-[var(--accent-blue)]" />,
      number: '25+',
      title: 'Countries Served',
      desc: 'Trusted by clients worldwide for Spirulina products.',
    },
    {
      icon: <FaCertificate className="text-4xl text-[var(--accent-blue)]" />,
      number: '99%',
      title: 'Quality Consistency',
      desc: 'Delivering batch-to-batch premium quality assurance.',
    },
    {
      icon: <FaLeaf className="text-4xl text-[var(--accent-blue)]" />,
      number: '1st',
      title: 'Largest Manufacturer',
      desc: 'Leading Organic Spirulina Manufacturer in the region.',
    },
  ];

  return (
    <section className="w-full bg-yellow-50 bg-[var(--soft-blue-bg)] py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary-green)]">Our Quality Assurance Systems</h2>
        <p className="mt-4 text-gray-600 md:text-lg">We adhere to the highest global standards ensuring quality & consistency.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-4xl font-bold text-[var(--primary-green)]">{item.number}</h3>
            <p className="text-xl font-semibold mt-2">{item.title}</p>
            <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
