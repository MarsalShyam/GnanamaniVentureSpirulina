import { motion } from 'framer-motion';
import lab from '../assets/Images/Manufacture/lab.jpg'
import pond from '../assets/Images/Manufacture/pond.jpg'
import BestOutcome from '../assets/Images/Manufacture/BestOutcome.jpg'
import spraydrying from '../assets/Images/Manufacture/spraydrying.jpg'

export default function DifferenceSection() {
  const steps = [
    {
      image: pond, 
      title: 'Cultivation Pond',
      desc: 'Natural cultivation of algae in controlled eco-friendly ponds ensuring nutrient richness.',
    },
    {
      image: spraydrying,
      title: 'Efficient Spray Drying',
      desc: 'Advanced spray drying technology preserving essential nutrients and pigments.',
    },
    {
      image: BestOutcome,
      title: 'Get The Best Out of Nature',
      desc: 'Minimal processing to retain Spirulina’s natural goodness and health benefits.',
    },
    {
      image: lab,
      title: 'Quality Control Lab',
      desc: 'Stringent quality checks in fully equipped labs ensuring product purity & safety.',
    },
  ];

  return (
    <section className="w-full bg-[var(--soft-blue-bg)] py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary-green)]">
          What Makes Us Different
        </h2>
        <p className="mt-4 text-gray-600 md:text-lg">
          We follow a meticulous process to deliver the purest and most effective Spirulina products.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300 ease-in-out"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Image Container */}
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-lg">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Text */}
            <h3 className="text-xl font-bold text-[var(--primary-green)]">{step.title}</h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}