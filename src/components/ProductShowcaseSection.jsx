import { motion } from 'framer-motion';

const products = [
  {
    title: 'Organic Spirulina Powder',
    description: 'Our Spirulina powder is rich in protein, vitamins, and essential amino acids. Minimally processed to retain its natural nutrients.',
    image: 'https://images.unsplash.com/photo-1604152135912-04a6b1b96a3b', // Replace with Spirulina powder image
  },
  {
    title: 'Blue Spirulina Extract',
    description: 'Derived from phycocyanin, this vibrant blue superfood is perfect for smoothies and health beverages, packed with antioxidants.',
    image: 'https://images.unsplash.com/photo-1608150803983-0c633e02a292', // Replace with Blue Spirulina image
  },
  {
    title: 'Chlorella Tablets',
    description: 'Chlorella is a powerful detoxifying algae, compressed into easy-to-consume tablets. Rich in chlorophyll and essential minerals.',
    image: 'https://images.unsplash.com/photo-1587980385940-7f1dc59bb873', // Replace with Chlorella image
  },
  {
    title: 'Phycocyanin Extract',
    description: 'A premium pigment-protein complex, Phycocyanin is valued for its potent antioxidant and anti-inflammatory properties.',
    image: 'https://images.unsplash.com/photo-1607960614138-1511e9f6a3d2', // Replace with Phycocyanin image
  },
  {
    title: 'Animal Feed Supplements',
    description: 'Our Spirulina-based animal feed enhances growth, immunity, and overall health for livestock and aquatic animals.',
    image: 'https://images.unsplash.com/photo-1589712236047-745cf0647270', // Replace with Animal Feed image
  },
];

export default function ProductShowcaseSection() {
  return (
    <section className="w-full bg-[var(--soft-cream)] py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary-green)]">Organic Superfoods Spirulina</h2>
        <p className="mt-4 text-gray-600 md:text-lg">Our minimally processed spirulina helps preserve the nutrients and pigments, which might otherwise be stripped during harsh processing.</p>
      </div>

      <div className="flex flex-col gap-16">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-10`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="w-full md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover object-center" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary-green)]">{product.title}</h3>
              <p className="mt-4 text-gray-600">{product.description}</p>
              <button className="btn-primary mt-6">Read More</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
