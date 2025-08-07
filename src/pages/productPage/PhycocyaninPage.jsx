import { motion } from 'framer-motion';
import { FaLeaf, FaFlask, FaIndustry, FaCapsules, FaBeer, FaShieldAlt, FaCertificate, FaShippingFast,FaCheck } from 'react-icons/fa';

export default function PhycocyaninPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Modern Hero Section */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden bg-gradient-to-br from-blue-900 to-cyan-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/30 to-cyan-800/30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <FaLeaf className="text-cyan-300 mr-2" />
                <span className="text-sm font-medium">Premium Natural Extract</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Pure Phycocyanin Extract
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-6 max-w-2xl">
                Nature's Potent Blue Antioxidant from Spirulina
              </h2>
              
              <p className="text-lg text-blue-100 mb-8 max-w-2xl">
                Phycocyanin is the vibrant blue pigment-protein complex found in spirulina. With exceptional antioxidant and anti-inflammatory properties, it's revolutionizing nutraceuticals, cosmetics, and food industries.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg"
                >
                  Request Samples
                </motion.a>
                
                <motion.a
                  href="#benefits"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-full border border-white/30"
                >
                  Learn More
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
                <div className="bg-gradient-to-br from-blue-700 to-cyan-800 rounded-3xl overflow-hidden shadow-2xl border border-cyan-500/20">
                  <div className="aspect-square w-full flex items-center justify-center p-8 relative">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1628026556770-15e5ac2a7ae4?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                    <div className="relative z-10 text-center">
                      <div className="inline-flex items-center justify-center bg-cyan-500/20 backdrop-blur-sm p-5 rounded-full mb-6">
                        <FaFlask className="text-4xl text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold">Phycocyanin Extract</h3>
                        <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full"></div>
                        <p className="text-cyan-100 max-w-md mx-auto">
                          High purity • Water soluble • Natural blue pigment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-cyan-500/20 backdrop-blur-sm"></div>
        <div className="absolute bottom-40 left-10 w-12 h-12 rounded-full bg-blue-500/20 backdrop-blur-sm"></div>
      </section>

      {/* What is Phycocyanin Section */}
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
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1628026556770-15e5ac2a7ae4?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-80"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">The Science of Blue</h3>
                </div>
                <div className="absolute top-6 right-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <FaFlask className="mr-2" />
                    <span>Natural Pigment</span>
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
              <div className="inline-flex items-center text-cyan-600 font-medium mb-4">
                <div className="w-8 h-0.5 bg-cyan-500 mr-3"></div>
                ABOUT PHYCOCYANIN
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nature's Blue Supermolecule
              </h2>
              
              <p className="text-gray-600 mb-6">
                Phycocyanin is a water-soluble blue pigment-protein complex found exclusively in cyanobacteria like spirulina. It's responsible for spirulina's distinctive blue-green color and possesses remarkable bioactive properties.
              </p>
              
              <p className="text-gray-600 mb-8">
                Our premium phycocyanin is extracted using a proprietary cold-process method that preserves its molecular integrity and bioactive potential. With purity levels exceeding 95%, it's ideal for sensitive applications in nutraceuticals, cosmetics, and food industries.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <FaCheck className="text-cyan-500 mr-2" />
                  <span>Potent Antioxidant</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-cyan-500 mr-2" />
                  <span>Anti-inflammatory</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-cyan-500 mr-2" />
                  <span>Neuroprotective</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-cyan-500 mr-2" />
                  <span>100% Water Soluble</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Extraction Process */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center text-cyan-600 font-medium mb-4">
              <div className="w-8 h-0.5 bg-cyan-500 mr-3"></div>
              OUR PROCESS
              <div className="w-8 h-0.5 bg-cyan-500 ml-3"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gentle Extraction Technology
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Preserving nature's delicate blue pigment through advanced cold-processing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLeaf className="text-3xl text-cyan-600" />,
                title: "Organic Cultivation",
                desc: "Spirulina grown in controlled environments without pesticides or contaminants"
              },
              {
                icon: <FaFlask className="text-3xl text-cyan-600" />,
                title: "Cold-Water Extraction",
                desc: "Low-temperature process preserves molecular structure and bioactivity"
              },
              {
                icon: <FaIndustry className="text-3xl text-cyan-600" />,
                title: "Membrane Filtration",
                desc: "Advanced purification ensures high concentration and purity levels"
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Purity & Quality Assurance</h3>
              <p className="mb-6 opacity-90">Our phycocyanin undergoes rigorous testing to ensure it meets the highest standards for purity, concentration, and safety.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">HPLC Verified</div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Heavy Metal Free</div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Non-GMO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center text-cyan-600 font-medium mb-4">
              <div className="w-8 h-0.5 bg-cyan-500 mr-3"></div>
              INDUSTRY APPLICATIONS
              <div className="w-8 h-0.5 bg-cyan-500 ml-3"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Versatile Natural Solution
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Phycocyanin's unique properties make it ideal for diverse industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCapsules className="text-3xl text-cyan-600" />,
                title: "Nutraceuticals",
                desc: "Antioxidant supplements, immune boosters, and anti-inflammatory formulations",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: <FaIndustry className="text-3xl text-cyan-600" />,
                title: "Cosmetics",
                desc: "Anti-aging serums, brightening creams, and protective formulations",
                color: "from-violet-500 to-purple-600"
              },
              {
                icon: <FaBeer className="text-3xl text-cyan-600" />,
                title: "Food & Beverage",
                desc: "Natural blue colorant for confectionery, dairy, and functional drinks",
                color: "from-amber-400 to-yellow-500"
              }
            ].map((app, index) => (
              <motion.div 
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-90`}></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:bg-white/30 transition-all">
                      {app.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{app.title}</h3>
                    <p className="text-white/80">{app.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-cyan-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Key Health Benefits</h3>
                
                <div className="space-y-6">
                  {[
                    "Powerful antioxidant that neutralizes free radicals",
                    "Reduces inflammation throughout the body",
                    "Supports liver health and detoxification",
                    "Enhances immune system function",
                    "Protects neurons and supports brain health",
                    "Promotes healthy aging at cellular level"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
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
              <div className="inline-flex items-center text-cyan-600 font-medium mb-4">
                <div className="w-8 h-0.5 bg-cyan-500 mr-3"></div>
                SCIENTIFIC VALIDATION
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Research-Backed Efficacy
              </h2>
              
              <p className="text-gray-600 mb-6">
                Phycocyanin's health benefits are supported by numerous scientific studies. Its unique molecular structure allows it to interact with biological systems in ways synthetic compounds cannot.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-gray-800 mb-2">Antioxidant Capacity</h3>
                  <p className="text-gray-600">Phycocyanin has an ORAC value 20x higher than vitamin C and 16x higher than vitamin E, making it one of nature's most potent antioxidants.</p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-gray-800 mb-2">Bioavailability</h3>
                  <p className="text-gray-600">Its water-soluble nature ensures excellent absorption and utilization by the human body.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Options */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center text-cyan-600 font-medium mb-4">
              <div className="w-8 h-0.5 bg-cyan-500 mr-3"></div>
              PRODUCT FORMS
              <div className="w-8 h-0.5 bg-cyan-500 ml-3"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tailored to Your Needs
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Liquid Extract",
                concentration: "10-20% Phycocyanin",
                features: ["Ideal for beverages", "Easy to incorporate", "High bioavailability"],
                color: "from-cyan-500 to-blue-600"
              },
              {
                title: "Powder Form",
                concentration: "20-40% Phycocyanin",
                features: ["Long shelf life", "Versatile applications", "Concentrated formula"],
                color: "from-blue-500 to-indigo-600"
              },
              {
                title: "Crystalline",
                concentration: "95%+ Phycocyanin",
                features: ["Pharmaceutical grade", "Maximum potency", "Research applications"],
                color: "from-violet-500 to-purple-600"
              }
            ].map((product, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xl border border-blue-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`h-4 bg-gradient-to-r ${product.color}`}></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
                  <div className="text-cyan-600 font-medium mb-4">{product.concentration}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-cyan-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium py-3 rounded-lg"
                  >
                    Request Details
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center text-cyan-600 font-medium mb-4">
                <div className="w-8 h-0.5 bg-cyan-500 mr-3"></div>
                QUALITY ASSURANCE
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Certified Excellence
              </h2>
              
              <p className="text-gray-600 mb-6">
                Our phycocyanin production meets the highest international standards for quality, safety, and sustainability.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-white rounded-xl border border-blue-100">
                  <FaShieldAlt className="text-cyan-500 mr-3" />
                  <span>GMP Certified</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl border border-blue-100">
                  <FaCertificate className="text-cyan-500 mr-3" />
                  <span>ISO 22000</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl border border-blue-100">
                  <FaLeaf className="text-cyan-500 mr-3" />
                  <span>Organic Certified</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl border border-blue-100">
                  <FaShippingFast className="text-cyan-500 mr-3" />
                  <span>Global Export</span>
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
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 aspect-square rounded-2xl flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <div className="text-5xl font-bold mb-2">99%</div>
                    <div>Heavy Metal Free</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 aspect-square rounded-2xl flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <div className="text-5xl font-bold mb-2">100%</div>
                    <div>Water Soluble</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 aspect-square rounded-2xl flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <div className="text-5xl font-bold mb-2">24+</div>
                    <div>Months Stability</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-cyan-600 to-teal-700 aspect-square rounded-2xl flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <div className="text-5xl font-bold mb-2">50+</div>
                    <div>Countries Served</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-r from-blue-800 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience Nature's Blue Power
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto mb-10 text-lg">
              Contact us today for product specifications, pricing, and samples of our premium phycocyanin extract.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg"
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