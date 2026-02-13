import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Briefcase, Mail, Phone, FileText, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Header from "../../components/carheader";
import Footer from "../../components/Footer";
import { Link } from 'react-router-dom';

const StayUpdatedForm = () => {
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("idle"); // idle, loading, success, error

    const onSubmit = async (event) => {
        event.preventDefault();
        setStatus("loading");
        setResult("Sending....");

        const formData = new FormData(event.target);
        formData.append("access_key", "aaf02cbb-6a0e-4b35-aa72-ca11d2f43b09");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                setStatus("error");
                setResult(data.message || "Something went wrong/Error");
            }
        } catch (error) {
            setStatus("error");
            setResult("Network error. Please try again.");
        }
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col pt-20">

                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 bg-gradient-to-br from-cyan-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-full opacity-10 bg-gradient-to-tr from-orange-900 via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 py-12 relative z-10 flex-grow flex flex-col justify-center max-w-4xl">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <Link to="/careers" className="inline-flex items-center text-gray-400 hover:text-cyan-400 transition-colors mb-6">
                            <ArrowLeft size={20} className="mr-2" />
                            Back to Careers
                        </Link>

                        <h1 className="text-4xl md:text-6xl font-sora font-normal mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                Join Our Talent Network
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl">
                            Stay updated on future opportunities. Tell us about yourself, and we'll reach out when the right role opens up.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl"
                    >
                        {status === 'success' ? (
                            <div className="text-center py-12">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <CheckCircle size={40} className="text-green-500" />
                                </motion.div>
                                <h3 className="text-2xl font-sora text-white mb-2">Thank You!</h3>
                                <p className="text-gray-400 mb-8">Your details have been submitted. We'll be in touch.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                                >
                                    Submit Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={onSubmit} className="space-y-6">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 font-medium flex items-center gap-2">
                                            <User size={16} /> Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-gray-600"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    {/* Role */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 font-medium flex items-center gap-2">
                                            <Briefcase size={16} /> Role
                                        </label>
                                        <input
                                            type="text"
                                            name="role"
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-gray-600"
                                            placeholder="Frontend Developer, Designer, etc."
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 font-medium flex items-center gap-2">
                                            <Mail size={16} /> Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-gray-600"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 font-medium flex items-center gap-2">
                                            <Phone size={16} /> Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-gray-600"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>

                                {/* Resume Upload */}
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium flex items-center gap-2">
                                        <FileText size={16} /> Resume/CV
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            name="resume"
                                            accept=".pdf,.doc,.docx"
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-500/10 file:text-cyan-400 hover:file:bg-cyan-500/20"
                                        />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX. Max size 5MB.</p>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-4 rounded-xl shadow-lg shadow-cyan-500/20 transform transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <Loader2 size={20} className="animate-spin" /> Sending...
                                            </>
                                        ) : (
                                            <>
                                                Submit Information <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg mt-4 border border-red-400/20">
                                        <AlertCircle size={20} />
                                        <span>{result}</span>
                                    </div>
                                )}
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default StayUpdatedForm;
