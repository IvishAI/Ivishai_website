import React, { useState } from "react";
import { Calendar, User, Bookmark, BookmarkCheck, Search, Menu, X, ArrowRight, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [savedBlogs, setSavedBlogs] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const blogs = [
    {
      id: 1,
      title: "Breaking Barriers with Empathy: The Journey of Sahith Vutukuri and IvishAI Quantum",
      description: "Discover the inspiring story behind IvishAI Quantum and its mission to create empathetic AI solutions that break down communication barriers worldwide.",
      author: "Startup Times",
      date: "Feb 15, 2025",
      image: "https://startuptimes.net/storage/f31cf060-2335-44fe-a5b8-a5ec3b0b8d25.jpg",
      link: "https://startuptimes.net/breaking-barriers-with-empathy-the-journey-of-sahith-vutukuri-and-ivishai-quantum",
      category: "Featured",
      readTime: "6 min read",
      tags: ["AI", "Startup", "Innovation", "Empathy"]
    },
    {
      id: 2,
      title: "How AI is Transforming Industries",
      description: "Explore how artificial intelligence is revolutionizing various sectors, from manufacturing to healthcare, and learn about the latest AI innovations driving business transformation.",
      author: "Ankith M",
      date: "Feb 10, 2025",
      image: "https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=1932&auto=format&fit=crop",
      link: "/ai-transforming-industries",
      category: "AI",
      readTime: "5 min read",
      tags: ["AI", "Digital Transformation", "Innovation"]
    },
    {
      id: 3,
      title: "The Future of AI-Powered Wearables",
      description: "Discover how AI-driven wearable technology is revolutionizing personal health monitoring, fitness tracking, and daily lifestyle management.",
      author: "Ankith M",
      date: "Jan 28, 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      link: "/ai-wearables",
      category: "Wearables",
      readTime: "4 min read",
      tags: ["Wearables", "AI", "Healthcare"]
    }
  ];

  const categories = ["All", "Featured", "AI", "Wearables"];

  const toggleSaveBlog = (id) => {
    setSavedBlogs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      (selectedCategory === "All" || blog.category === selectedCategory) &&
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBlogClick = (link) => {
    if (link.startsWith('http')) {
      window.open(link, '_blank');
    } else {
      window.location.href = link;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Modern Navbar */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <motion.h1
                className="text-2xl font-sora font-normal"
                style={{
                  background: 'linear-gradient(90deg, #D0D0D0 0%, #5F5F5F 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                IvishAI Blog
              </motion.h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-300 hover:text-cyan-400 transition">Home</a>
              <a href="/about" className="text-gray-300 hover:text-cyan-400 transition">About</a>
              <a href="/contact" className="text-gray-300 hover:text-cyan-400 transition">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md hover:bg-white/10 touch-manipulation select-none"
              style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onTouchStart={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="text-gray-300" size={24} /> : <Menu className="text-gray-300" size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black border-t border-white/10"
            >
              <div className="px-4 py-2 space-y-1">
                <a href="/" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                <a href="/about" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                <a href="/contact" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section with Products Page Style */}
      <div className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1
              className="font-sora font-normal leading-[100%] tracking-[-3px] mb-4"
              style={{
                background: 'linear-gradient(90deg, #D0D0D0 0%, #5F5F5F 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: 'clamp(48px, 8vw, 96px)'
              }}
            >
              IvishAI Insights
            </h1>
            <h2
              className="font-sora font-normal leading-[100%] tracking-[-2px] mb-8"
              style={{
                background: 'linear-gradient(90deg, #FFF 0%, #E26426 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: 'clamp(32px, 6vw, 56px)'
              }}
            >
              Exploring the Future of AI
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Discover cutting-edge insights and innovations shaping the future of human-machine collaboration
            </motion.p>

            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-orange-500 text-black rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                <Mail size={20} />
                Subscribe to Newsletter
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-5">
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-cyan-400"></div>
          <div className="absolute right-1/4 bottom-0 w-96 h-96 rounded-full bg-orange-500"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                />
                <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                    ${selectedCategory === cat
                      ? "bg-gradient-to-r from-cyan-400 to-orange-500 text-black shadow-md"
                      : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                    }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Blog Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            className="text-3xl font-sora mb-8 text-center"
            style={{
              background: 'linear-gradient(90deg, #FFF 0%, #E26426 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Featured Story
          </h2>
          <div
            onClick={() => handleBlogClick(blogs[0].link)}
            className="bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 overflow-hidden cursor-pointer group"
          >
            <div className="md:flex">
              <div className="md:w-1/2 relative overflow-hidden">
                <img
                  src={blogs[0].image}
                  alt={blogs[0].title}
                  className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-400/20">
                    Featured
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {blogs[0].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-sora text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {blogs[0].title}
                </h2>
                <p className="text-gray-300 mb-6 text-lg">{blogs[0].description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{blogs[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{blogs[0].date}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-cyan-400 font-medium">
                    Read Full Story
                    <ArrowRight size={18} className="ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredBlogs.slice(1).map((blog) => (
            <motion.div
              key={blog.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ y: -8 }}
              onClick={() => handleBlogClick(blog.link)}
              className="bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 overflow-hidden cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="px-2 py-1 bg-black/80 rounded-full text-sm text-gray-300 border border-white/20">
                    {blog.readTime}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSaveBlog(blog.id);
                    }}
                    className="p-2 bg-black/80 rounded-full border border-white/20 hover:bg-black transition-all duration-300"
                  >
                    {savedBlogs[blog.id] ? (
                      <BookmarkCheck className="text-cyan-400" size={20} />
                    ) : (
                      <Bookmark className="text-gray-300" size={20} />
                    )}
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs font-medium border border-cyan-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-sora text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-300 mb-4 line-clamp-2">{blog.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-cyan-400/10 to-orange-500/10 rounded-2xl p-8 border border-white/10 text-center"
        >
          <h3 className="text-2xl font-sora mb-4">Stay Updated with IvishAI</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest insights on AI innovation, industry trends, and our journey to transform human-machine collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-orange-500 text-black rounded-lg font-medium shadow-lg"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3
                className="text-2xl font-sora mb-4"
                style={{
                  background: 'linear-gradient(90deg, #D0D0D0 0%, #5F5F5F 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                IvishAI Quantum
              </h3>
              <p className="text-gray-400">Building the future of human-machine collaboration through empathetic AI solutions.</p>
            </div>
            <div>
              <h4 className="text-lg font-sora mb-4 text-gray-300">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a></li>
                <li><a href="/products" className="text-gray-400 hover:text-cyan-400 transition-colors">Products</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-sora mb-4 text-gray-300">Categories</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">AI Innovation</a></li>
                <li><a href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Industry Insights</a></li>
                <li><a href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Company News</a></li>
                <li><a href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Technology</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-sora mb-4 text-gray-300">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Twitter</a>
                <a href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">LinkedIn</a>
                <a href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">GitHub</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} IvishAI Quantum Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;