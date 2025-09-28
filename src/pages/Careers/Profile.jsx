import React, { useState, useEffect } from "react";
import { 
  LogOut, Edit, Save, Upload, Briefcase, FileText, 
  User, PlusCircle, Trash2, Mail, Github, Linkedin, 
  Globe, Calendar, Building, GraduationCap, Phone,
  FileUp, Link, Camera
} from "lucide-react";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState("Overview");
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "John Doe",
    title: "Software Engineer",
    phone: "",
    gender: "",
    college: "",
    department: "",
    rollNumber: "",
    graduationYear: "",
    skills: ["React", "TypeScript", "Node.js"],
    experience: [],
    documents: [],
    jobApplications: [],
    linkedin: "",
    github: "",
    portfolio: "",
    email: "",
    bio: "Passionate software engineer with a focus on creating beautiful and functional web applications.",
    location: "San Francisco, CA"
  });

  useEffect(() => {
    const storedEmail = localStorage.getItem("loggedInEmail") || "example@example.com";
    setFormData((prev) => ({ ...prev, email: storedEmail }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInEmail");
    window.location.href = "/";
  };

  const handleProfileImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDocumentUpload = (e) => {
    const files = Array.from(e.target.files || []);
    const newDocuments = files.map(file => ({
      name: file.name,
      type: file.type,
      size: file.size,
      uploadDate: new Date().toISOString()
    }));
    
    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents, ...newDocuments]
    }));
  };

  const handleRemoveDocument = (index) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index)
    }));
  };

  const handleAddSkill = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, e.target.value.trim()],
      }));
      e.target.value = "";
    }
  };

  const handleRemoveSkill = (index) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  const handleAddExperience = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        experience: [...(prev.experience || []), e.target.value.trim()],
      }));
      e.target.value = "";
    }
  };

  const handleRemoveExperience = (index) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Job Applications":
        return (
          <div className="space-y-4">
            {formData.jobApplications.length === 0 ? (
              <div className="text-center py-8">
                <FileText size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium mb-2">No Job Applications Yet</h3>
                <p className="text-gray-500 mb-4">You haven't applied to any jobs yet.</p>
                <button
                  className="inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md"
                >
                  <Link className="w-4 h-4 mr-2" />
                  Visit Our Careers Page
                </button>
              </div>
            ) : (
              <div className="grid gap-4">
                {formData.jobApplications.map((application, index) => (
                  <div key={index} className="border p-4 rounded-lg">
                    {/* Application details would go here */}
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case "Documents":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium">Documents</h2>
              <label className="cursor-pointer border px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                <FileUp size={18} />
                <span>Upload Document</span>
                <input
                  type="file"
                  className="hidden"
                  multiple
                  onChange={handleDocumentUpload}
                  accept=".pdf,.doc,.docx,.txt"
                />
              </label>
            </div>

            {formData.documents.length === 0 ? (
              <div className="text-center py-8">
                <FileText size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium">No Documents Found</h3>
                <p className="text-gray-500">Upload your resume, certificates, or other documents</p>
              </div>
            ) : (
              <div className="grid gap-4">
                {formData.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="text-gray-400" size={24} />
                      <div>
                        <h4 className="font-medium">{doc.name}</h4>
                        <p className="text-sm text-gray-500">
                          Uploaded on {new Date(doc.uploadDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveDocument(index)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return (
          <div className="space-y-8">
            {/* Basic Information */}
            <section className="border-2 border-gray-100 rounded-xl p-6 bg-white shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <User size={20} />
                Basic Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    className="w-full p-2.5 border-2 border-gray-200 rounded-lg bg-gray-50"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 p-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    disabled={!isEditing}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="border-2 border-gray-100 rounded-xl p-6 bg-white shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <GraduationCap size={20} />
                Education
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">College/University</label>
                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Roll Number</label>
                  <input
                    type="text"
                    name="rollNumber"
                    value={formData.rollNumber}
                    onChange={handleChange}
                    className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Graduation Year</label>
                  <input
                    type="text"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="border-2 border-gray-100 rounded-xl p-6 bg-white shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {formData.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border-2 border-gray-200 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium text-gray-700"
                  >
                    {skill}
                    {isEditing && (
                      <button
                        onClick={() => handleRemoveSkill(index)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {isEditing && (
                <input
                  type="text"
                  placeholder="Add a skill and press Enter"
                  onKeyDown={handleAddSkill}
                  className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
              )}
            </section>

            {/* Experience */}
            <section className="border-2 border-gray-100 rounded-xl p-6 bg-white shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Briefcase size={20} />
                Work Experience
              </h2>
              {formData.experience.length === 0 && !isEditing ? (
                <p className="text-gray-500 text-center py-4">No work experience added yet.</p>
              ) : (
                <ul className="space-y-3">
                  {formData.experience.map((exp, index) => (
                    <li key={index} className="flex items-center justify-between p-3 border-2 border-gray-100 rounded-lg">
                      <span>{exp}</span>
                      {isEditing && (
                        <button
                          onClick={() => handleRemoveExperience(index)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <Trash2 size={18} />
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              )}
              {isEditing && (
                <input
                  type="text"
                  placeholder="Add work experience and press Enter"
                  onKeyDown={handleAddExperience}
                  className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all mt-4"
                />
              )}
            </section>

            {/* Social Links */}
            <section className="border-2 border-gray-100 rounded-xl p-6 bg-white shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Social Links</h2>
              <div className="space-y-4">
                <div className="relative">
                  <Linkedin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="LinkedIn URL"
                    className="w-full pl-10 p-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    disabled={!isEditing}
                  />
                </div>
                <div className="relative">
                  <Github size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="GitHub URL"
                    className="w-full pl-10 p-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    disabled={!isEditing}
                  />
                </div>
                <div className="relative">
                  <Globe size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    placeholder="Portfolio Website"
                    className="w-full pl-10 p-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </section>

            {/* Contact Form */}
            <section className="border-2 border-gray-100 rounded-xl p-6 bg-white shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Mail size={20} />
                Contact Me
              </h2>
              <p className="text-gray-600 mb-4">Send me a message and I'll get back to you as soon as possible.</p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-all font-medium"
                >
                  Send Message
                </button>
              </form>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex">
      {/* Sidebar Navigation */}
      <div className="w-72 border-r fixed h-full bg-white">
        <div className="p-6">
          <div className="flex items-center justify-center mb-8">
            <div className="relative group">
              <div className="w-28 h-28 border-2 border-gray-200 rounded-full p-1 bg-white shadow-sm">
                <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden bg-gray-50">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <User size={48} className="text-gray-400" />
                  )}
                </div>
              </div>
              {isEditing && (
                <label className="absolute bottom-0 right-0 bg-white border-2 border-gray-200 rounded-full p-2.5 cursor-pointer hover:bg-gray-50 group-hover:scale-110 transition-all shadow-sm">
                  <Camera size={16} className="text-gray-600" />
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleProfileImageUpload}
                  />
                </label>
              )}
            </div>
          </div>
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-gray-900">{formData.name}</h2>
            <p className="mt-1 text-gray-700">{formData.title}</p>
            <p className="text-sm text-gray-500 mt-2">{formData.location}</p>
          </div>
          <ul className="space-y-2">
            {[
              { name: "Overview", icon: User },
              { name: "Job Applications", icon: Briefcase },
              { name: "Documents", icon: FileText }
            ].map(({ name, icon: Icon }) => (
              <li
                key={name}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all ${
                  selectedTab === name 
                    ? "bg-gray-100 text-gray-900 font-medium" 
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setSelectedTab(name)}
              >
                <Icon size={18} />
                <span>{name}</span>
              </li>
            ))}
            <li 
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer transition-all mt-8"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-72 bg-white">
        <div className="max-w-4xl mx-auto px-8 py-8">
          {/* Header */}
          <div className="border-b pb-6 mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">{selectedTab}</h1>
                <p className="text-gray-600 mt-1">Manage your profile information</p>
              </div>
              {!isEditing ? (
                <button 
                  className="bg-white border-2 border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2 transition-all text-gray-700 font-medium shadow-sm"
                  onClick={() => setIsEditing(true)}
                >
                  <Edit size={18} />
                  <span>Edit Profile</span>
                </button>
              ) : (
                <button 
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 flex items-center gap-2 transition-all font-medium"
                  onClick={() => setIsEditing(false)}
                >
                  <Save size={18} />
                  <span>Save Changes</span>
                </button>
              )}
            </div>
          </div>

          {/* Dynamic Content */}
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Profile;