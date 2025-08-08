// import { motion } from 'framer-motion';
// import { FaGlobeAsia, FaCertificate, FaFlask, FaLeaf } from 'react-icons/fa';

// export default function QualitySection() {
//   const stats = [
//     {
//       icon: <FaFlask className="text-4xl text-[var(--accent-blue)]" />,
//       number: '15+',
//       title: 'Years Experience',
//       desc: 'Microalgae Technology & Research Expertise.',
//     },
//     {
//       icon: <FaGlobeAsia className="text-4xl text-[var(--accent-blue)]" />,
//       number: '25+',
//       title: 'Countries Served',
//       desc: 'Trusted by clients worldwide for Spirulina products.',
//     },
//     {
//       icon: <FaCertificate className="text-4xl text-[var(--accent-blue)]" />,
//       number: '99%',
//       title: 'Quality Consistency',
//       desc: 'Delivering batch-to-batch premium quality assurance.',
//     },
//     {
//       icon: <FaLeaf className="text-4xl text-[var(--accent-blue)]" />,
//       number: '1st',
//       title: 'Largest Manufacturer',
//       desc: 'Leading Organic Spirulina Manufacturer in the region.',
//     },
//   ];

//   return (
//     <section className="w-full bg-yellow-50 bg-[var(--soft-blue-bg)] py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary-green)]">Our Quality Assurance Systems</h2>
//         <p className="mt-4 text-gray-600 md:text-lg">We adhere to the highest global standards ensuring quality & consistency.</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//         {stats.map((item, index) => (
//           <motion.div
//             key={index}
//             className="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 transition"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//           >
//             <div className="mb-4 flex justify-center">{item.icon}</div>
//             <h3 className="text-4xl font-bold text-[var(--primary-green)]">{item.number}</h3>
//             <p className="text-xl font-semibold mt-2">{item.title}</p>
//             <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// import { motion } from 'framer-motion';
// import { FaFlask, FaLeaf, FaShieldAlt, FaChartLine, FaMicroscope, FaVial } from 'react-icons/fa';

// export default function QualitySection() {
//   const qualityProcess = [
//     {
//       step: 1,
//       icon: <FaLeaf className="text-3xl text-white" />,
//       title: "Premium Strain Selection",
//       description: "Careful selection of premium spirulina strains with optimal nutritional profiles for cultivation.",
//       color: "bg-gradient-to-br from-green-500 to-emerald-600"
//     },
//     {
//       step: 2,
//       icon: <FaFlask className="text-3xl text-white" />,
//       title: "Controlled Cultivation",
//       description: "Precision-controlled environments to ensure pure, contaminant-free growth under optimal conditions.",
//       color: "bg-gradient-to-br from-blue-500 to-cyan-600"
//     },
//     {
//       step: 3,
//       icon: <FaMicroscope className="text-3xl text-white" />,
//       title: "Gentle Processing",
//       description: "Low-temperature spray drying to preserve vital nutrients, enzymes, and bioactive compounds.",
//       color: "bg-gradient-to-br from-purple-500 to-indigo-600"
//     },
//     {
//       step: 4,
//       icon: <FaVial className="text-3xl text-white" />,
//       title: "Rigorous Testing",
//       description: "14-step quality checks for purity, potency, and safety in ISO-certified laboratories.",
//       color: "bg-gradient-to-br from-amber-500 to-yellow-600"
//     }
//   ];

//   const qualityPrinciples = [
//     {
//       icon: <FaShieldAlt className="text-3xl text-green-500" />,
//       title: "Purity Guarantee",
//       description: "Zero contaminants, heavy metals, pesticides, or artificial additives in any product."
//     },
//     {
//       icon: <FaChartLine className="text-3xl text-green-500" />,
//       title: "Consistency",
//       description: "Batch-to-batch consistency in nutritional profile and product quality."
//     },
//     {
//       icon: <FaFlask className="text-3xl text-green-500" />,
//       title: "Traceability",
//       description: "Complete supply chain transparency from cultivation to final product."
//     }
//   ];

//   return (
//     <section className="w-full py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-green-100/30 blur-3xl -z-10"></div>
//       <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-emerald-100/20 blur-3xl -z-10"></div>
      
//       <div className="max-w-7xl mx-auto">
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="inline-flex items-center text-green-600 font-medium mb-4">
//             <div className="w-8 h-0.5 bg-green-500 mr-3"></div>
//             QUALITY EXCELLENCE
//             <div className="w-8 h-0.5 bg-green-500 ml-3"></div>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Our <span className="text-[var(--primary-green)]">Quality Assurance</span> Process
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             From strain selection to final product, we maintain rigorous quality control at every step to ensure premium organic spirulina.
//           </p>
//           <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>
//         </motion.div>

//         {/* Quality Process Steps */}
//         <div className="relative mb-20">
//           {/* Timeline */}
//           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-green-200 -translate-x-1/2"></div>
          
//           <div className="space-y-12 md:space-y-24">
//             {qualityProcess.map((step, index) => (
//               <motion.div
//                 key={index}
//                 className="flex flex-col md:flex-row items-center"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} mb-8 md:mb-0`}>
//                   <div className={`inline-block ${step.color} p-1 rounded-2xl`}>
//                     <div className="bg-white p-6 rounded-xl shadow-lg">
//                       <div className="flex items-center mb-4">
//                         <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold mr-4">
//                           {step.step}
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
//                       </div>
//                       <p className="text-gray-600">{step.description}</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="w-full md:w-1/2 flex justify-center">
//                   <div className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center shadow-xl`}>
//                     {step.icon}
//                   </div>
//                 </div>
                
//                 <div className="w-full md:w-1/2"></div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Quality Principles */}
//         <motion.div 
//           className="bg-gradient-to-r from-green-700 to-emerald-800 rounded-2xl p-8 md:p-12 text-white"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="text-center mb-10">
//             <h3 className="text-2xl font-bold mb-4">Core Quality Principles</h3>
//             <p className="text-green-200 max-w-2xl mx-auto">
//               Our commitment to quality is built on three foundational principles that guide every aspect of our production.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {qualityPrinciples.map((principle, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <div className="flex justify-center mb-4">
//                   {principle.icon}
//                 </div>
//                 <h4 className="text-xl font-bold text-center mb-3">{principle.title}</h4>
//                 <p className="text-green-100 text-center">{principle.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Quality Assurance Systems */}
//         <motion.div 
//           className="mt-20"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="flex flex-col lg:flex-row items-center gap-12">
//             <div className="w-full lg:w-1/2">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Quality Assurance Systems</h3>
              
//               <div className="space-y-6">
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-4">
//                     01
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-800 mb-2">Automated Monitoring</h4>
//                     <p className="text-gray-600">Real-time monitoring of cultivation parameters for optimal growth conditions.</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-4">
//                     02
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-800 mb-2">Microbiological Testing</h4>
//                     <p className="text-gray-600">Comprehensive testing for pathogens and microbial contaminants.</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-4">
//                     03
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-800 mb-2">Heavy Metal Screening</h4>
//                     <p className="text-gray-600">Rigorous screening for heavy metals to ensure product safety.</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-4">
//                     04
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-800 mb-2">Nutritional Profiling</h4>
//                     <p className="text-gray-600">Detailed analysis to verify nutritional content and potency.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="w-full lg:w-1/2">
//               <div className="relative">
//                 <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
//                   <div className="text-center p-8 text-white">
//                     <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm p-6 rounded-full mb-6">
//                       <FaShieldAlt className="text-4xl" />
//                     </div>
//                     <h3 className="text-2xl font-bold mb-4">Quality First Approach</h3>
//                     <p className="max-w-md mx-auto">
//                       Our integrated quality management systems ensure every batch meets our strict standards for purity and potency.
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center shadow-lg">
//                   <FaChartLine className="text-xl text-white" />
//                 </div>
//                 <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
//                   <FaFlask className="text-xl text-white" />
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
import { FaFlask, FaLeaf, FaShieldAlt, FaChartLine, FaVial } from 'react-icons/fa';

export default function QualitySection() {
  const qualityStats = [
    {
      icon: <FaFlask className="text-3xl text-white" />,
      value: '15+',
      label: 'Years Experience',
      desc: 'Microalgae research expertise',
      bg: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      icon: <FaLeaf className="text-3xl text-white" />,
      value: '99%',
      label: 'Quality Consistency',
      desc: 'Batch-to-batch premium quality',
      bg: 'bg-gradient-to-br from-green-500 to-emerald-500'
    },
    {
      icon: <FaShieldAlt className="text-3xl text-white" />,
      value: '14',
      label: 'Quality Checks',
      desc: 'Rigorous testing process',
      bg: 'bg-gradient-to-br from-amber-500 to-yellow-500'
    },
    {
      icon: <FaChartLine className="text-3xl text-white" />,
      value: '0',
      label: 'Contaminants',
      desc: 'Pure, safe products',
      bg: 'bg-gradient-to-br from-purple-500 to-indigo-500'
    }
  ];

  const qualityPrinciples = [
    {
      icon: <FaShieldAlt className="text-2xl text-green-500" />,
      title: "Purity Guarantee",
      description: "Zero contaminants, heavy metals, or pesticides"
    },
    {
      icon: <FaChartLine className="text-2xl text-green-500" />,
      title: "Consistency",
      description: "Batch-to-batch quality consistency"
    },
    {
      icon: <FaVial className="text-2xl text-green-500" />,
      title: "Traceability",
      description: "Full supply chain transparency"
    }
  ];

  return (
    <section id="quality" className="w-full py-8 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-green-100/30 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-emerald-100/20 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center text-green-600 font-medium mb-3">
            <div className="w-6 h-0.5 bg-green-500 mr-2"></div>
            QUALITY EXCELLENCE
            <div className="w-6 h-0.5 bg-green-500 ml-2"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[var(--primary-green)]">Quality Commitment</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Rigorous processes ensuring premium organic spirulina through every production stage.
          </p>
        </motion.div>

        {/* Quality Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {qualityStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <div className={`h-full rounded-xl overflow-hidden shadow-lg ${stat.bg} text-white p-6 text-center`}>
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-1">{stat.value}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm opacity-90">{stat.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Process */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 mb-14 border border-green-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Our Quality Assurance Process</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Strain Selection</h4>
                    <p className="text-gray-600 text-sm">Premium spirulina strains with optimal nutrition</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Controlled Cultivation</h4>
                    <p className="text-gray-600 text-sm">Precision environments for pure growth</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Gentle Processing</h4>
                    <p className="text-gray-600 text-sm">Low-temperature drying to preserve nutrients</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Rigorous Testing</h4>
                    <p className="text-gray-600 text-sm">14-step quality checks in ISO labs</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl overflow-hidden aspect-square w-64 flex items-center justify-center">
                  <div className="text-center p-6 text-white">
                    <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm p-4 rounded-full mb-4">
                      <FaShieldAlt className="text-3xl" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Quality First</h3>
                    <p className="text-sm max-w-xs">
                      Integrated systems ensuring every batch meets strict purity standards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Principles */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {qualityPrinciples.map((principle, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  {principle.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{principle.title}</h3>
              </div>
              <p className="text-gray-600">{principle.description}</p>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
}