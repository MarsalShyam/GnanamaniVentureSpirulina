import { motion } from 'framer-motion';
import { FaWater, FaWind, FaLeaf, FaFlask } from 'react-icons/fa';

export default function DifferenceSection() {
  const steps = [
    {
      icon: <FaWater className="text-4xl text-[var(--primary-green)]" />,
      title: 'Cultivation Pond',
      desc: 'Natural cultivation of algae in controlled eco-friendly ponds ensuring nutrient richness.',
    },
    {
      icon: <FaWind className="text-4xl text-[var(--primary-green)]" />,
      title: 'Efficient Spray Drying',
      desc: 'Advanced spray drying technology preserving essential nutrients and pigments.',
    },
    {
      icon: <FaLeaf className="text-4xl text-[var(--primary-green)]" />,
      title: 'Get The Best Out of Nature',
      desc: 'Minimal processing to retain Spirulina’s natural goodness and health benefits.',
    },
    {
      icon: <FaFlask className="text-4xl text-[var(--primary-green)]" />,
      title: 'Quality Control Lab',
      desc: 'Stringent quality checks in fully equipped labs ensuring product purity & safety.',
    },
  ];

  return (
    <section className="w-full bg-[var(--soft-blue-bg)] py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary-green)]">What Makes Us Different</h2>
        <p className="mt-4 text-gray-600 md:text-lg">We follow a meticulous process to deliver the purest and most effective Spirulina products.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-bold text-[var(--primary-green)]">{step.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
