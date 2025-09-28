import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Twitter, Github, ArrowRight, MapPin } from "lucide-react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [alert, setAlert] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://www.ivishai.com/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.ok) {
          setAlert({ message: "Your message has been sent! ✅", type: "success" });
          setFormData({
            name: "",
            email: "",
            phone: "",
            comments: "",
          });
        } else {
          setAlert({ message: "Failed to send message. Please try again.", type: "error" });
        }
      })
      .catch(error => {
        console.error("Error:", error);
        setAlert({ message: "An error occurred. Please try again.", type: "error" });
      });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header /> 

     
      <section className="px-5 md:px-28 py-12 md:py-24 border-b border-white/10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 mb-6 md:mb-8 px-3 py-1 rounded-full bg-white/5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <span className="text-sm">Get in Touch</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-[76px] font-sora leading-[100%] tracking-tight md:tracking-[-1.52px] mb-6 md:mb-8">
            <span className="bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
              Let's Connect
            </span><br/>
            <span className="bg-gradient-to-r from-[#13D8F6] to-[#0F616D] bg-clip-text text-transparent">
              & Collaborate
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions? Need assistance? Our team is here to help. Fill out the form below, and we'll get back to you shortly.
          </p>
        </motion.div>
      </section>

 
      <div className="px-5 md:px-28 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">
   
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
         
            {alert.message && (
              <div
                className={`mb-4 p-4 rounded-lg border-l-4 ${
                  alert.type === "success"
                    ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                    : "border-[#E26426] bg-[#E26426]/10 text-[#E26426]"
                }`}
              >
                {alert.message}
              </div>
            )}

            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="w-full border border-white px-8 py-3 hover:bg-white/10 transition-all text-sm md:text-base"
              onKeyPress={(e) => { if (e.key === 'Enter') handleSubmit(e); }} // Allow Enter key to submit
            >
              Submit Message
            </motion.button>
          </motion.form>

          <motion.div 
            className="space-y-6 md:space-y-8 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="border-l-4 border-cyan-400 pl-4 md:pl-6">
              <h2 className="text-2xl md:text-[40px] font-sora mb-2 md:mb-4">Contact Info</h2>
              <p className="text-gray-300 text-sm md:text-base">
                We're always open to discuss new projects and collaborations.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-cyan-400/10 rounded-full">
                  <Mail className="text-cyan-400 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm md:text-base">Email</p>
                  <p className="text-base md:text-lg">ivishaicontactemail@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-cyan-400/10 rounded-full">
                  <Phone className="text-cyan-400 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm md:text-base">Phone</p>
                  <p className="text-base md:text-lg">+91 7013440427</p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-cyan-400/10 rounded-full">
                  <MapPin className="text-cyan-400 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm md:text-base">Office</p>
                  <p className="text-base md:text-lg">Hyderabad, Telengana, India</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 md:pt-8">
              <h3 className="text-base md:text-lg font-sora mb-3 md:mb-4"></h3>
              <div className="flex gap-3 md:gap-4">
             
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
