import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

export default function EventGallery() {
  const events = [
    {
      title: 'Global Spirulina Expo 2025',
      image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e',
    },
    {
      title: 'New Product Launch',
      image: 'https://images.unsplash.com/photo-1620311081423-982b118c2e56',
    },
    {
      title: 'ISO Certification Award',
      image: 'https://images.unsplash.com/photo-1603570411086-e3a4e9b98db6',
    },
    {
      title: 'Eco Packaging Initiative',
      image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
    },
    {
      title: 'Sustainable Farming Conference',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
    },
    {
      title: 'Research Facility Tour',
      image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a',
    }
  ];

  return (
    <section id='news' className="w-full bg-green-100 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-green-50 to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-emerald-100/20 blur-3xl -z-10"></div>
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center text-green-600 font-medium mb-4">
            <div className="w-8 h-0.5 bg-green-500 mr-3"></div>
            COMPANY GALLERY
            <div className="w-8 h-0.5 bg-green-500 ml-3"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[var(--primary-green)]">Events & Activities</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Highlights from our recent activities, industry engagements, and company milestones
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Swiper Gallery with 4 slides on large screens */}
        <div 
          className="relative"
          style={{
            minHeight: '150px',
            paddingBottom: '40px' // Space for pagination
          }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
              type: 'bullets',
            }}
            breakpoints={{
              640: { // Tablets
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: { // Laptops
                slidesPerView: 3,
                spaceBetween: 25
              },
              1280: { // Large desktops
                slidesPerView: 4,
                spaceBetween: 30
              }
            }}
            style={{
              height: '100%',
              paddingBottom: '30px'
            }}
          >
            {events.map((event, index) => (
              <SwiperSlide key={index}>
                <div className="h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  {/* 4:3 Aspect Ratio Container */}
                  <div 
                    className="relative"
                    style={{
                      paddingTop: '75%' // 4:3 aspect ratio
                    }}
                  >
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    {/* Title Overlay */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 p-4"
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                      }}
                    >
                      <h3 className="text-white font-semibold text-base sm:text-lg">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <motion.div 
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-white border border-green-500 text-green-600 font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition"
          >
            <span>View Full Gallery</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </motion.div>
          {/* Custom Pagination Container */}
          {/* <div 
            className="custom-pagination absolute bottom-0 left-0 right-0 flex justify-center"
            style={{
              height: '10px',
              paddingTop: '10px'
            }}
          /> */}
        </div>
      </div>
    </section>
  );
}

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { motion } from 'framer-motion';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// export default function EventGallery() {
//   const events = [
//     {
//       title: 'Global Spirulina Expo 2025',
//       description: 'Showcasing our latest innovations in microalgae technology',
//       image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e',
//     },
//     {
//       title: 'New Product Launch',
//       description: 'Introducing our premium blue spirulina extract',
//       image: 'https://images.unsplash.com/photo-1620311081423-982b118c2e56',
//     },
//     {
//       title: 'ISO Certification Award',
//       description: 'Achieving international quality standards recognition',
//       image: 'https://images.unsplash.com/photo-1603570411086-e3a4e9b98db6',
//     },
//     {
//       title: 'Eco Packaging Initiative',
//       description: 'Sustainable packaging solutions for our products',
//       image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
//     },
//     {
//       title: 'Sustainable Farming Conference',
//       description: 'Sharing our eco-friendly cultivation practices',
//       image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
//     },
//     {
//       title: 'Research Facility Tour',
//       description: 'Demonstrating our advanced R&D capabilities',
//       image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a',
//     }
//   ];

//   return (
//     <section className="w-full py-16 px-4 sm:px-6 relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-green-50 to-transparent -z-10"></div>
//       <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-emerald-100/20 blur-3xl -z-10"></div>
      
//       <div className="max-w-7xl mx-auto">
//         <motion.div 
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="inline-flex items-center text-green-600 font-medium mb-4">
//             <div className="w-8 h-0.5 bg-green-500 mr-3"></div>
//             COMPANY GALLERY
//             <div className="w-8 h-0.5 bg-green-500 ml-3"></div>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Our <span className="text-[var(--primary-green)]">Events & Activities</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Highlights from our recent activities, industry engagements, and company milestones
//           </p>
//           <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>
//         </motion.div>

//         {/* Gallery Swiper */}
//         <div className="relative">
//           <Swiper
//             modules={[Autoplay, Pagination, Navigation]}
//             slidesPerView={1}
//             spaceBetween={20}
//             loop={true}
//             autoplay={{
//               delay: 4000,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//               el: '.custom-pagination',
//               bulletClass: 'swiper-pagination-bullet bg-green-500',
//               bulletActiveClass: 'swiper-pagination-bullet-active !bg-emerald-600'
//             }}
//             navigation={{
//               nextEl: '.swiper-button-next',
//               prevEl: '.swiper-button-prev',
//             }}
//             breakpoints={{
//               640: { // Tablets
//                 slidesPerView: 2,
//                 spaceBetween: 20
//               },
//               1024: { // Laptops
//                 slidesPerView: 3,
//                 spaceBetween: 25
//               }
//             }}
//             className=""
//           >
//             {events.map((event, index) => (
//               <SwiperSlide key={index}>
//                 <motion.div 
//                   className="h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-green-100 bg-white"
//                   whileHover={{ y: -10 }}
//                 >
//                   {/* Image container with 4:3 aspect ratio */}
//                   <div className="relative aspect-[4/3]">
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

//                     <img src={event.image} alt={event.title} className="w-full h-full object-cover" />

//                     <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
//                       <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
//                       <p className="text-green-100 text-sm">{event.description}</p>
//                     </div>
//                   </div>
                  
//                   {/* Details */}
//                   <div className="p-5">
//                     <div className="flex items-center text-gray-500 text-sm mb-3">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                       </svg>
//                       <span>June 15, 2025</span>
//                     </div>
//                     <div className="flex items-center">
//                       <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-dashed mr-3" />
//                       <div>
//                         <p className="text-sm font-medium text-gray-900">Spirulife Team</p>
//                         <p className="text-xs text-gray-500">Chennai, India</p>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
          
//           {/* Custom Navigation */}
//           <div className="swiper-button-prev absolute top-1/2 left-0 z-10 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer hover:bg-green-50 transition">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
//               <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
//             </svg>
//           </div>
          
//           <div className="swiper-button-next absolute top-1/2 right-0 z-10 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer hover:bg-green-50 transition">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
//               <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
//             </svg>
//           </div>
          
//           {/* Custom Pagination */}
//           <div className="custom-pagination flex justify-center mt-6 space-x-2" />
//         </div>

//         {/* View All Button */}
//         <motion.div 
//           className="text-center mt-4"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center bg-white border border-green-500 text-green-600 font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition"
//           >
//             <span>View Full Gallery</span>
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//             </svg>
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }