import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
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
    <section className="w-full bg-emerald-50 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800">
            News & Events Gallery
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg">
            Highlights from our recent activities and industry engagements
          </p>
        </div>

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