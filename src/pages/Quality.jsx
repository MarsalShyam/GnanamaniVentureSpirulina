import { motion } from 'framer-motion';
import { FaLeaf, FaGlobe, FaSeedling, FaFlask, FaCertificate, FaStar, FaCheck, FaUserFriends, FaRunning, FaDumbbell } from 'react-icons/fa';
import img1 from '../assets/Images/quality/certification.webp'
import img2 from '../assets/Images/quality/herbal2.webp'
import img3 from '../assets/Images/quality/No Artificial Additives.webp'
import img4 from '../assets/Images/quality/nosugar.webp'
import img5 from '../assets/Images/quality/vagan.webp'
import img6 from '../assets/Images/quality/vegitable.webp'
import CertificationsSection from '../components/CertificationsSection';

import veg from '../assets/Images/quality/vegetarians.jpeg'
import fitness from '../assets/Images/quality/fitness.jpeg'
import athletes from '../assets/Images/quality/athletes.jpeg'
import health from '../assets/Images/quality/health2.jpeg'

export default function QualityPage() {
  // Quality attributes
  const qualities = [
    {
      icon: <FaLeaf className="text-3xl text-green-600" />,
      title: '100% Herbal and Natural',
      text: 'Our organic superfoods are carefully sourced from nourishing soils to deliver nature\'s best. We select only premium ingredients for optimal daily nourishment.',
      bgImage:img2,
    },
    {
      icon: <FaGlobe className="text-3xl text-green-600" />,
      title: 'Globally Certified',
      text: 'Certified 100% organic by USDA and Ecocert France. Our cultivation and processing meet the highest international food-grade standards.',
      bgImage:img1,
    },
    {
      icon: <FaSeedling className="text-3xl text-green-600" />,
      title: '100% Vegan',
      text: 'Lactose-free superfoods perfect for the 75% of humans with lactose intolerance. Enjoy complete nourishment without dairy side effects.',
      bgImage:img5,
    },
    {
      icon: <FaFlask className="text-3xl text-green-600" />,
      title: 'No Artificial Additives',
      text: 'Absolutely no artificial colors, preservatives, or sweeteners. Our dry-form superfoods preserve nutrition while enhancing digestibility.',
      bgImage:img3,
    },
    {
      icon: <FaCertificate className="text-3xl text-green-600" />,
      title: '100% Vegetarian',
      text: 'Certified organic products contain more beneficial nutrients by eliminating pesticides and GMOs while being completely plant-based.',
      bgImage:img6,
    },
    {
      icon: <FaStar className="text-3xl text-green-600" />,
      title: 'No Sugar & Gluten-Free',
      text: 'Naturally sugar-free with a typical seaweed taste, ideal for diabetics. Gluten-free formula prevents celiac-related digestive issues.',
      bgImage:img4,
    }
  ];

  // Nutritional facts
  const facts = [
    {
      title: 'Vitamin A',
      value: '≈12 carrots',
      text: 'Just 4 tablets provide Vitamin A equal to 12 carrots or 18 cups of spinach.'
    },
    {
      title: 'Vitamin B3',
      value: '≈3 cups yogurt',
      text: '4 tablets provide Vitamin B3 equivalent to 3 cups of yogurt.'
    },
    {
      title: 'Iron',
      value: '≈30 apples',
      text: 'Daily serving provides iron equivalent to 30 apples or 7 cups of spinach.'
    },
    {
      title: 'Minerals',
      value: 'Rich Spectrum',
      text: 'Essential minerals: Selenium, Phosphorous, Omega 3, Calcium, Copper in every serving.'
    },
    {
      title: 'Carbohydrates',
      value: 'Energy Boost',
      text: '2 tablets energize like 15 loaves of white bread without the empty calories.'
    },
    {
      title: 'Fiber',
      value: 'Digestive Health',
      text: '4 tablets provide fiber equivalent to 10 cups of grapes for optimal digestion.'
    },
    {
      title: 'Manganese',
      value: '≈5 Bananas',
      text: 'Daily manganese equivalent to 5 bananas for metabolic support.'
    },
    {
      title: 'Protein',
      value: '60-70% Content',
      text: 'Highest plant-based protein content for muscle repair and growth.'
    }
  ];

  // Who it's for
  const whoIsItFor = [
    { 
      icon: <FaSeedling className="text-3xl text-white" />,
      title: 'Vegetarians', 
      description: 'Complete protein source for plant-based diets',
      color: 'from-emerald-500 to-emerald-700',
      bgImage:veg
    },
    { 
      icon: <FaDumbbell className="text-3xl text-white" />,
      title: 'Fitness Enthusiasts', 
      description: 'Muscle recovery and sustained energy',
      color: 'from-green-500 to-green-700',
      bgImage:fitness
    },
    { 
      icon: <FaRunning className="text-3xl text-white" />,
      title: 'Athletes', 
      description: 'Endurance support and performance nutrition',
      color: 'from-teal-500 to-teal-700',
      bgImage:athletes
    },
    { 
      icon: <FaUserFriends className="text-3xl text-white" />,
      title: 'Health-Conscious', 
      description: 'Daily wellness and immune support',
      color: 'from-lime-500 to-lime-700',
      bgImage:health
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f8f0] to-[#e0f0e0] pt-18 pb-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-green-900/10 z-0">
          <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1661380933633-b6a58395ffc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNwaXJ1bGluYXxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/5 to-green-900/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--primary-green)] mb-6"
            >
              Our Quality Commitment
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl italic text-gray-700 max-w-3xl mb-10"
            >
              "Not just thoughtful... 100% thought through for mind and body"
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="inline-flex items-center bg-white/20 px-6 py-3 rounded-full shadow-lg border border-green-200"
            >
              <FaCheck className="text-green-600 mr-2" />
              <span className="font-medium text-gray-800">Certified Organic</span>
              <span className="mx-2 text-gray-300">|</span>
              <FaCheck className="text-green-600 mr-2" />
              <span className="font-medium text-gray-800">100% Natural</span>
              <span className="mx-2 text-gray-300">|</span>
              <FaCheck className="text-green-600 mr-2" />
              <span className="font-medium text-gray-800">Sustainable Production</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Attributes */}
      {/* <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-green)] mb-4">Why Choose Spirulife</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-md border border-green-100 p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-green-50 p-3 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-16 px-4 md:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-green)] mb-4">Why Choose GnyanmaniVenture</h2>
      <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {qualities.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all h-55"
          style={{
            backgroundImage: `url(${item.bgImage})`, // 👈 Your local image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[1.5px]"></div>

          {/* Content */}
          <div className="relative z-10 p-6 flex flex-col h-full justify-center">
            <div className="flex items-center mb-4">
              <div className="bg-green-50 p-3 rounded-full mr-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-green-400 drop-shadow-sm">{item.title}</h3>
            </div>
            <p className="text-black drop-shadow-sm text-sm md:text-base leading-relaxed">
              {item.text}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Nutritional Facts */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-green)] mb-4">Nutritional Powerhouse</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover the exceptional nutritional density of our spirulina compared to common foods</p>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map((fact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-200"
              >
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-[var(--primary-green)]">{fact.title}</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">{fact.value}</span>
                  </div>
                  <p className="text-gray-600">{fact.text}</p>
                </div>
                <div className="bg-green-50 px-5 py-3 border-t border-green-100">
                  <div className="h-2 w-full bg-green-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 rounded-full" 
                      style={{ width: `${70 + (idx * 4)}%` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Pure Nutritional Density</h3>
                <p className="mb-6 max-w-2xl">
                  Spirulina contains 60-70% complete protein, all essential amino acids, powerful antioxidants, 
                  and more beta-carotene than carrots. It's nature's most concentrated whole food.
                </p>
                <div className="flex items-center">
                  <FaCheck className="text-white mr-2 bg-green-400 p-1 rounded-full" />
                  <span>10x more beta-carotene than carrots</span>
                </div>
                <div className="flex items-center my-2">
                  <FaCheck className="text-white mr-2 bg-green-400 p-1 rounded-full" />
                  <span>50x more iron than spinach</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-white mr-2 bg-green-400 p-1 rounded-full" />
                  <span>Highest protein content of any natural food</span>
                </div>
              </div>
              <div className="flex-1 flex justify-center mt-8 md:mt-0">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="bg-white/30 rounded-full w-44 h-44 flex items-center justify-center">
                      <div className="bg-white/40 rounded-full w-32 h-32 flex items-center justify-center">
                        <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center text-green-800 font-bold">
                          #1 Superfood
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

      {/* Certifications */}
      <CertificationsSection/>

      {/* Who Is It For */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-green-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Benefits Most</h2>
            <p className="text-green-200 max-w-2xl mx-auto">Our spirulina is ideal for diverse lifestyles and nutritional needs</p>
            <div className="w-24 h-1 bg-green-400 mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {whoIsItFor.map((item, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="relative rounded-xl overflow-hidden shadow-xl h-80"
      style={{
        backgroundImage: `url(${item.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay (from your original color) */}
      <div className={`absolute inset-0  bg-gradient-to-br opacity-80`}></div>

      {/* Soft white layer for readability */}
      {/* <div className="absolute inset-0 bg-white/10"></div> */}

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col items-center text-center h-full justify-between">
        <div>
          <div className=" p-4 rounded-full mb-6   flex justify-center items-center ">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold text-green-400 mb-3 drop-shadow-sm">{item.title}</h3>
          <p className="text-green-200 mb-6 text-sm drop-shadow-sm">{item.description}</p>
        </div>

        <ul className="text-left text-green-100 text-sm space-y-2 w-full">
          <li className="flex items-start">
            <FaCheck className="text-green-400 mt-1 mr-2 flex-shrink-0" />
            <span>Enhanced nutrient intake</span>
          </li>
          <li className="flex items-start">
            <FaCheck className="text-green-400 mt-1 mr-2 flex-shrink-0" />
            <span>Natural energy boost</span>
          </li>
          <li className="flex items-start">
            <FaCheck className="text-green-400 mt-1 mr-2 flex-shrink-0" />
            <span>Immune system support</span>
          </li>
        </ul>
      </div>
    </motion.div>
  ))}
</div>
          
          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Daily Wellness Solution</h3>
                <p className="text-green-100 mb-6">
                  Whether you're an athlete seeking performance enhancement, a busy professional needing 
                  sustained energy, or someone focused on long-term health, our spirulina provides comprehensive 
                  nutritional support for every lifestyle.
                </p>
                <div className="bg-green-800/50 inline-block px-6 py-3 rounded-full">
                  <span className="font-medium">Recommended intake: 2-4 tablets daily</span>
                </div>
              </div>
              <div className="flex-1 flex justify-center mt-8 md:mt-0">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 rounded-full w-56 h-56 flex items-center justify-center">
                      <div className="bg-white/30 rounded-full w-40 h-40 flex items-center justify-center">
                        <div className="bg-white/40 rounded-full w-24 h-24 flex items-center justify-center text-green-900 font-bold text-center">
                          Universal Nutrition
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
    </div>
  );
}