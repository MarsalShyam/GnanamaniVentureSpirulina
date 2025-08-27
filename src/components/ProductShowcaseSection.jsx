// import { motion } from 'framer-motion';
// import spirulina from '../assets/Images/product/spirulinapowder3.webp'
// import blueSpirulina from '../assets/Images/product/blueSpirulina.avif'
// import chlorella from '../assets/Images/product/chlorella4.jpg'
// import phycocyanin from '../assets/Images/product/phycocyanin.jpg'
// import animalfeed from '../assets/Images/product/animalfeed.jpg'

// const products = [
//   {
//     title: 'Organic Spirulina Powder',
//     description: 'Our Spirulina powder is rich in protein, vitamins, and essential amino acids. Minimally processed to retain its natural nutrients.',
//     image: spirulina, 
//   },
//   {
//     title: 'Blue Spirulina Extract',
//     description: 'Derived from phycocyanin, this vibrant blue superfood is perfect for smoothies and health beverages, packed with antioxidants.',
//     image: blueSpirulina,
//   },
//   {
//     title: 'Chlorella Tablets',
//     description: 'Chlorella is a powerful detoxifying algae, compressed into easy-to-consume tablets. Rich in chlorophyll and essential minerals.',
//     image: chlorella
//   },
//   {
//     title: 'Phycocyanin Extract',
//     description: 'A premium pigment-protein complex, Phycocyanin is valued for its potent antioxidant and anti-inflammatory properties.',
//     image: phycocyanin
//   },
//   {
//     title: 'Animal Feed Supplements',
//     description: 'Our Spirulina-based animal feed enhances growth, immunity, and overall health for livestock and aquatic animals.',
//     image: animalfeed
//   },
// ];

// export default function ProductShowcaseSection() {
//   return (
//     <section className="w-full bg-green-100 bg-[var(--soft-cream)] py-8 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary-green)]">Our Organic Superfoods</h2>
//         <p className="mt-4 text-gray-600 md:text-lg">Our minimally processed spirulina helps preserve the nutrients and pigments, which might otherwise be stripped during harsh processing.</p>
//       </div>

//       <div className="flex flex-col gap-16">
//         {products.map((product, index) => (
//           <motion.div
//             key={index}
//             className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-10`}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.2 }}
//           >
//             {/* <div className="w-full md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
//               <img src={product.image} alt={product.title} className="w-full h-full object-cover object-center" />
//             </div> */}
//             <div className="w-full md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden shadow-lg bg-white flex items-center justify-center">
//   <img 
//     src={product.image} 
//     alt={product.title} 
//     className="w-full h-full object-contain p-4 md:p-6" 
//     style={{ imageRendering: 'auto' }}
//   />
// </div>
//             <div className="w-full md:w-1/2 p-2 bg-[#2cfb9314]">
//               <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary-green)]">{product.title}</h3>
//               <p className="mt-4 text-gray-600">{product.description}</p>
//               <button className="btn-primary mt-6">Read More</button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// import { motion } from 'framer-motion';
// import { FaLeaf, FaSeedling, FaFlask, FaHeart, FaPaw } from 'react-icons/fa';

// const products = [
//   {
//     title: 'Organic Spirulina Powder',
//     description: 'Rich in protein, vitamins, and essential amino acids. Minimally processed to retain maximum nutrients and bioactive compounds.',
//     icon: <FaLeaf className="text-3xl text-green-500" />,
//     features: ['60-70% complete protein', 'Rich in antioxidants', 'Vitamin B complex', 'Easy to mix'],
//     color: 'from-green-50 to-emerald-50'
//   },
//   {
//     title: 'Blue Spirulina Extract',
//     description: 'Vibrant phycocyanin-rich superfood with potent antioxidant properties. Perfect for functional foods and beverages.',
//     icon: <FaFlask className="text-3xl text-blue-500" />,
//     features: ['Natural blue food coloring', 'High antioxidant content', 'Anti-inflammatory properties', 'Neutral taste'],
//     color: 'from-blue-50 to-sky-50'
//   },
//   {
//     title: 'Chlorella Tablets',
//     description: 'Powerful detoxifying algae compressed into convenient tablets. Excellent source of chlorophyll and essential minerals.',
//     icon: <FaSeedling className="text-3xl text-emerald-500" />,
//     features: ['Natural detoxification', 'Immune system support', 'Rich in chlorophyll', 'Digestive health'],
//     color: 'from-emerald-50 to-teal-50'
//   },
//   {
//     title: 'Phycocyanin Extract',
//     description: 'Premium pigment-protein complex with scientifically proven health benefits. Ideal for nutraceutical applications.',
//     icon: <FaHeart className="text-3xl text-cyan-500" />,
//     features: ['Potent antioxidant', 'Supports liver health', 'Neuroprotective properties', 'Anti-inflammatory effects'],
//     color: 'from-cyan-50 to-blue-50'
//   },
//   {
//     title: 'Animal Feed Supplements',
//     description: 'Nutrition-packed spirulina enhances growth, immunity, and vitality for livestock and aquatic species.',
//     icon: <FaPaw className="text-3xl text-amber-500" />,
//     features: ['Improved growth rates', 'Enhanced immune response', 'Better feed conversion', 'Natural pigmentation'],
//     color: 'from-amber-50 to-yellow-50'
//   },
// ];

// export default function ProductShowcaseSection() {
//   return (
//     <section className="w-full py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute top-20 left-0 w-60 h-60 rounded-full bg-green-100/30 blur-3xl -z-10"></div>
//       <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-emerald-100/20 blur-3xl -z-10"></div>
      
//       <div className="max-w-7xl mx-auto">
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="inline-flex items-center text-green-600 font-medium mb-4">
//             <div className="w-8 h-0.5 bg-green-500 mr-3"></div>
//             PREMIUM SUPERFOODS
//             <div className="w-8 h-0.5 bg-green-500 ml-3"></div>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Our Organic <span className="text-[var(--primary-green)]">Microalgae Products</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             Minimally processed to preserve maximum nutrients and bioactive compounds. Certified organic and sustainably produced.
//           </p>
//           <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((product, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true, margin: "-50px" }}
//               className={`bg-gradient-to-br ${product.color} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-white`}
//             >
//               <div className="p-1 bg-gradient-to-r from-white to-transparent">
//                 <div className="bg-white rounded-xl p-6 flex flex-col h-full">
//                   <div className="flex items-center mb-6">
//                     <div className="bg-green-100 p-3 rounded-full mr-4">
//                       {product.icon}
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
//                   </div>
                  
//                   <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
                  
//                   <div className="mb-6">
//                     <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
//                     <ul className="space-y-2">
//                       {product.features.map((feature, idx) => (
//                         <li key={idx} className="flex items-start">
//                           <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
//                             <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
//                           </div>
//                           <span className="text-gray-600">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
                  
//                   <motion.div
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                   >
//                     <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 rounded-lg shadow hover:shadow-md transition">
//                       View Product Details
//                     </button>
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Certification Banner */}
//         <motion.div 
//           className="mt-20 bg-gradient-to-r from-green-700 to-emerald-800 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//         >
//           <div className="flex-1 mb-8 md:mb-0">
//             <h3 className="text-2xl font-bold mb-4">Certified Quality Assurance</h3>
//             <p className="text-green-100 mb-6 max-w-xl">
//               All our products undergo rigorous testing and hold multiple international certifications for quality, purity, and sustainability.
//             </p>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="flex items-center">
//                 <FaLeaf className="text-green-300 mr-2" />
//                 <span>USDA Organic Certified</span>
//               </div>
//               <div className="flex items-center">
//                 <FaLeaf className="text-green-300 mr-2" />
//                 <span>Ecocert Certified</span>
//               </div>
//               <div className="flex items-center">
//                 <FaLeaf className="text-green-300 mr-2" />
//                 <span>ISO 22000 Certified</span>
//               </div>
//               <div className="flex items-center">
//                 <FaLeaf className="text-green-300 mr-2" />
//                 <span>Halal & Kosher Certified</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex-1 flex justify-center">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="bg-white/20 backdrop-blur-sm rounded-full w-40 h-40 flex items-center justify-center">
//                   <div className="bg-white/30 backdrop-blur-sm rounded-full w-32 h-32 flex items-center justify-center">
//                     <div className="bg-white text-green-800 rounded-full w-24 h-24 flex items-center justify-center font-bold text-center text-sm">
//                       Quality Certified
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import { motion } from 'framer-motion';
import { FaLeaf, FaHeart, FaFlask, FaSeedling, FaPaw } from 'react-icons/fa';

// Import your product images
import spirulina from '../assets/Images/product/spirulinapowder3.webp';
import blueSpirulina from '../assets/Images/product/blueSpirulina.avif';
import chlorella from '../assets/Images/product/chlorella4.jpg';
import phycocyanin from '../assets/Images/product/phycocyanin.jpg';
import animalfeed from '../assets/Images/product/animalfeed.jpg';
import { Link } from 'react-router-dom';

const products = [
  {
    title: 'Organic Spirulina Powder',
    description: 'Rich in protein, vitamins, and essential amino acids. Minimally processed to retain maximum nutrients and bioactive compounds.',
    icon: <FaLeaf className="text-3xl text-green-500" />,
    features: ['60-70% complete protein', 'Rich in antioxidants', 'Vitamin B complex', 'Easy to mix'],
    color: 'green',
    link:'/products/spirulina',
    image: spirulina
  },
  {
    title: 'Blue Spirulina Extract',
    description: 'Vibrant phycocyanin-rich superfood with potent antioxidant properties. Perfect for functional foods and beverages.',
    icon: <FaFlask className="text-3xl text-blue-500" />,
    features: ['Natural blue food coloring', 'High antioxidant content', 'Anti-inflammatory properties', 'Neutral taste'],
    color: 'blue',
    link:'/products/blue-spirulina',
    image: blueSpirulina
  },
  {
    title: 'Chlorella Tablets',
    description: 'Powerful detoxifying algae compressed into convenient tablets. Excellent source of chlorophyll and essential minerals.',
    icon: <FaSeedling className="text-3xl text-emerald-500" />,
    features: ['Natural detoxification', 'Immune system support', 'Rich in chlorophyll', 'Digestive health'],
    color: 'emerald',
    link:'/products/chlorella',
    image: chlorella
  },
  {
    title: 'Phycocyanin Extract',
    description: 'Premium pigment-protein complex with scientifically proven health benefits. Ideal for nutraceutical applications.',
    icon: <FaHeart className="text-3xl text-cyan-500" />,
    features: ['Potent antioxidant', 'Supports liver health', 'Neuroprotective properties', 'Anti-inflammatory effects'],
    color: 'cyan',
    link:'/products/phycocyanin',
    image: phycocyanin
  },
  {
    title: 'Animal Feed Supplements',
    description: 'Nutrition-packed spirulina enhances growth, immunity, and vitality for livestock and aquatic species.',
    icon: <FaPaw className="text-3xl text-amber-500" />,
    features: ['Improved growth rates', 'Enhanced immune response', 'Better feed conversion', 'Natural pigmentation'],
    color: 'amber',
    link:'/products/animal-feed',
    image: animalfeed
  },
];

export default function ProductShowcaseSection() {
  const colorClasses = {
    green: { bg: 'bg-green-50', border: 'border-green-100', button: 'from-green-500 to-emerald-600' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-100', button: 'from-blue-500 to-sky-600' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-100', button: 'from-emerald-500 to-teal-600' },
    cyan: { bg: 'bg-cyan-50', border: 'border-cyan-100', button: 'from-cyan-500 to-blue-600' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-100', button: 'from-amber-500 to-yellow-600' },
  };

  return (
    <section id="products" className="w-full py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-60 h-60 rounded-full bg-green-100/30 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-emerald-100/20 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center text-green-600 font-medium mb-4">
            <div className="w-8 h-0.5 bg-green-500 mr-3"></div>
            PREMIUM SUPERFOODS
            <div className="w-8 h-0.5 bg-green-500 ml-3"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[var(--primary-green)]">Organic Microalgae</span> Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Minimally processed to preserve maximum nutrients and bioactive compounds. Certified organic and sustainably produced.
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const colorClass = colorClasses[product.color];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group"
              >
                <div className={`h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border ${colorClass.border} ${colorClass.bg}`}>
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div> */}
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover md:object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      {product.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                    
                    <p className="text-gray-600 mb-5">{product.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Link to={product.link}>
                      <button className={`w-full bg-gradient-to-r ${colorClass.button} text-white font-semibold py-3 rounded-lg shadow hover:shadow-md transition`}>
                        View Product Details
                      </button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Interested in wholesale pricing or custom formulations? Contact us to discuss how our organic microalgae products can benefit your business.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition"
          >
           <Link to="/contact">Request Product Catalog</Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}