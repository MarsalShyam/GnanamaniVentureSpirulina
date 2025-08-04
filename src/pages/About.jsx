import { FaBullseye, FaLightbulb, FaMicroscope } from 'react-icons/fa';
import AboutImage from '../assets/Images/Manufacture/pond.jpg'; // Replace with your image

export default function About() {
  return (
    <main className="w-full bg-[var(--soft-cream)] text-gray-800">

      {/* Hero Section */}
      <section className="w-full bg-[var(--soft-blue-bg)] py-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--primary-green)] leading-tight">
              Leading Organic Spirulina Manufacturer
            </h1>
            <p className="mt-4 text-gray-600 md:text-lg">
              We specialize in cultivating, processing, and delivering premium Spirulina in powder, tablet, and capsule forms. With advanced microalgae technology, we ensure top-notch quality and global compliance.
            </p>
          </div>
          <div className="flex-1">
            <img src={AboutImage} alt="About Spirulina" className="w-full h-auto rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
            <FaBullseye className="text-[var(--primary-green)] text-4xl mb-4" />
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p className="text-gray-600">
              To promote health and wellness globally by providing the highest quality Spirulina products through sustainable and innovative cultivation practices.
            </p>
          </div>
          <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
            <FaLightbulb className="text-[var(--primary-green)] text-4xl mb-4" />
            <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <p className="text-gray-600">
              To be the world’s leading microalgae-based nutritional company, fostering a healthier and greener planet.
            </p>
          </div>
        </div>
      </section>

      {/* Research & Development Section */}
      <section className="w-full py-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <FaMicroscope className="text-[var(--primary-green)] text-5xl mb-4" />
            <h2 className="text-3xl font-extrabold mb-4">Research & Development</h2>
            <p className="text-gray-600 md:text-lg">
              Our dedicated R&D team continuously works on enhancing cultivation techniques, nutrient preservation, and developing innovative products to meet global health standards. We integrate advanced technology with eco-friendly practices.
            </p>
          </div>
        </div>
      </section>

      {/* Floating Buttons (Fixed Across All Pages) */}
      <div className="fixed right-4 bottom-20 md:bottom-28 z-50">
        <a
          href="#enquiry-form"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-full shadow-md block mb-4 text-center"
        >
          Enquiry Form
        </a>
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md block text-center"
        >
          WhatsApp Us
        </a>
      </div>
    </main>
  );
}
