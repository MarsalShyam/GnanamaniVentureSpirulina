import { motion } from 'framer-motion';
import { FaLeaf, FaCheck, FaFlask, FaSeedling, FaHeart, FaIndustry, FaChartLine } from 'react-icons/fa';

export default function BlueSpirulinaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 overflow-hidden bg-gradient-to-r from-blue-900 to-cyan-800 text-white">
        <div className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/2155596725/photo/organic-blue-spirulina-powder-in-a-white-ceramic-bowl-side-view-copy-space-superfood-powder.webp?a=1&b=1&s=612x612&w=0&k=20&c=w7X21CaBMaa_-PyKBviyaDY_34MGA2YbUGWW5JnLpT8=')] bg-cover bg-center opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <FaFlask className="text-blue-300 mr-2" />
                  <span className="text-sm font-medium">Premium Blue Spirulina</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Blue Spirulina Supplier in India
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-bold text-blue-300 mb-6">
                  Manufacturers of Organic Blue Spirulina Powder & Extract
                </h2>
                
                <p className="text-lg text-blue-100 mb-8 max-w-2xl">
                  Discover the vibrant power of nature with our premium Blue Spirulina. This extraordinary superfood, rich in phycocyanin, offers unparalleled antioxidant benefits and a stunning natural blue hue perfect for functional foods and beverages.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg"
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
          </div>
        </div>
      </section>

      {/* What is Blue Spirulina Section */}
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
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl overflow-hidden aspect-square">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-70"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
                  <div className="absolute inset-0 flex items-end p-8">
                    <h3 className="text-2xl font-bold text-white">Phycocyanin - The Blue Gold</h3>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <FaSeedling className="mr-2" />
                    <span>Nature's Blue Pigment</span>
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
              <div className="inline-flex items-center text-blue-600 font-medium mb-4">
                <div className="w-8 h-0.5 bg-blue-500 mr-3"></div>
                THE SCIENCE OF BLUE
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nature's Most Vibrant Superfood
              </h2>
              
              <p className="text-gray-600 mb-6">
                Blue Spirulina is the pure extract of phycocyanin, the brilliant blue pigment found in spirulina. This potent compound is renowned for its exceptional antioxidant properties and stunning natural blue color, making it ideal for health products and culinary applications.
              </p>
              
              <p className="text-gray-600 mb-8">
                Unlike regular spirulina, our blue spirulina extract undergoes a specialized cold-extraction process to isolate the phycocyanin, resulting in a product that's free from the distinct algae taste while maintaining all the nutritional benefits.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <FaCheck className="text-blue-500 mr-2" />
                  <span>300x More Antioxidants</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-blue-500 mr-2" />
                  <span>Vibrant Natural Blue Color</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-blue-500 mr-2" />
                  <span>Neutral Taste & Odor</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-blue-500 mr-2" />
                  <span>100% Water Soluble</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Extraction Process */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="w-full lg:w-1/2 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center text-blue-600 font-medium mb-4">
                <div className="w-8 h-0.5 bg-blue-500 mr-3"></div>
                ADVANCED EXTRACTION
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Precision Extraction Technology
              </h2>
              
              <p className="text-gray-600 mb-6">
                Our blue spirulina is produced using a proprietary cold-extraction process that preserves the delicate phycocyanin molecules while removing chlorophyll and other compounds. This results in a pure, vibrant blue powder with maximum potency.
              </p>
              
              <p className="text-gray-600 mb-8">
                The process begins with premium organic spirulina cultivated in controlled environments. Through gentle filtration and low-temperature extraction, we isolate the phycocyanin while maintaining its bioactive properties.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-2">Cold Processing</h3>
                  <p className="text-gray-600 text-sm">Low temperatures preserve bioactive compounds</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-2">Purity</h3>
                  <p className="text-gray-600 text-sm">99%+ pure phycocyanin with no additives</p>
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
                <div className="bg-gradient-to-br from-blue-600 to-cyan-700 rounded-2xl overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-70"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
                  <div className="absolute inset-0 flex items-end p-8">
                    <h3 className="text-2xl font-bold text-white">Advanced Extraction Facility</h3>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white px-6 py-3 rounded-lg shadow-lg border border-blue-200">
                  <div className="flex items-center">
                    <FaIndustry className="text-blue-600 mr-2" />
                    <span className="font-semibold">GMP Certified</span>
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
            <div className="inline-flex items-center text-blue-600 font-medium mb-4">
              <div className="w-8 h-0.5 bg-blue-500 mr-3"></div>
              VERSATILE APPLICATIONS
              <div className="w-8 h-0.5 bg-blue-500 ml-3"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where Color Meets Nutrition
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the diverse applications of our premium blue spirulina across industries
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Functional Foods",
                icon: <FaLeaf className="text-3xl text-emerald-500" />,
                description: "Enhance nutritional profile while adding vibrant blue hues to health foods, snacks, and supplements",
                applications: ["Protein bars", "Superfood blends", "Health snacks", "Nutritional powders"]
              },
              {
                title: "Beverages",
                icon: <FaFlask className="text-3xl text-blue-500" />,
                description: "Create stunning blue drinks without artificial colors - perfect for smoothies, tonics, and functional beverages",
                applications: ["Smoothies & Juices", "Health Tonics", "Functional Waters", "Sports Drinks"]
              },
              {
                title: "Cosmetics",
                icon: <FaHeart className="text-3xl text-pink-500" />,
                description: "Utilize antioxidant properties in skincare formulations for anti-aging and protective benefits",
                applications: ["Face Masks", "Serums", "Creams", "Hair Treatments"]
              }
            ].map((app, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-blue-100 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-5">
                    {app.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
                  <p className="text-gray-600 mb-6">{app.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-3">Common Applications:</h4>
                  <ul className="space-y-2">
                    {app.applications.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
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
      <section id="benefits" className="py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center text-blue-600 font-medium mb-4">
              <div className="w-8 h-0.5 bg-blue-500 mr-3"></div>
              HEALTH BENEFITS
              <div className="w-8 h-0.5 bg-blue-500 ml-3"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Power of Blue Spirulina
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Scientifically-backed health benefits of our premium phycocyanin extract
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Potent Antioxidant",
                description: "Neutralizes free radicals and reduces oxidative stress with antioxidant activity 300x stronger than vitamins C and E",
                icon: <FaLeaf className="text-3xl text-emerald-500" />
              },
              {
                title: "Anti-Inflammatory",
                description: "Reduces chronic inflammation by inhibiting inflammatory enzymes and cytokines throughout the body",
                icon: <FaHeart className="text-3xl text-red-500" />
              },
              {
                title: "Neuroprotective",
                description: "Supports brain health by crossing the blood-brain barrier to protect neurons from oxidative damage",
                icon: <FaChartLine className="text-3xl text-blue-500" />
              },
              {
                title: "Immune Booster",
                description: "Enhances immune function by stimulating production of white blood cells and antibodies",
                icon: <FaFlask className="text-3xl text-cyan-500" />
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Research Section */}
          <div className="bg-gradient-to-r from-blue-700 to-cyan-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-6">Scientific Validation</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Antioxidant Power</h4>
                      <p className="text-blue-100">Study in Journal of Medicinal Food shows phycocyanin has ORAC value 300x higher than vitamin C</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Liver Protection</h4>
                      <p className="text-blue-100">Research in Pharmacognosy Magazine demonstrates hepatoprotective effects against toxins</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Anti-Inflammatory</h4>
                      <p className="text-blue-100">Clinical study shows 40% reduction in inflammatory markers with daily supplementation</p>
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
                          <div className="bg-white text-blue-900 rounded-full w-20 h-20 flex items-center justify-center font-bold text-center text-sm">
                            Scientifically Proven
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

      {/* Packaging Section */}
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
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-700 rounded-2xl overflow-hidden aspect-square"></div>
                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl overflow-hidden aspect-square"></div>
                <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
                  <FaIndustry className="text-4xl text-gray-600" />
                </div>
                <div className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl overflow-hidden aspect-square"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center text-blue-600 font-medium mb-4">
                <div className="w-8 h-0.5 bg-blue-500 mr-3"></div>
                SPECIALIZED PACKAGING
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Preserving Nature's Blue Treasure
              </h2>
              
              <p className="text-gray-600 mb-6">
                Our blue spirulina is packaged with extreme care to protect its vibrant color and potent nutritional properties. We use UV-protected containers and nitrogen flushing to ensure maximum shelf life and potency.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <FaLeaf className="text-blue-500" />
                  </div>
                  <span className="text-gray-600"><span className="font-semibold">Light Protection:</span> UV-resistant packaging prevents color degradation</span>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <FaIndustry className="text-blue-500" />
                  </div>
                  <span className="text-gray-600"><span className="font-semibold">Oxygen Barrier:</span> Nitrogen-flushed to prevent oxidation</span>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <FaFlask className="text-blue-500" />
                  </div>
                  <span className="text-gray-600"><span className="font-semibold">Moisture Control:</span> Desiccant-lined containers maintain powder integrity</span>
                </div>
              </div>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg"
              >
                Request Packaging Details
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-r from-blue-800 to-cyan-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the Vibrant Power of Blue Spirulina
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto mb-10 text-lg">
              Contact us today to discuss your requirements and receive samples of our premium phycocyanin extract.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg"
            >
              Request a Sample
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}