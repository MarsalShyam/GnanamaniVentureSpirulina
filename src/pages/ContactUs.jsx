import { useState, useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    contactName: '',
    state: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA verification');
      return;
    }

    const submissionData = {
      ...formData,
      recaptchaToken
    };

    fetch('YOUR_GOOGLE_SHEET_WEBHOOK_URL', {
      method: 'POST',
      body: JSON.stringify(submissionData),
    }).then(() => {
      alert('Message Sent Successfully!');
      setFormData({
        companyName: '',
        website: '',
        contactName: '',
        state: '',
        email: '',
        phone: '',
        message: '',
      });
      recaptchaRef.current.reset();
      setRecaptchaToken(null);
    });
  };

  return (
    <section className="pt-28 pb-16 px-4 md:px-12 bg-gradient-to-b from-green-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Contact Us
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info + Google Map */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-[var(--primary-green)] pb-2">
              Contact Details
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-[var(--primary-green)] text-xl flex-shrink-0" />
                <span className="text-lg text-gray-700">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-[var(--primary-green)] text-xl flex-shrink-0" />
                <span className="text-lg text-gray-700">info@spirulife.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-[var(--primary-green)] text-xl flex-shrink-0" />
                <span className="text-lg text-gray-700">123 Green Valley, Chennai, India</span>
              </div>
            </div>
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.921080721347!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjkiTiA3N8KwMzUnMzkuNiJF!5e0!3m2!1sen!2sin!4v1612165935000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl shadow-lg mt-4"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-xl animate-fade-in-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-[var(--primary-green)] pb-2">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="companyName" 
                  placeholder="Company Name" 
                  value={formData.companyName} 
                  onChange={handleChange} 
                  required 
                  className="input-field" 
                />
                <input 
                  type="url" 
                  name="website" 
                  placeholder="Company Website" 
                  value={formData.website} 
                  onChange={handleChange} 
                  required 
                  className="input-field" 
                />
              </div>
              
              <input 
                type="text" 
                name="contactName" 
                placeholder="Contact Name" 
                value={formData.contactName} 
                onChange={handleChange} 
                required 
                className="input-field" 
              />
              
              <select 
                name="state" 
                value={formData.state} 
                onChange={handleChange} 
                required 
                className="input-field"
              >
                <option value="">Select State</option>
                {['Tamil Nadu', 'Karnataka', 'Maharashtra', 'Gujarat', 'Uttar Pradesh', 'Bihar'].map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="input-field" 
              />
              
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                className="input-field" 
              />
              
              <textarea 
                name="message" 
                placeholder="Your Message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                rows="4" 
                className="input-field"
              ></textarea>
              
              {/* reCAPTCHA Integration */}
              <div className="mt-2">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="YOUR_RECAPTCHA_SITE_KEY"
                  onChange={handleRecaptchaChange}
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 bg-[var(--primary-green)] text-white font-semibold rounded-lg hover:bg-green-700 transition shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}