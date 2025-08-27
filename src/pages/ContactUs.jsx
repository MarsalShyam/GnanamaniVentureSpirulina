import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const API_BASE = import.meta.env.VITE_API_BASE || "https://gnanamani-venture-spirulina.vercel.app/"; // set this
const CONTACT_API = `${API_BASE}/api/contact`;

export default function ContactUs() {
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    contactName: "",
    state: "",
    email: "",
    phone: "",
    message: "",
    // _hp: "" // optional honeypot
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(CONTACT_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        const response = await res.json().catch(() => ({}));
        if (response.result === "success") {
          alert("Message Sent Successfully!");
          setFormData({
            companyName: "",
            website: "",
            contactName: "",
            state: "",
            email: "",
            phone: "",
            message: "",
          });
        } else {
          console.error("Server error:", response);
          alert("Error submitting form. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Network error:", err);
        alert("Network error. Please try again.");
      });
  };

  return (
    <section className="pt-28 pb-16 px-4 md:px-12 bg-gradient-to-b from-green-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-[var(--primary-green)] pb-2">
              Contact Details
            </h2>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-[var(--primary-green)] text-xl flex-shrink-0" />
                <span className="text-lg text-gray-700">+91 9508868365</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-[var(--primary-green)] text-xl flex-shrink-0" />
                <span className="text-lg text-gray-700">info@gnyanventure.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-[var(--primary-green)] text-xl flex-shrink-0" />
                <span className="text-gray-700 text-lg">
                  Gnyanamani Venture Pvt. Ltd.,<br />
                  No.62A/1, Kattanachampatti,<br />
                  Block No 2, Rasipuram, Namakkal,<br />
                  Tamilnadu, India - 637408.
                </span>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.1061227873365!2d78.18614767489306!3d11.472265388721985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babe9e4af0e2223%3A0xa3ed651672f52b98!2s1st%20St%2C%20Rasipuram%2C%20Tamil%20Nadu%20637408!5e0!3m2!1sen!2sin!4v1754699159770!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl shadow-lg mt-4"
            ></iframe>
          </div>

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
                {["Tamil Nadu","Karnataka","Maharashtra","Gujarat","Uttar Pradesh","Bihar"].map(s => (
                  <option key={s} value={s}>{s}</option>
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

              {/* Honeypot (optional, hidden):
              <input type="text" name="_hp" value={formData._hp} onChange={handleChange} className="hidden" tabIndex="-1" autoComplete="off" />
              */}

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
