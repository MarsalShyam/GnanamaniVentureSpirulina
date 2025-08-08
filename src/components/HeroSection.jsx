import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './HeroSlider.css'; // Custom CSS for arrow styling
import image1 from '../assets/Images/1.png'
import image2 from '../assets/Images/2.png'
import image3 from '../assets/Images/3.png'
import image4 from '../assets/Images/4.png'

export default function HeroSlider() {
  const slides = [
    {
      image: image1,
      title: 'Our Commitment to Quality',
      desc: 'We ensure the highest quality Spirulina with global certifications and eco-friendly processes.',
    },
    {
      image: image2,
      title: '100% Organic Spirulina Products',
      desc: 'From Algae Cultivation to Capsules & Powder — Naturally Processed, Nutrient Rich.',
    },
    {
      image: image3,
      title: 'Global Reach & Sustainability',
      desc: 'Delivering Spirulina Superfoods worldwide with sustainable practices.',
    },
    {
      image: image4,
      title: 'Global Reach & Sustainability',
      desc: 'Delivering Spirulina Superfoods worldwide with sustainable practices.',
    },
  ];

  return (
    <section id="hero" className="w-full relative overflow-hidden pt-16 md:pt-17 lg:pt-19  ">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        slidesPerView={1}
        className="w-full"
        style={{height:'auto'}}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative  w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Arrow Navigation Buttons */}
              <div className="absolute inset-0 flex items-center z-10">
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2  text-white px-4 py-2 rounded-full cursor-pointer md:px-6 md:py-3"
                  onClick={() => swiper.slidePrev()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M19 12H5" />
                  </svg>
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white px-4 py-2 rounded-full cursor-pointer md:px-6 md:py-3"
                  onClick={() => swiper.slideNext()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M5 12h14" />
                  </svg>
                </button>
              </div>
              {/* <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-md md:text-lg max-w-2xl">{slide.desc}</p>
                
              </div> */}
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Enquiry Form Floating Button */}
      <div className="fixed top-1/4 right-0 bg-yellow-400 text-black px-4 py-2 rounded-l-lg shadow-md cursor-pointer z-50 hover:bg-yellow-500 transition">
        <a href='#enquiry-form'><span className="mr-2">📝</span>Enquiry Form</a>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 left-5 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer z-50 hover:bg-green-600 transition">
        <a href="https://wa.me/919508868365" target="_blank" rel="noopener noreferrer"><span className="mr-2">💬</span>WhatsApp Us</a>
      </div>
      {/* <div className="fixed right-4 bottom-6 md:bottom-8 z-50 flex flex-col space-y-3">
        <a
          href="#enquiry-form"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-5 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
        >
          <span className="mr-2">📝</span> Enquiry Form
        </a>
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-5 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
        >
          <span className="mr-2">💬</span> WhatsApp Us
        </a>
      </div> */}
    </section>
  );
}




// import { useState, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
// import { motion, AnimatePresence } from 'framer-motion';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-fade';
// import img1 from '../assets/Images/1.png'
// import img2 from '../assets/Images/2.png'
// import img3 from '../assets/Images/3.png'
// import img4 from '../assets/Images/4.png'

// export default function HeroSlider() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const swiperRef = useRef(null);
  
//   const slides = [
//     {
//       image: img1,
//       title: 'Our Commitment to Quality',
//       desc: 'We ensure the highest quality Spirulina with global certifications and eco-friendly processes.',
//       cta: 'Explore Our Process'
//     },
//     {
//       image: img2,
//       title: '100% Organic Spirulina Products',
//       desc: 'From Algae Cultivation to Capsules & Powder — Naturally Processed, Nutrient Rich.',
//       cta: 'View Products'
//     },
//     {
//       image: img3,
//       title: 'Global Reach & Sustainability',
//       desc: 'Delivering Spirulina Superfoods worldwide with sustainable practices.',
//       cta: 'Our Sustainability'
//     },
//     {
//       image: img4,
//       title: 'Premium Nutritional Solutions',
//       desc: 'Harnessing nature\'s power for optimal health and wellness.',
//       cta: 'Discover Benefits'
//     }
//   ];

//   const slideVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { 
//         duration: 0.8, 
//         staggerChildren: 0.2,
//         when: "beforeChildren"
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   return (
//     <section className="w-full relative overflow-hidden pt-20">
//       {/* Floating Buttons */}
//       <div className="fixed top-1/3 right-0 z-50">
//         <motion.button 
//           whileHover={{ x: -5 }}
//           className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-5 py-3 rounded-l-lg shadow-lg flex items-center cursor-pointer z-50"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z"/>
//           </svg>
//           Enquiry Form
//         </motion.button>
//       </div>

//       <div className="fixed bottom-6 right-6 z-50">
//         <motion.a
//           href="https://wa.me/919508868365"
//           target="_blank"
//           rel="noopener noreferrer"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-5 py-3 rounded-full shadow-lg flex items-center"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//           </svg>
//           WhatsApp Us
//         </motion.a>
//       </div>

//       <Swiper
//         modules={[Navigation, Autoplay, EffectFade]}
//         navigation={{
//           prevEl: '.swiper-button-prev',
//           nextEl: '.swiper-button-next',
//         }}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         slidesPerView={1}
//         effect="fade"
//         speed={1000}
//         className="w-full h-[85vh]"
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         onSwiper={(swiper) => {
//           swiperRef.current = swiper;
//         }}
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-full">
//               {/* Background Image with Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-0"></div>
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full h-full object-cover"
//               />
              
//               {/* Content */}
//               <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={index}
//                     variants={slideVariants}
//                     initial="hidden"
//                     animate="visible"
//                     className="text-white"
//                   >
//                     <motion.div 
//                       className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
//                       variants={itemVariants}
//                     >
//                       <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
//                       <span className="text-sm font-medium">Premium Organic Spirulina</span>
//                     </motion.div>
                    
//                     <motion.h1 
//                       className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
//                       variants={itemVariants}
//                     >
//                       {slide.title}
//                     </motion.h1>
                    
//                     <motion.p 
//                       className="text-lg md:text-xl max-w-2xl mb-8 text-gray-100"
//                       variants={itemVariants}
//                     >
//                       {slide.desc}
//                     </motion.p>
                    
//                     <motion.div variants={itemVariants}>
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg"
//                       >
//                         {slide.cta}
//                       </motion.button>
//                     </motion.div>
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}

//         {/* Custom Navigation Buttons */}
//         <div className="swiper-button-prev absolute left-4 top-1/2 z-20 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full cursor-pointer hover:bg-white/30 transition">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
//             <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
//           </svg>
//         </div>
        
//         <div className="swiper-button-next absolute right-4 top-1/2 z-20 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full cursor-pointer hover:bg-white/30 transition">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
//             <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
//           </svg>
//         </div>

//         {/* Pagination Dots */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
//           {slides.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => swiperRef.current?.slideTo(idx)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 idx === activeIndex ? 'bg-green-500 w-8' : 'bg-white/50'
//               }`}
//             />
//           ))}
//         </div>
//       </Swiper>

//       {/* Floating Indicators */}
//       <div className="absolute bottom-8 left-8 z-20 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-white flex items-center">
//         <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
//         <span>Global Organic Certified</span>
//       </div>
      
//       <div className="absolute top-8 right-8 z-20 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-white flex items-center">
//         <span>ISO 22000 Certified</span>
//       </div>
//     </section>
//   );
// }