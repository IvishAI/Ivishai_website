import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // ✅ UPDATED FULLY WORKING WEB3FORMS-INTEGRATED SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setStatus("");

    const formSubmitData = new FormData();
    formSubmitData.append("access_key", "0dde399e-2270-4db1-a73c-8060776f1901"); // ✅ NEW CONTACT ACCESS KEY
    formSubmitData.append("name", formData.name);
    formSubmitData.append("email", formData.email);
    formSubmitData.append("phone", formData.phone);
    formSubmitData.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formSubmitData,
      });

      const data = await response.json();
      setLoading(false);

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        console.error("Web3Forms Error:", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setLoading(false);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="px-5 md:px-28 pt-32 pb-12 md:pt-40 md:pb-20 border-b border-white/10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 md:mb-8 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/10 to-orange-500/10 border border-cyan-400/30"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium">Get in Touch</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-[76px] font-sora leading-[100%] tracking-tight md:tracking-[-1.52px] mb-6 md:mb-8">
            <span className="bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
              Let's Connect
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#13D8F6] to-[#0F616D] bg-clip-text text-transparent">
              & Collaborate
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Have questions? Need assistance? Our team is here to help. Fill out the form below,
            and we'll get back to you shortly.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <div className="px-5 md:px-28 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-orange-500/5 rounded-3xl blur-xl"></div>
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/10 to-orange-500/10 rounded-3xl blur-lg"></div>

            <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 shadow-2xl">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Success / Error Messages */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="font-medium text-green-400">Message sent successfully!</p>
                        <p className="text-sm text-green-400/80">We'll get back to you soon.</p>
                      </div>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400" />
                      <div>
                        <p className="font-medium text-red-400">Failed to send message</p>
                        <p className="text-sm text-red-400/80">Please try again later.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-black/50 border-2 rounded-xl text-white 
                        placeholder:text-gray-600 focus:outline-none transition-all duration-200
                        ${
                          errors.name
                            ? "border-red-500/50 focus:border-red-500"
                            : "border-gray-700 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20"
                        }`}
                      placeholder="John Doe"
                    />
                    {formData.name && !errors.name && (
                      <CheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-400" />
                    )}
                  </div>
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-black/50 border-2 rounded-xl text-white 
                        placeholder:text-gray-600 transition-all duration-200
                        ${
                          errors.email
                            ? "border-red-500/50 focus:border-red-500"
                            : "border-gray-700 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20"
                        }`}
                      placeholder="john@example.com"
                    />
                    {formData.email && !errors.email && (
                      <CheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-400" />
                    )}
                  </div>
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-black/50 border-2 rounded-xl text-white
                        placeholder:text-gray-600 transition-all duration-200
                        ${
                          errors.phone
                            ? "border-red-500/50 focus:border-red-500"
                            : "border-gray-700 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20"
                        }`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {formData.phone && !errors.phone && (
                      <CheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-400" />
                    )}
                  </div>
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-3 bg-black/50 border-2 rounded-xl text-white
                      placeholder:text-gray-600 transition-all duration-200 resize-none
                      ${
                        errors.message
                          ? "border-red-500/50 focus:border-red-500"
                          : "border-gray-700 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20"
                      }`}
                    placeholder="Tell us about your project or inquiry..."
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full py-4 rounded-xl font-bold text-base text-black relative overflow-hidden
                             shadow-xl shadow-cyan-400/30 hover:shadow-cyan-400/50
                             transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-cyan-300 to-orange-500"></div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-400 to-cyan-400 opacity-0"
                    whileHover={{ opacity: loading ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <span className="relative flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </span>
                </motion.button>

              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6 md:space-y-8 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="border-l-4 border-cyan-400 pl-4 md:pl-6">
              <h2 className="text-2xl md:text-[40px] font-sora mb-2 md:mb-4">Contact Info</h2>
              <p className="text-gray-400 text-sm md:text-base">
                We're always open to discuss new projects and collaborations.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 md:gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-cyan-400/30 transition-all"
              >
                <div className="p-2 md:p-3 bg-gradient-to-br from-cyan-400/20 to-cyan-400/5 rounded-xl">
                  <Mail className="text-cyan-400 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs md:text-sm">Email</p>
                  <p className="text-sm md:text-base font-medium">ivishaicontactemail@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 md:gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-cyan-400/30 transition-all"
              >
                <div className="p-2 md:p-3 bg-gradient-to-br from-orange-500/20 to-orange-500/5 rounded-xl">
                  <Phone className="text-orange-500 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs md:text-sm">Phone</p>
                  <p className="text-sm md:text-base font-medium">+91 7013440427</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 md:gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-cyan-400/30 transition-all"
              >
                <div className="p-2 md:p-3 bg-gradient-to-br from-cyan-400/20 to-cyan-400/5 rounded-xl">
                  <MapPin className="text-cyan-400 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs md:text-sm">Office</p>
                  <p className="text-sm md:text-base font-medium">Hyderabad, Telangana, India</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-cyan-400/5 to-orange-500/5 border border-cyan-400/20 rounded-2xl">
              <h3 className="text-lg font-semibold mb-2">Response Time</h3>
              <p className="text-gray-400 text-sm">
                We typically respond within 24–48 hours during business days.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
