import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  MapPin, 
  Bookmark, 
  BookmarkCheck, 
  Briefcase, 
  Clock, 
  DollarSign,
  Code,
  Database,
  ArrowRight,
  Users,
  Rocket,
  Globe
} from "lucide-react";

const SoftwareEngineering = () => {
  const navigate = useNavigate();
  const [savedJobs, setSavedJobs] = useState({});

  const jobs = [
    {
      title: "Frontend Developer",
      icon: Code,
      description: "Join our team to create intuitive and responsive user interfaces that make AI accessible to everyone.",
      location: "Remote (Worldwide)",
      salary: "$80,000 - $120,000",
      type: "Full-time",
      postedAt: "2 days ago",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind"],
      link: "/FrontendDeveloper",
    },
    {
      title: "Backend Engineer",
      icon: Database,
      description: "Build scalable microservices and APIs that power our AI applications and handle millions of requests.",
      location: "Remote (Worldwide)",
      salary: "$90,000 - $140,000",
      type: "Full-time",
      postedAt: "1 day ago",
      techStack: ["Node.js", "Python", "MongoDB", "AWS"],
      link: "/BackendEngineer",
    },
  ];

  const toggleSaveJob = (e, index) => {
    e.stopPropagation();
    setSavedJobs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Software Engineering at Ivish AI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our team of innovative engineers building the future of AI technology. 
            We offer competitive compensation, flexible work, and cutting-edge projects.
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



        {/* Open Positions */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Open Positions</h2>


        <div className="grid grid-cols-1 gap-6">

          {jobs.map((job, index) => (
            <div
              key={index}
              onClick={() => navigate(job.link)}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 hover:border-blue-100 p-6"

            >
              <div className="flex justify-between items-start mb-6">

                <div className="flex items-start gap-4">

                  <div className="p-3 bg-blue-50 rounded-lg">

                    <job.icon className="text-blue-600" size={24} />

                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-gray-500 mt-1">{job.description}</p>

                  </div>
                </div>
                <button
                  onClick={(e) => toggleSaveJob(e, index)}
                  className="text-gray-400 hover:text-blue-600 transition-colors"

                >
                  {savedJobs[index] ? (
                <BookmarkCheck size={24} className="text-blue-600" />

                  ) : (
                    <Bookmark size={24} />
                  )}
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">

                {job.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm"

                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin size={18} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Briefcase size={18} />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <DollarSign size={18} />
                    <span>{job.salary}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock size={18} />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock size={18} />
                    <span>{job.postedAt}</span>
                  </div>
                  <ArrowRight className="text-blue-600" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwareEngineering;
