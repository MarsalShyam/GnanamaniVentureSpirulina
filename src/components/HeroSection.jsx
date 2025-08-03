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
    <section className="w-full relative overflow-hidden pt-17  ">
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
      <div className="fixed top-1/3 right-0 bg-yellow-400 text-black px-4 py-2 rounded-l-lg shadow-md cursor-pointer z-50 hover:bg-yellow-500 transition">
        Enquiry Form
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer z-50 hover:bg-green-600 transition">
        <a href="https://wa.me/919508868365" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
      </div>
    </section>
  );
}


