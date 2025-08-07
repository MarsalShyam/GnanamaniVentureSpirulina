import { motion } from 'framer-motion';
import { FaLeaf, FaCheck, FaShippingFast, FaCertificate, FaSeedling } from 'react-icons/fa';

export default function Spirulina() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 overflow-hidden bg-gradient-to-r from-green-900 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <FaLeaf className="text-green-300 mr-2" />
                  <span className="text-sm font-medium">Premium Organic Spirulina</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Spirulina Supplier in India
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-bold text-green-300 mb-6">
                  Manufacturers of Organic Spirulina Powder, Tablets, Capsules
                </h2>
                
                <p className="text-lg text-green-100 mb-8 max-w-2xl">
                  Spirulina is one of nature's most potent superfoods, containing maximum nutrition required by the human body. This blue-green algae is rich in B vitamins, beta-carotene, vitamin E, and contains more than 60% complete protein.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold px-8 py-4 rounded-full shadow-lg"
                  >
                    Enquire Now
                  </motion.a>
                  
                  <motion.a
                    href="#benefits"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full border border-white/30"
                  >
                    View Benefits
                  </motion.a>
                </div>
              </motion.div>
            </div>
            
            <div className="flex-1 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-lg"
              >
                <div className="bg-gradient-to-br from-green-700 to-emerald-800 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="aspect-square w-full bg-gradient-to-b from-emerald-700 to-green-800 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm p-6 rounded-full mb-6">
                        <FaLeaf className="text-4xl text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Premium Organic Spirulina</h3>
                      <p className="text-green-100 max-w-md mx-auto">
                        Pure, nutrient-rich spirulina cultivated sustainably in India
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Spirulina Section */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl overflow-hidden aspect-square">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-70"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"></div>
                  <div className="absolute inset-0 flex items-end p-8">
                    <h3 className="text-2xl font-bold text-white">Arthrospira platensis</h3>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-6 py-3 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <FaSeedling className="mr-2" />
                    <span>Natural Superfood</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center text-green-600 font-medium mb-4">
                <div className="w-8 h-0.5 bg-green-500 mr-3"></div>
                ABOUT SPIRULINA
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nature's Nutritional Powerhouse
              </h2>
              
              <p className="text-gray-600 mb-6">
                Spirulina (Arthrospira platensis) is a microscopic freshwater organism known for its exceptional nutritional profile. This blue-green algae contains more protein than any conventional food source and is rich in B vitamins, beta-carotene, and essential minerals.
              </p>
              
              <p className="text-gray-600 mb-8">
                Recognized by the World Health Organization as the "best food for tomorrow," spirulina is an ideal solution to combat malnutrition. Unlike animal proteins, it contains no saturated fats or antibiotics, making it a clean, sustainable protein source.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>60-70% Complete Protein</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Rich in Antioxidants</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Essential Vitamins & Minerals</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>No Saturated Fats</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cultivation Section */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="w-full lg:w-1/2 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center text-green-600 font-medium mb-4">
                <div className="w-8 h-0.5 bg-green-500 mr-3"></div>
                SUSTAINABLE CULTIVATION
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Precision-Grown Organic Spirulina
              </h2>
              
              <p className="text-gray-600 mb-6">
                We cultivate our spirulina in carefully controlled environments that mimic its natural subtropical habitat. Our algae thrives in warm alkaline water maintained at 30-35°C with optimal sunlight exposure throughout the year.
              </p>
              
              <p className="text-gray-600 mb-8">
                Unlike wild varieties, our organic spirulina is grown in specialized tanks to ensure purity and consistency. We maintain strict water quality standards and monitor light exposure to maximize protein content and nutritional value.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-xl border border-green-100 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-2">Quality Control</h3>
                  <p className="text-gray-600 text-sm">14-step quality checks from cultivation to packaging</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-green-100 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-2">Sustainability</h3>
                  <p className="text-gray-600 text-sm">Closed-loop water systems and renewable energy</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/2 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-70"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent"></div>
                  <div className="absolute inset-0 flex items-end p-8">
                    <h3 className="text-2xl font-bold text-white">Sustainable Cultivation Process</h3>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white px-6 py-3 rounded-lg shadow-lg border border-green-200">
                  <div className="flex items-center">
                    <FaLeaf className="text-green-600 mr-2" />
                    <span className="font-semibold">Certified Organic</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center text-green-600 font-medium mb-4">
              <div className="w-8 h-0.5 bg-green-500 mr-3"></div>
              HEALTH BENEFITS
              <div className="w-8 h-0.5 bg-green-500 ml-3"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Power of Organic Spirulina
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the remarkable health benefits of our premium spirulina in various forms
            </p>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          {/* Tablets Benefits */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1628026556770-15e5ac2a7ae4?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-80"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="text-2xl font-bold text-white">Organic Spirulina Tablets</h3>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Benefits of Organic Spirulina Tablets
              </h2>
              
              <p className="text-gray-600 mb-6">
                Our spirulina tablets preserve all the nutritional benefits in a convenient form. Perfect for daily supplementation, they provide a concentrated dose of essential nutrients.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-600"><span className="font-semibold">Antioxidant Protection:</span> Fights oxidative damage and reduces cancer risk</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-600"><span className="font-semibold">Heart Health:</span> Lowers bad cholesterol (LDL) levels</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-600"><span className="font-semibold">Anti-cancer Properties:</span> Reduces tumor size and fights oral cancer</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-600"><span className="font-semibold">Blood Pressure Control:</span> Helps maintain healthy blood pressure levels</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-600"><span className="font-semibold">Diabetes Management:</span> Aids in blood sugar regulation</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Powder Benefits */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <motion.div 
              className="w-full lg:w-1/2 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Benefits of Organic Spirulina Powder
              </h2>
              
              <p className="text-gray-600 mb-6">
                Our premium spirulina powder is versatile and easily incorporated into your daily diet. Add it to smoothies, juices, or recipes for a nutritional boost.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-600"><span className="font-semibold">Immune Support:</span> Enhances natural defense mechanisms</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-600"><span className="font-semibold">Detoxification:</span> Helps eliminate heavy metals from the body</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-600"><span className="font-semibold">Energy Boost:</span> Increases stamina and reduces fatigue</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-600"><span className="font-semibold">Anti-aging:</span> Fights free radicals and supports skin health</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-600"><span className="font-semibold">Digestive Health:</span> Promotes healthy gut flora</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/2 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-500">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-80"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="text-2xl font-bold text-white">Organic Spirulina Powder</h3>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Capsules Benefits */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-80"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="text-2xl font-bold text-white">Organic Spirulina Capsules</h3>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Benefits of Organic Spirulina Capsules
              </h2>
              
              <p className="text-gray-600 mb-6">
                Our spirulina capsules offer all the nutritional benefits in an easy-to-swallow form, perfect for those with busy lifestyles who want to maintain their health regimen.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-600"><span className="font-semibold">Convenient Nutrition:</span> Pre-measured doses for consistent intake</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-600"><span className="font-semibold">Odorless & Tasteless:</span> Ideal for those sensitive to spirulina's natural taste</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-600"><span className="font-semibold">Enhanced Absorption:</span> Optimized for maximum nutrient uptake</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-600"><span className="font-semibold">Portable Health:</span> Easy to carry and take anywhere</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-600"><span className="font-semibold">Long Shelf Life:</span> Maintains potency for extended periods</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packaging Section */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl overflow-hidden aspect-square"></div>
                <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl overflow-hidden aspect-square"></div>
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl overflow-hidden aspect-square"></div>
                <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
                  <FaShippingFast className="text-4xl text-gray-600" />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center text-green-600 font-medium mb-4">
                <div className="w-8 h-0.5 bg-green-500 mr-3"></div>
                ECO-FRIENDLY PACKAGING
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sustainable Packaging Solutions
              </h2>
              
              <p className="text-gray-600 mb-6">
                We package our premium spirulina products in environmentally friendly materials that preserve freshness while minimizing our ecological footprint.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <FaLeaf className="text-green-500" />
                  </div>
                  <span className="text-gray-600"><span className="font-semibold">Recyclable Materials:</span> Glass jars and biodegradable pouches</span>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <FaCertificate className="text-green-500" />
                  </div>
                  <span className="text-gray-600"><span className="font-semibold">Quality Preservation:</span> UV-protected containers to maintain potency</span>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <FaShippingFast className="text-green-500" />
                  </div>
                  <span className="text-gray-600"><span className="font-semibold">Global Distribution:</span> Secure packaging for international shipping</span>
                </div>
              </div>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg"
              >
                Request Packaging Details
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-r from-green-700 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Premium Spirulina?
            </h2>
            <p className="text-green-200 max-w-2xl mx-auto mb-10 text-lg">
              Contact us today to discuss your requirements and receive samples of our organic spirulina products.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold px-8 py-4 rounded-full shadow-lg"
            >
              Request a Quote
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}