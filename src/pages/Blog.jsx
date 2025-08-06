import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const blogs = [
  {
    title: 'Best Spirulina Powder – Natures Greatest All Round Plant',
    slug: 'best-spirulina-powder',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e',
    date: 'October 18, 2021',
    author: 'admin',
  },
  {
    title: 'What Makes Organic Spirulina a Nutritional Superstar?',
    slug: 'organic-spirulina-superstar',
    image: 'https://images.unsplash.com/photo-1620311081423-982b118c2e56',
    date: 'June 11, 2021',
    author: 'admin',
  },
  {
    title: '10-Health benefits of Spirulina-Evidence Based Human Applications',
    slug: 'spirulina-health-benefits',
    image: 'https://images.unsplash.com/photo-1603570411086-e3a4e9b98db6',
    date: 'June 11, 2021',
    author: 'admin',
  },
  // ...add more blogs
];

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[var(--soft-cream)] min-h-screen pt-24 pb-16 px-4 md:px-12">
      <h1 className="text-4xl font-bold text-center text-[var(--primary-green)] mb-10">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <Link to={`/blog/${blog.slug}`}>
              <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-2">{blog.author} at {blog.date}</div>
                <h2 className="text-xl font-bold text-[var(--primary-green)] leading-tight">
                  {blog.title}
                </h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
