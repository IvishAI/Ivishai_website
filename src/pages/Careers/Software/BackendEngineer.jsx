// BackendEngineer.js
import React, { useState, useEffect } from "react";
import { 
  Briefcase, 
  DollarSign, 
  MapPin, 
  CheckCircle, 
  Database, 
  Users, 
  Brain,
  Server,
  Rocket,
  Target,
  Coffee,
  Share2,
  Link,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  Check,
  MessageCircle
} from "lucide-react";

import { useNavigate } from "react-router-dom"; 

const BackendEngineer = () => {
  const navigate = useNavigate();

  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const jobDetails = {
    title: "Backend Engineer at Ivish AI",
    description: "Join our innovative team as a Backend Engineer. Remote position with competitive salary.",
    url: window.location.href,
  };

  const responsibilities = [
    "Design and implement scalable microservices architecture",
    "Develop RESTful APIs and GraphQL endpoints",
    "Optimize database performance and query efficiency",
    "Implement security best practices and data protection measures",
    "Build and maintain CI/CD pipelines",
    "Collaborate with frontend teams for seamless integration"
  ];

  const requirements = [
    "4+ years of experience in backend development",
    "Strong proficiency in Node.js and Python",
    "Experience with MongoDB, PostgreSQL, and Redis",
    "Knowledge of microservices architecture and Docker",
    "Understanding of cloud services (AWS/GCP)",
    "Experience with testing and monitoring tools"
  ];

  const benefits = [
    { icon: Coffee, text: "Flexible working hours" },
    { icon: Server, text: "Latest tech stack" },
    { icon: DollarSign, text: "Competitive salary & equity" },
    { icon: Users, text: "Health insurance for you and family" },
    { icon: Brain, text: "Learning & development budget" },
    { icon: Rocket, text: "Career growth opportunities" }
  ];

  const shareOptions = {
    linkedin: () => {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(jobDetails.url)}`, '_blank');
    },
    twitter: () => {
      const text = `Check out this exciting opportunity: ${jobDetails.title}`;
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(jobDetails.url)}`, '_blank');
    },
    facebook: () => {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(jobDetails.url)}`, '_blank');
    },
    message: () => {
      const text = `Check out this job opportunity: ${jobDetails.title}\n${jobDetails.url}`;
      window.open(`sms:?body=${encodeURIComponent(text)}`, '_blank');
    },
    email: () => {
      const subject = encodeURIComponent(jobDetails.title);
      const body = encodeURIComponent(`I found this interesting job opportunity:\n\n${jobDetails.description}\n\n${jobDetails.url}`);
      window.location.href = `mailto:?subject=${subject}&body=${body}`;
    },
    copyLink: async () => {
      try {
        await navigator.clipboard.writeText(jobDetails.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showShareMenu && !event.target.closest('.share-menu-container')) {
        setShowShareMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showShareMenu]);

  const ShareMenu = () => (
    <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg p-4 w-64 z-50">
      <div className="space-y-3">
        <button
          onClick={shareOptions.linkedin}
          className="w-full flex items-center gap-3 px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors"
        >
          <Linkedin size={20} className="text-blue-600" />
          <span className="text-gray-700">Share on LinkedIn</span>
        </button>

        <button
          onClick={shareOptions.twitter}
          className="w-full flex items-center gap-3 px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors"
        >
          <Twitter size={20} className="text-blue-400" />
          <span className="text-gray-700">Share on Twitter</span>
        </button>

        <button
          onClick={shareOptions.facebook}
          className="w-full flex items-center gap-3 px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors"
        >
          <Facebook size={20} className="text-blue-600" />
          <span className="text-gray-700">Share on Facebook</span>
        </button>

        <button
          onClick={shareOptions.message}
          className="w-full flex items-center gap-3 px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors"
        >
          <MessageCircle size={20} className="text-green-500" />
          <span className="text-gray-700">Share via Message</span>
        </button>

        <button
          onClick={shareOptions.email}
          className="w-full flex items-center gap-3 px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors"
        >
          <Mail size={20} className="text-gray-600" />
          <span className="text-gray-700">Share via Email</span>
        </button>

        <div className="border-t border-gray-200 my-2"></div>

        <button
          onClick={shareOptions.copyLink}
          className="w-full flex items-center gap-3 px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors"
        >
          {copied ? (
            <>
              <Check size={20} className="text-green-500" />
              <span className="text-green-500">Copied!</span>
            </>
          ) : (
            <>
              <Link size={20} className="text-gray-600" />
              <span className="text-gray-700">Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Database size={32} />
              <h1 className="text-4xl md:text-5xl font-bold">Backend Engineer</h1>
            </div>
            <div className="relative share-menu-container">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Share2 size={20} />
                <span className="hidden md:inline">Share</span>
              </button>
              {showShareMenu && <ShareMenu />}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center gap-2">
              <MapPin className="text-blue-300" />
              <span>Remote (Worldwide)</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="text-blue-300" />
              <span>Full-time</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="text-blue-300" />
              <span>$90,000 - $140,000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-8">
            <section className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">About the Role</h2>
              <p className="text-gray-600 leading-relaxed">
                We're seeking a skilled Backend Engineer to join our team at Ivish AI. 
                You'll be responsible for building robust, scalable services that power 
                our AI applications and handle millions of requests daily.
              </p>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Key Responsibilities</h2>
              <div className="space-y-3">
                {responsibilities.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Requirements</h2>
              <div className="space-y-3">
                {requirements.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Target className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Quick Apply</h3>
              <button 
                onClick={() => {
                  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
                  if (isLoggedIn) {
                    navigate("/JobApplicationForm");
                  } else {
                    navigate("/Login");
                  }
                }} 
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now

              </button>
              <p className="text-gray-500 text-sm mt-4 text-center">
                Usually responds within 48 hours
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Benefits</h3>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-600">
                    <benefit.icon className="text-blue-500" size={20} />
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js", "Python", "MongoDB", "PostgreSQL", 
                  "Docker", "AWS", "Redis", "GraphQL"
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackendEngineer;
