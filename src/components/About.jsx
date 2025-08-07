// import { motion } from 'framer-motion';

// export default function AboutSection() {
//   return (
//     <section className=" w-full bg-green-50 bg-[var(--soft-blue-bg) py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 flex flex-col md:flex-row items-center justify-center gap-10">

//       {/* Left: YouTube Video Embed */}
//       <motion.div 
//         className="w-full md:w-1/2 h-64 md:h-96 rounded-xl overflow-hidden shadow-lg"
//         initial={{ opacity: 0, x: -50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <iframe
//           width="100%"
//           height="100%"
//           src="https://www.youtube.com/embed/UfG8Cbpw2Po?si=nHJ-IUkFoFZMLugE"  // <-- Replace with your Video ID
//           title="About Spirulina Manufacturing"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//       </motion.div>

//       {/* Right: Text Content */}
//       <motion.div 
//         className="w-full md:w-1/2"
//         initial={{ opacity: 0, x: 50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary-green)] leading-snug">
//           We Manufacture Spirulina from Algae to Capsules
//         </h2>
//         <p className="mt-4 text-gray-600 text-base md:text-lg">
//           Our company specializes in cultivating, processing, and delivering premium quality Spirulina in powder, tablet, and capsule forms. We ensure nutrient preservation through advanced spray drying and microalgae technology, catering to global standards of purity and efficacy.
//         </p>
//         <button className="btn-primary mt-6">Read More</button>
//       </motion.div>
//     </section>
//   );
// }


import { motion } from 'framer-motion';
import { FaLeaf, FaSeedling, FaFlask, FaChartLine } from 'react-icons/fa';

export default function AboutSection() {
  const stats = [
    { value: '100%', label: 'Organic', icon: <FaLeaf className="text-green-500" /> },
    { value: '50+', label: 'Countries', icon: <FaSeedling className="text-green-500" /> },
    { value: '12', label: 'Certifications', icon: <FaFlask className="text-green-500" /> },
    { value: '98%', label: 'Satisfaction', icon: <FaChartLine className="text-green-500" /> }
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-green-100/40 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-emerald-100/30 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center text-green-600 font-medium mb-4">
            <div className="w-8 h-0.5 bg-green-500 mr-3"></div>
            ABOUT OUR PROCESS
            <div className="w-8 h-0.5 bg-green-500 ml-3"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Premium Spirulina Manufacturing
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: YouTube Video Embed */}
          <motion.div
            className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-video bg-gradient-to-r from-green-700 to-emerald-800 rounded-2xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/UfG8Cbpw2Po?si=nHJ-IUkFoFZMLugE"
                title="About Spirulina Manufacturing"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white py-2 px-6 rounded-lg shadow-lg">
              Watch Our Process
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              From <span className="text-[var(--primary-green)]">Algae Cultivation</span> to Premium Supplements
            </h2>

            <p className="text-gray-600 text-lg mb-8">
              Our state-of-the-art facilities specialize in cultivating, processing, and delivering premium quality Spirulina in powder, tablet, and capsule forms. Using advanced microalgae technology, we ensure optimal nutrient preservation while meeting global standards of purity and efficacy.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-xl border border-green-100 shadow-sm text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <div className="flex justify-center text-2xl mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg overflow-hidden group"
              >
                <span className="relative z-10">Discover Our Process</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Process Highlights */}
        {/* <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Advanced Cultivation</h3>
            <p className="text-gray-600">Patented photobioreactor technology for optimal algae growth in controlled environments.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Assurance</h3>
            <p className="text-gray-600">ISO-certified labs with 14-step quality checks from cultivation to packaging.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Sustainable Practices</h3>
            <p className="text-gray-600">Closed-loop water systems and renewable energy integration for eco-friendly production.</p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}