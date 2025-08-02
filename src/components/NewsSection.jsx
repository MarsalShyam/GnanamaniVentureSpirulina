import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function NewsSection() {
  const newsItems = [
    {
      title: 'Participated in Global Spirulina Expo 2025',
      image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e', // Replace with your event images
    },
    {
      title: 'Launched New Blue Spirulina Product Line',
      image: 'https://images.unsplash.com/photo-1620311081423-982b118c2e56',
    },
    {
      title: 'Awarded ISO 22000 Certification for Food Safety',
      image: 'https://images.unsplash.com/photo-1603570411086-e3a4e9b98db6',
    },
    {
      title: 'Sustainability Drive: 100% Eco-Friendly Packaging',
      image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
    },
  ];

  return (
    <section className="w-full bg-[var(--soft-cream)] py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary-green)]">News & Events</h2>
        <p className="mt-4 text-gray-600 md:text-lg">Stay updated with our latest activities, product launches, and industry presence.</p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {newsItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[var(--primary-green)]">{item.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
