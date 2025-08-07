import { motion } from 'framer-motion';
import { FaLeaf, FaCheck, FaFlask, FaSeedling, FaHeart, FaIndustry, FaChartLine, FaBolt } from 'react-icons/fa';

export default function ChlorellaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 overflow-hidden bg-gradient-to-r from-emerald-900 to-green-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605311369380-0c9a7f8a3b0d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <FaLeaf className="text-emerald-300 mr-2" />
                  <span className="text-sm font-medium">Organic Chlorella</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Premium Chlorella Supplier
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-bold text-emerald-300 mb-6">
                  Pure Chlorella Powder & Tablets for Manufacturers
                </h2>
                
                <p className="text-lg text-emerald-100 mb-8 max-w-2xl">
                  Experience the nutritional power of nature's perfect green superfood. Our premium Chlorella is cultivated for maximum nutrient density, detoxification properties, and bioavailability.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg"
                  >
                    Request Samples
                  </motion.a>
                  
                  <motion.a
                    href="#benefits"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full border border-white/30"
                  >
                    View Specifications
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
                <div className="bg-gradient-to-br from-emerald-700 to-green-800 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="aspect-square w-full bg-gradient-to-b from-green-800 to-emerald-900 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm p-6 rounded-full mb-6">
                        <FaLeaf className="text-4xl text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Chlorella Vulgaris</h3>
                      <p className="text-emerald-100 max-w-md mx-auto">
                        Nature's most nutrient-dense superfood with complete protein profile
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Chlorella Section */}
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
                <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl overflow-hidden aspect-square">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620509401092-6d9a0f3f0c8a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-70"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent"></div>
                  <div className="absolute inset-0 flex items-end p-8">
                    <h3 className="text-2xl font-bold text-white">Chlorella Growth Factor (CGF)</h3>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <FaSeedling className="mr-2" />
                    <span>Nature's Nutrient Powerhouse</span>
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
              <div className="inline-flex items-center text-emerald-600 font-medium mb-4">
                <div className="w-8 h-0.5 bg-emerald-500 mr-3"></div>
                THE POWER OF GREEN
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nature's Ultimate Detoxifier
              </h2>
              
              <p className="text-gray-600 mb-6">
                Chlorella is a single-celled green algae packed with chlorophyll, vitamins, minerals, and antioxidants. Its unique cell wall binds to heavy metals and toxins, making it one of nature's most powerful detoxification agents.
              </p>
              
              <p className="text-gray-600 mb-8">
                Our chlorella undergoes a specialized process to break down its tough cell wall, maximizing nutrient absorption while maintaining its detoxification properties. This results in a product with superior bioavailability and nutritional value.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <FaCheck className="text-emerald-500 mr-2" />
                  <span>60% Complete Protein</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-emerald-500 mr-2" />
                  <span>Rich in Chlorophyll</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-emerald-500 mr-2" />
                  <span>Bioavailable Nutrients</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-emerald-500 mr-2" />
                  <span>Natural Detoxification</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cultivation Process */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="w-full lg:w-1/2 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center text-emerald-600 font-medium mb-4">
                <div className="w-8 h-0.5 bg-emerald-500 mr-3"></div>
                SUSTAINABLE CULTIVATION
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pure Water Cultivation Technology
              </h2>
              
              <p className="text-gray-600 mb-6">
                Our chlorella is cultivated in pristine freshwater environments using proprietary photobioreactor technology. This closed-system approach ensures purity, prevents contamination, and maximizes nutrient density.
              </p>
              
              <p className="text-gray-600 mb-8">
                By controlling light exposure, temperature, and nutrient balance, we produce chlorella with consistently high levels of chlorophyll, proteins, and the unique Chlorella Growth Factor (CGF).
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-2">Controlled Environment</h3>
                  <p className="text-gray-600 text-sm">Optimized conditions for maximum nutrient density</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-2">Purity</h3>
                  <p className="text-gray-600 text-sm">Zero heavy metals, pesticides, or contaminants</p>
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
                <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620509401092-6d9a0f3f0c8a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-70"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-transparent"></div>
                  <div className="absolute inset-0 flex items-end p-8">
                    <h3 className="text-2xl font-bold text-white">Advanced Photobioreactors</h3>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white px-6 py-3 rounded-lg shadow-lg border border-emerald-200">
                  <div className="flex items-center">
                    <FaIndustry className="text-emerald-600 mr-2" />
                    <span className="font-semibold">ISO 22000 Certified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center text-emerald-600 font-medium mb-4">
              <div className="w-8 h-0.5 bg-emerald-500 mr-3"></div>
              VERSATILE APPLICATIONS
              <div className="w-8 h-0.5 bg-emerald-500 ml-3"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where Nutrition Meets Function
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the diverse applications of our premium chlorella across industries
            </p>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Dietary Supplements",
                icon: <FaHeart className="text-3xl text-emerald-500" />,
                description: "Enhance nutritional formulations with nature's most complete green superfood for detox and vitality",
                applications: ["Detox supplements", "Immune boosters", "Energy formulas", "Whole food vitamins"]
              },
              {
                title: "Functional Foods",
                icon: <FaLeaf className="text-3xl text-green-500" />,
                description: "Incorporate into health foods for added protein, vitamins, and detoxification properties",
                applications: ["Protein bars", "Green powders", "Smoothie mixes", "Nutritional snacks"]
              },
              {
                title: "Animal Nutrition",
                icon: <FaSeedling className="text-3xl text-amber-500" />,
                description: "Improve animal health and growth with nutrient-dense chlorella additives",
                applications: ["Aquaculture feed", "Pet supplements", "Livestock nutrition", "Poultry health"]
              }
            ].map((app, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-emerald-100 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
                    {app.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
                  <p className="text-gray-600 mb-6">{app.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-3">Common Applications:</h4>
                  <ul className="space-y-2">
                    {app.applications.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center text-emerald-600 font-medium mb-4">
              <div className="w-8 h-0.5 bg-emerald-500 mr-3"></div>
              HEALTH BENEFITS
              <div className="w-8 h-0.5 bg-emerald-500 ml-3"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Power of Chlorella
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Scientifically-backed health benefits of our premium chlorella
            </p>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Heavy Metal Detox",
                description: "Binds to heavy metals like mercury and lead, facilitating their removal from the body",
                icon: <FaFlask className="text-3xl text-emerald-500" />
              },
              {
                title: "Immune Support",
                description: "Enhances immune function by increasing natural killer cell activity and antibody production",
                icon: <FaHeart className="text-3xl text-red-500" />
              },
              {
                title: "Cellular Repair",
                description: "Rich in nucleic acids that support cellular regeneration and DNA repair",
                icon: <FaSeedling className="text-3xl text-green-500" />
              },
              {
                title: "Digestive Health",
                description: "Promotes growth of beneficial gut bacteria and supports digestive function",
                icon: <FaChartLine className="text-3xl text-amber-500" />
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Research Section */}
          <div className="bg-gradient-to-r from-emerald-700 to-green-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-6">Scientific Validation</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Detoxification Power</h4>
                      <p className="text-emerald-100">Study in Journal of Medicinal Food shows chlorella effectively removes heavy metals from the body</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Immune Enhancement</h4>
                      <p className="text-emerald-100">Research in Nutrition Journal demonstrates 40% increase in immune activity with daily supplementation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Antioxidant Properties</h4>
                      <p className="text-emerald-100">Clinical study shows significant reduction in oxidative stress markers with chlorella consumption</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full w-56 h-56 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full w-44 h-44 flex items-center justify-center">
                        <div className="bg-white/30 backdrop-blur-sm rounded-full w-32 h-32 flex items-center justify-center">
                          <div className="bg-white text-emerald-900 rounded-full w-20 h-20 flex items-center justify-center font-bold text-center text-sm">
                            Clinically Proven Benefits
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center text-emerald-600 font-medium mb-4">
              <div className="w-8 h-0.5 bg-emerald-500 mr-3"></div>
              TECHNICAL SPECIFICATIONS
              <div className="w-8 h-0.5 bg-emerald-500 ml-3"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Quality Standards
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our chlorella meets the highest industry standards for purity and potency
            </p>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Specifications</h3>
                <div className="space-y-4">
                  {[
                    { label: "Form", value: "Fine Powder (100-200 mesh)" },
                    { label: "Color", value: "Deep Emerald Green" },
                    { label: "Protein Content", value: "58-62%" },
                    { label: "Chlorophyll Content", value: "3-4%" },
                    { label: "CGF Content", value: "18-22%" },
                    { label: "Moisture", value: "≤ 7%" },
                    { label: "Shelf Life", value: "24 months" },
                    { label: "Packaging", value: "1kg, 5kg, 25kg foil bags" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between py-3 border-b border-emerald-100">
                      <span className="font-medium text-gray-700">{item.label}</span>
                      <span className="text-emerald-600 font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications & Compliance</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Organic Certified",
                    "ISO 22000 Certified",
                    "GMP Certified",
                    "Halal Certified",
                    "Kosher Certified",
                    "Non-GMO Verified",
                    "Vegan Certified",
                    "Heavy Metal Tested"
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <FaCheck className="text-emerald-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <h4 className="font-bold text-gray-800 mb-3">Microbiological Safety</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <FaCheck className="text-emerald-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Total Plate Count: &lt; 5,000 CFU/g</span>
                    </div>
                    <div className="flex items-center">
                      <FaCheck className="text-emerald-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Yeast & Mold: &lt; 100 CFU/g</span>
                    </div>
                    <div className="flex items-center">
                      <FaCheck className="text-emerald-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">E. coli: Absent</span>
                    </div>
                    <div className="flex items-center">
                      <FaCheck className="text-emerald-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Salmonella: Absent</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-r from-emerald-800 to-green-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the Nutritional Power of Chlorella
            </h2>
            <p className="text-emerald-200 max-w-2xl mx-auto mb-10 text-lg">
              Contact us today to discuss your requirements and receive samples of our premium chlorella.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/samples"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg"
              >
                Request Product Samples
              </motion.a>
              
              <motion.a
                href="/specs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full border border-white/30"
              >
                Download Full Spec Sheet
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}