import { motion } from 'framer-motion';
import { FaLeaf, FaSeedling, FaHorse, FaFish, FaDove, FaCertificate, FaShippingFast, FaChartLine } from 'react-icons/fa';
import { IoNutritionOutline } from 'react-icons/io5';

export default function AnimalFeedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden bg-gradient-to-br from-green-800 to-amber-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <FaLeaf className="text-amber-300 mr-2" />
                <span className="text-sm font-medium">Premium Animal Nutrition</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                High-Performance Animal Feed
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-bold text-amber-300 mb-6 max-w-2xl">
                Scientifically Formulated for Optimal Growth & Health
              </h2>
              
              <p className="text-lg text-amber-100 mb-8 max-w-2xl">
                Our premium animal feed products are crafted with the perfect balance of nutrients, proteins, and supplements to enhance livestock productivity, improve health, and maximize your farming returns.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-amber-400 to-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg"
                >
                  Request Samples
                </motion.a>
                
                <motion.a
                  href="#benefits"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-full border border-white/30"
                >
                  View Products
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-1 flex justify-center mt-10 lg:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full max-w-md">
                <div className="bg-gradient-to-br from-green-700 to-amber-800 rounded-3xl overflow-hidden shadow-2xl border border-amber-500/20">
                  <div className="aspect-square w-full flex items-center justify-center p-8 relative">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                    <div className="relative z-10 text-center">
                      <div className="inline-flex items-center justify-center bg-amber-500/20 backdrop-blur-sm p-5 rounded-full mb-6">
                        <FaSeedling className="text-4xl text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold">Nutritional Excellence</h3>
                        <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full"></div>
                        <p className="text-amber-100 max-w-md mx-auto">
                          Balanced formulas • Enhanced digestibility • Proven results
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16">
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
              FARMING ADVANTAGES
              <div className="w-8 h-0.5 bg-green-500 ml-3"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Livestock Productivity
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our scientifically formulated feeds deliver measurable improvements in animal health and farm profitability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <IoNutritionOutline className="text-3xl text-green-600" />,
                title: "Enhanced Nutrition",
                desc: "Optimal balance of proteins, vitamins, and minerals"
              },
              {
                icon: <FaChartLine className="text-3xl text-green-600" />,
                title: "Faster Growth",
                desc: "Up to 20% faster weight gain in livestock"
              },
              {
                icon: <FaLeaf className="text-3xl text-green-600" />,
                title: "Natural Ingredients",
                desc: "Non-GMO, antibiotic-free formulations"
              },
              {
                icon: <FaShippingFast className="text-3xl text-green-600" />,
                title: "Cost Efficiency",
                desc: "Reduced feed conversion ratios save money"
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md border border-green-100 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Livestock Specific Products */}
      <section id="benefits" className="py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-br from-amber-50 to-green-50">
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
              SPECIALIZED FORMULAS
              <div className="w-8 h-0.5 bg-green-500 ml-3"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tailored Nutrition for Every Animal
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Species-specific formulas optimized for each animal's unique nutritional requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHorse className="text-4xl text-amber-600" />,
                title: "Cattle Feed",
                desc: "High-energy formulas for dairy and beef cattle",
                benefits: ["Increased milk production", "Improved weight gain", "Enhanced reproductive health"],
                color: "from-amber-500 to-amber-700"
              },
              {
                icon: <FaDove className="text-4xl text-amber-600" />,
                title: "Poultry Feed",
                desc: "Complete nutrition for layers and broilers",
                benefits: ["Stronger eggshells", "Faster growth rates", "Reduced mortality"],
                color: "from-yellow-500 to-yellow-700"
              },
              {
                icon: <FaFish className="text-4xl text-amber-600" />,
                title: "Aqua Feed",
                desc: "Floating pellets for fish and shrimp",
                benefits: ["Improved FCR", "Enhanced disease resistance", "Better water stability"],
                color: "from-cyan-500 to-blue-600"
              }
            ].map((product, index) => (
              <motion.div 
                key={index}
                className="group overflow-hidden rounded-2xl shadow-xl bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`h-48 relative bg-gradient-to-r ${product.color}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl">
                      {product.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.desc}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <FaDove className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-block bg-gradient-to-r from-green-500 to-amber-600 text-white font-medium py-2 px-6 rounded-lg"
                  >
                    Product Details
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutritional Science */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589923186200-85b53d4cbbd3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Scientifically Balanced Nutrition</h3>
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
                FEED TECHNOLOGY
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advanced Nutritional Science
              </h2>
              
              <p className="text-gray-600 mb-6">
                Our animal feed formulations are developed by animal nutrition experts using the latest research in livestock health and growth optimization. Each formula undergoes rigorous testing to ensure maximum bioavailability and digestibility.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="text-green-600 font-bold">01</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Precision Formulation</h4>
                    <p className="text-gray-600">Exact nutrient ratios tailored for each growth stage</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="text-green-600 font-bold">02</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Enhanced Palatability</h4>
                    <p className="text-gray-600">Natural flavors that encourage consumption</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="text-green-600 font-bold">03</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Gut Health Optimization</h4>
                    <p className="text-gray-600">Prebiotics and probiotics for digestive efficiency</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-b from-white to-green-50">
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
              PROVEN RESULTS
              <div className="w-8 h-0.5 bg-green-500 ml-3"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Measurable Farm Improvements
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "15-25%", label: "Increase in Milk Production", color: "bg-green-100 text-green-800" },
              { value: "18-22%", label: "Faster Weight Gain", color: "bg-amber-100 text-amber-800" },
              { value: "12-15%", label: "Lower Feed Conversion Ratio", color: "bg-cyan-100 text-cyan-800" },
              { value: "30-40%", label: "Reduction in Mortality", color: "bg-blue-100 text-blue-800" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`text-5xl font-bold mb-4 ${stat.color}`}>{stat.value}</div>
                <p className="text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-600 to-amber-700 rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Case Study: Dairy Farm Success</h3>
              <p className="mb-6 opacity-90 max-w-3xl mx-auto">
                "After switching to GreenGrowth feeds, our dairy farm saw a 22% increase in milk production 
                and a 15% reduction in feed costs within 6 months. The health of our herd has never been better."
              </p>
              <div className="font-semibold">— Rajesh Kumar, Dairy Farmer, Punjab</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center text-green-600 font-medium mb-4">
                <div className="w-8 h-0.5 bg-green-500 mr-3"></div>
                QUALITY STANDARDS
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Commitment to Excellence
              </h2>
              
              <p className="text-gray-600 mb-6">
                Our manufacturing facilities adhere to the highest international quality standards. Every batch of feed undergoes rigorous testing to ensure safety, nutritional consistency, and freedom from contaminants.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-white rounded-xl border border-green-100">
                  <FaCertificate className="text-green-500 mr-3" />
                  <span>ISO 22000 Certified</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl border border-green-100">
                  <FaLeaf className="text-green-500 mr-3" />
                  <span>Non-GMO Ingredients</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl border border-green-100">
                  <FaShippingFast className="text-green-500 mr-3" />
                  <span>Consistent Quality</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl border border-green-100">
                  <div className="w-5 h-5 rounded-full bg-green-500 mr-3"></div>
                  <span>Antibiotic-Free</span>
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
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-500 to-green-700 aspect-square rounded-2xl flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <div className="text-5xl font-bold mb-2">24/7</div>
                    <div>Quality Monitoring</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-amber-700 aspect-square rounded-2xl flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <div className="text-5xl font-bold mb-2">100%</div>
                    <div>Traceable Ingredients</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-green-800 aspect-square rounded-2xl flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <div className="text-5xl font-bold mb-2">50+</div>
                    <div>Quality Checks</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-amber-600 to-amber-800 aspect-square rounded-2xl flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <div className="text-5xl font-bold mb-2">0</div>
                    <div>Tolerance for Contaminants</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-b from-amber-50 to-white">
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
              PRODUCT RANGE
              <div className="w-8 h-0.5 bg-green-500 ml-3"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Feed Solutions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Starter Feeds",
                desc: "For young animals requiring high protein",
                features: ["Crumbles & mash forms", "Immune boosters", "Easy digestion"],
                color: "from-amber-400 to-amber-600"
              },
              {
                title: "Grower Feeds",
                desc: "Optimized for rapid development phase",
                features: ["Balanced energy-protein", "Bone development", "Muscle growth"],
                color: "from-green-500 to-green-700"
              },
              {
                title: "Finisher Feeds",
                desc: "For final growth stage before market",
                features: ["Weight optimization", "Feed efficiency", "Meat quality"],
                color: "from-yellow-500 to-yellow-700"
              }
            ].map((product, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xl border border-green-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`h-48 bg-gradient-to-r ${product.color}`}></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
                  <div className="text-green-600 font-medium mb-4">{product.desc}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaDove className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-block w-full text-center bg-gradient-to-r from-green-500 to-amber-600 text-white font-medium py-3 rounded-lg"
                  >
                    Request Specifications
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-r from-green-800 to-amber-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Optimize Your Livestock Operation
            </h2>
            <p className="text-amber-200 max-w-2xl mx-auto mb-10 text-lg">
              Contact us today for product specifications, bulk pricing, and nutritional consultation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-400 to-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg"
              >
                Request a Quote
              </motion.a>
              <motion.a
                href="/samples"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-full border border-white/30"
              >
                Order Samples
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}