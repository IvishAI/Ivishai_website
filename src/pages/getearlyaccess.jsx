import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, User, Phone, ArrowRight, ArrowLeft, Check, Sparkles } from "lucide-react";

const EarlyAccess = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const steps = [
    {
      id: "name",
      label: "What's your name?",
      description: "Let us know who you are",
      placeholder: "Enter your full name",
      icon: User,
      type: "text",
      validate: (val) => (!val.trim() ? "Please enter your name" : null),
    },
    {
      id: "email",
      label: "What's your email?",
      description: "We'll send your access details here",
      placeholder: "your.email@example.com",
      icon: Mail,
      type: "email",
      validate: (val) =>
        !val.trim()
          ? "Please enter your email"
          : !/^\S+@\S+\.\S+$/.test(val)
          ? "Please enter a valid email"
          : null,
    },
    {
      id: "phone",
      label: "What's your phone number?",
      description: "For important updates only",
      placeholder: "+1 (555) 000-0000",
      icon: Phone,
      type: "tel",
      validate: (val) =>
        !val.trim()
          ? "Please enter your phone number"
          : !/^[0-9+\-\s()]{7,20}$/.test(val)
          ? "Please enter a valid phone number"
          : null,
    },
  ];

  const currentField = steps[currentStep];

  const handleNext = () => {
    const error = currentField.validate(form[currentField.id]);
    if (error) {
      setErrors({ [currentField.id]: error });
      return;
    }

    setErrors({});

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setErrors({});
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNext();
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "99b0e5c7-be57-4db4-b8ce-20e98d3ba32a");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("subject", "New Early Access Signup - VerbX");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setLoading(false);

      if (data.success) {
        setStatus("success");
        setTimeout(() => {
          window.location.href = "/";
        }, 2500);
      } else {
        setStatus("failed");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setStatus("failed");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen h-screen bg-black flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
            className="relative w-24 h-24 mx-auto mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-orange-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-orange-500 
                           flex items-center justify-center shadow-2xl">
              <Check className="w-12 h-12 text-white" strokeWidth={3} />
            </div>
          </motion.div>
          <h2 className="text-4xl font-bold text-white mb-4">Welcome Aboard!</h2>
          <p className="text-gray-400 text-lg mb-2">You're on the VerbX early access list</p>
          <p className="text-cyan-400">Check your email for next steps</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen h-screen bg-black text-white flex items-center justify-center px-4 py-6 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-black to-orange-900/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-400/10 to-orange-500/10 border border-cyan-400/20 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-medium text-cyan-400">Limited Spots Available</span>
          </motion.div>
          
          <h1
            className="text-4xl md:text-5xl font-bold mb-2"
            style={{
              background: "linear-gradient(135deg, #13D8F6 0%, #E26426 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Get Early Access
          </h1>
          <p className="text-gray-400 text-base">Join the waitlist for VerbX Language OS</p>
        </motion.div>

        {/* Progress Bar with Dots */}
        <div className="mb-6 mx-auto max-w-sm">
          <div className="flex items-center justify-center gap-2.5 mb-3">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="relative"
                >
                  {/* Glow effect for active step */}
                  {index === currentStep && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-orange-500 rounded-full blur-md"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  
                  <div
                    className={`
                      relative w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                      transition-all duration-500 border-2
                      ${
                        index < currentStep
                          ? "bg-gradient-to-br from-cyan-400 to-orange-500 border-transparent text-white shadow-lg"
                          : index === currentStep
                          ? "bg-black border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-400/50"
                          : "bg-gray-900 border-gray-700 text-gray-600"
                      }
                    `}
                  >
                    {index < currentStep ? (
                      <Check className="w-5 h-5" strokeWidth={3} />
                    ) : (
                      index + 1
                    )}
                  </div>
                </motion.div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="relative w-14 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-orange-500"
                      initial={{ x: "-100%" }}
                      animate={{
                        x: index < currentStep ? "0%" : "-100%",
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-1">Step {currentStep + 1} of {steps.length}</p>
            <div className="flex justify-center gap-1.5">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentStep 
                      ? "w-8 bg-gradient-to-r from-cyan-400 to-orange-500" 
                      : index < currentStep 
                        ? "w-4 bg-cyan-400/50"
                        : "w-4 bg-gray-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Form Card with layered design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          {/* Card shadow layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-orange-500/5 rounded-3xl blur-xl"></div>
          <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/20 to-orange-500/20 rounded-3xl blur-lg"></div>
          
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 
                          rounded-3xl p-6 md:p-8 border border-gray-800 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                {/* Icon with gradient border */}
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                  className="mb-5"
                >
                  <div className="relative w-16 h-16 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-orange-500 rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-orange-500/20 
                                    border-2 border-cyan-400/40 flex items-center justify-center backdrop-blur-sm">
                      {React.createElement(currentField.icon, {
                        className: "w-8 h-8 text-cyan-400",
                        strokeWidth: 2,
                      })}
                    </div>
                  </div>
                </motion.div>

                {/* Question */}
                <div className="text-center mb-5">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {currentField.label}
                  </h2>
                  <p className="text-gray-500 text-xs">{currentField.description}</p>
                </div>

                {/* Input with floating label effect */}
                <div className="mb-5">
                  <div className="relative">
                    <input
                      type={currentField.type}
                      value={form[currentField.id]}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, [currentField.id]: e.target.value }))
                      }
                      onKeyPress={handleKeyPress}
                      placeholder={currentField.placeholder}
                      autoFocus
                      className="w-full bg-black/50 border-2 border-gray-700 rounded-2xl px-5 py-3.5 text-base
                                 text-white placeholder:text-gray-600
                                 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20
                                 transition-all duration-300"
                    />
                    
                    {/* Gradient bottom border on focus */}
                    {form[currentField.id] && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-orange-500 rounded-full"
                      />
                    )}
                  </div>
                  
                  {errors[currentField.id] && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-2 flex items-center gap-2 pl-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                      {errors[currentField.id]}
                    </motion.p>
                  )}
                </div>

                {/* Error Status */}
                {status === "failed" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-5 p-3 bg-red-500/10 border-2 border-red-500/30 rounded-xl text-red-400 text-xs text-center"
                  >
                    Something went wrong. Please try again.
                  </motion.div>
                )}

                {/* Buttons */}
                <div className="flex gap-3">
                  {currentStep > 0 && (
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      onClick={handleBack}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3.5 rounded-2xl bg-gray-800 border-2 border-gray-700 text-gray-300
                                 hover:border-gray-600 hover:bg-gray-750 transition-all
                                 flex items-center justify-center gap-2 font-medium text-sm"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </motion.button>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleNext}
                    disabled={loading}
                    className="flex-1 py-3.5 rounded-2xl font-bold text-base text-black relative overflow-hidden
                               shadow-xl shadow-cyan-400/30 hover:shadow-cyan-400/50
                               transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-cyan-300 to-orange-500"></div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-400 to-cyan-400 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <span className="relative flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : currentStep === steps.length - 1 ? (
                        <>
                          Submit Request
                          <Check className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Continue
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </div>

                {/* Hint */}
                <p className="text-center text-gray-600 text-xs mt-4">
                  Press <kbd className="px-1.5 py-0.5 bg-gray-800 rounded border border-gray-700 text-cyan-400 font-mono text-xs">Enter ↵</kbd> to continue
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EarlyAccess;
