import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, CheckCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating successful login without backend call

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/careers");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative">
      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-5 right-5 bg-cyan-400/10 text-cyan-400 px-6 py-3 rounded-lg border border-cyan-400/30 flex items-center gap-2"
          >
            <CheckCircle size={20} />
            <span>Login Successful! Redirecting...</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="absolute top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 py-4 px-16 md:px-28">
        <motion.h1 
          className="text-2xl font-sora bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          IvishAI
        </motion.h1>
      </nav>

      <motion.div 
        className="bg-white/5 p-8 rounded-xl border border-white/10 w-full max-w-md mx-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/5">
            <span className="text-sm">Secure Access</span>
          </div>
          <h2 className="text-2xl font-sora mb-2">
            <span className="bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent">
              Welcome Back
            </span>
          </h2>
          <p className="text-gray-300">Sign in to continue your AI journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Email Address</label>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <Mail className="absolute right-3 top-3 text-gray-400" size={20} />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-cyan-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full border border-white px-8 py-3 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            Sign In <ArrowRight size={18} />
          </motion.button>
        </form>

        <p className="text-center text-gray-300 mt-6">
          Don't have an account?{' '}
          <a href="/signup" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            Create Account
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
