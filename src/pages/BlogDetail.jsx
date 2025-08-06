import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const blogContent = {
  'best-spirulina-powder': {
    title: 'Best Spirulina Powder – Natures Greatest All Round Plant',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e',
    date: 'October 18, 2021',
    author: 'admin',
    content: `Organic Spirulina is best health supplement readily available with all healthy products imbibed in it.
Spirulina is a boon to mankind and helps us to lead a fit and fine life. Spirulina is a superfood. 
One cannot say a supplement to be the best without digging deeper i.e., without knowing its nutrient values.`,
    sections: [
      {
        heading: 'Nutrient content of Organic Spirulina:',
        text: `A single spoon of Organic Spirulina contains:
- Protein: 4 grams.
- Vitamin B1 (Thiamin): 11% of the RDA.
- Vitamin B2 (Riboflavin): 15% of the RDA.
- Vitamin B3 (Niacin): 4% of the RDA.
- Copper: 21% of the RDA.
- Iron: 11% of the RDA.
It also contains magnesium, potassium, manganese, etc.`
      },
      {
        heading: 'Why Spirulina is a Superfood?',
        text: `By seeing all these nutrient levels of Dry Spirulina powder in figures, 
We can say that Organic Spirulina is nutritious and can be called nature’s boon and Superfood.`
      }
    ]
  },
  'organic-spirulina-superstar': {
    title: 'What Makes Organic Spirulina a Nutritional Superstar?',
    image: 'https://images.unsplash.com/photo-1620311081423-982b118c2e56',
    date: 'June 11, 2021',
    author: 'admin',
    content: 'This is content for Organic Spirulina Superstar Blog...',
    sections: []
  },
  'spirulina-health-benefits': {
    title: '10-Health benefits of Spirulina-Evidence Based Human Applications',
    image: 'https://images.unsplash.com/photo-1603570411086-e3a4e9b98db6',
    date: 'June 11, 2021',
    author: 'admin',
    content: 'This is content for Health Benefits of Spirulina Blog...',
    sections: []
  }
  // Add more blogs similarly
};

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogContent[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) return <div className="text-center py-20 text-2xl">Blog not found</div>;

  return (
    <div className="pt-24 pb-16 px-4 md:px-16 bg-[var(--soft-cream)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-sm text-gray-500 mb-2">{blog.author} at {blog.date}</p>
        <h1 className="text-4xl font-bold text-[var(--primary-green)] mb-6">{blog.title}</h1>

        {/* Social Share Buttons */}
        <div className="flex space-x-4 mb-8">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-blue-600 text-2xl hover:scale-110 transition" />
          </a>
          <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-400 text-2xl hover:scale-110 transition" />
          </a>
          <a href={`https://www.instagram.com/`} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 text-2xl hover:scale-110 transition" />
          </a>
        </div>

        {/* Main Blog Image */}
        <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover rounded-lg mb-8" />

        {/* Main Blog Content */}
        <p className="text-lg leading-relaxed text-gray-700 mb-6 whitespace-pre-line">{blog.content}</p>

        {/* Sections (if any) */}
        {blog.sections.map((section, idx) => (
          <div key={idx} className="mb-6">
            <h2 className="text-2xl font-semibold text-[var(--primary-green)] mb-2">{section.heading}</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.text}</p>
          </div>
        ))}

        {/* Related Posts */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[var(--primary-green)] mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.keys(blogContent).filter(id => id !== slug).map((relatedId, index) => (
              <Link to={`/blog/${relatedId}`} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition"
                >
                  <img src={blogContent[relatedId].image} alt={blogContent[relatedId].title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[var(--primary-green)]">{blogContent[relatedId].title}</h3>
                    <p className="text-sm text-gray-500">{blogContent[relatedId].date}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
