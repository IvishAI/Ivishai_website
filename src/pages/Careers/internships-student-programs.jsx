import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Bookmark, BookmarkCheck, Briefcase, Clock, Users, Rocket, Globe } from "lucide-react";

const InternshipsStudentPrograms = () => {
  const navigate = useNavigate();
  const [savedJobs, setSavedJobs] = useState({});

  const perks = [
    {
      icon: Globe,
      title: "Remote-First Culture",
      description: "Work from anywhere in the world with flexible hours"
    },
    {
      icon: Rocket,
      title: "Latest Technology",
      description: "Build with cutting-edge AI and cloud technologies"
    },
    {
      icon: Users,
      title: "Collaborative Team",
      description: "Work with talented engineers from around the globe"
    }
  ];

  const internships = [
    {
      title: "AI Research Intern",
      description: "Work alongside our AI experts to develop and test machine learning models.",
      location: "Remote",
      link: "/ai-research-intern",
      type: "Internship",
      salary: "Unpaid",
      postedAt: "2 days ago",
      techStack: ["Python", "TensorFlow"],
    },
    {
      title: "Software Engineering Intern",
      description: "Gain real-world experience by contributing to AI-powered applications.",
      location: "Remote",
      link: "/software-engineering-intern",
      type: "Internship",
      salary: "Unpaid",
      postedAt: "1 week ago",
      techStack: ["JavaScript", "React"],
    },
    {
      title: "Data Science Intern",
      description: "Work on data pipelines, analytics, and predictive models.",
      location: "Remote",
      link: "/data-science-intern",
      type: "Internship",
      salary: "Unpaid",
      postedAt: "3 days ago",
      techStack: ["Python", "Pandas"],
    },
  ];

  const toggleSaveJob = (index) => {
    setSavedJobs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Internships & Student Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your career with hands-on experience at Ivish AI. Our programs provide mentorship and real-world projects.
          </p>
        </div>

        {/* Perks Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {perks.map((perk, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <perk.icon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{perk.title}</h3>
              <p className="text-gray-600">{perk.description}</p>
            </div>
          ))}
        </div>

        {/* Internship Listings */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Available Internships</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {internships.map((internship, index) => (
            <div
              key={index}
              onClick={() => navigate(internship.link)}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 p-6"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSaveJob(index);
                }}
                className="absolute top-4 right-4 text-gray-500 hover:text-blue-600 p-2"
              >
                {savedJobs[index] ? (
                  <BookmarkCheck size={24} className="text-blue-600" />
                ) : (
                  <Bookmark size={24} />
                )}
              </button>

              <h2 className="text-xl font-semibold text-gray-900">{internship.title}</h2>
              <p className="text-gray-500 mt-1">{internship.description}</p>
              <div className="flex items-center gap-2 mt-2">
                <MapPin size={18} className="text-gray-500" />
                <span className="text-gray-500">{internship.location}</span>
                <Briefcase size={18} className="text-gray-500" />
                <span className="text-gray-500">{internship.type}</span>
                <Clock size={18} className="text-gray-500" />
                <span className="text-gray-500">{internship.salary}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {internship.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipsStudentPrograms;
