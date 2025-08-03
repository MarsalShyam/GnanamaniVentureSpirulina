import { motion } from 'framer-motion';
import lab from '../assets/Images/Manufacture/lab.jpg';
import pond from '../assets/Images/Manufacture/pond.jpg';
import BestOutcome from '../assets/Images/Manufacture/BestOutcome.jpg';
import spraydrying from '../assets/Images/Manufacture/spraydrying.jpg';

export default function DifferenceSection() {
  const steps = [
    {
      image: pond,
      title: 'Cultivation Pond',
    },
    {
      image: spraydrying,
      title: 'Efficient Spray Drying',
    },
    {
      image: BestOutcome,
      title: 'Get The Best Out of Nature',
    },
    {
      image: lab,
      title: 'Quality Control Lab',
    },
  ];

  return (
    <section className="w-full bg-yellow-50 bg-[var(--soft-blue-bg)] py-6 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-yellow-50 rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Image Container: 95% height */}
            <div className="flex-1 min-h-0 relative">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover object-center"
                style={{ height: '95%' }} // 95% of container
              />
            </div>

            {/* Title Section: 5% height */}
            <div className="h-12 flex items-center justify-center bg-green-700">
              <h3 className="text-base text-white md:text-lg font-bold text-center px-2">
                {step.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}