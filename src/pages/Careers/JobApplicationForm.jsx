import React, { useState } from 'react';
import { Briefcase, ChevronRight, Github, Linkedin, Globe, Twitter } from 'lucide-react';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    currentLocation: '',
    // Social & Portfolio Links
    linkedIn: '',
    gitHub: '',
    portfolio: '',
    twitter: '',
    otherUrl: '',
    // Application Details
    roleApplied: '',
    previousInternship: '',
    previousCompany: '',
    excitement: '',
    // Technical Background
    activeGitHub: '',
    openSourceContributions: '',
    openSourceLinks: '',
    technologies: [],
    otherTechnologies: '',
    // Availability
    internshipAvailability: '',
    onboardingAvailability: '',
    fullTimeInterest: '',
    preferredLocation: '',
    // Education
    academicYear: '',
    otherAcademicYear: '',
    institution: '',
    course: '',
    // Additional Information
    additionalInfo: '',
    expectedStipend: '',
    noticePeriod: '',
  });

const handleChange = (e) => {
    console.log('Input changed:', e.target.name, e.target.value);

    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target;

      setFormData((prevData) => ({
        ...prevData,
        technologies: checkbox.checked
          ? [...prevData.technologies, value]
          : prevData.technologies.filter((tech) => tech !== value),
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will get back to you soon.');
  };

  const FormSection = ({ title, children }) => (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <ChevronRight className="h-5 w-5 text-blue-500" />
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">{children}</div>
    </div>
  );

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Redux', category: 'State Management' },
    { name: 'GraphQL', category: 'API' },
    { name: 'REST API', category: 'API' },
    { name: 'Jest', category: 'Testing' },
    { name: 'Cypress', category: 'Testing' },
    { name: 'Git', category: 'Version Control' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="bg-blue-500 p-3 rounded-lg">
            <Briefcase className="h-8 w-8 text-white" />
          </div>
          <div>
<h1 className="text-3xl font-bold text-gray-900">Frontend Engineer Application</h1>

            <p className="text-gray-600">Join our team and help build the future of web development</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormSection title="Personal Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                <input
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Location*</label>
                <input
                  type="text"
                  name="currentLocation"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                  placeholder="City, Country"
                />
              </div>
            </div>
          </FormSection>

          <FormSection title="Professional Links">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Linkedin className="h-5 w-5 text-blue-600" />
                <input
                  type="url"
                  name="linkedIn"
                  required
                  onChange={handleChange}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                  placeholder="LinkedIn Profile URL"
                />
              </div>
              <div className="flex items-center space-x-4">
                <Github className="h-5 w-5 text-gray-700" />
                <input
                  type="url"
                  name="gitHub"
                  required
                  onChange={handleChange}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                  placeholder="GitHub Profile URL"
                />
              </div>
              <div className="flex items-center space-x-4">
                <Globe className="h-5 w-5 text-green-600" />
                <input
                  type="url"
                  name="portfolio"
                  onChange={handleChange}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                  placeholder="Portfolio Website URL"
                />
              </div>
              <div className="flex items-center space-x-4">
                <Twitter className="h-5 w-5 text-blue-400" />
                <input
                  type="url"
                  name="twitter"
                  onChange={handleChange}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                  placeholder="Twitter Profile URL"
                />
              </div>
            </div>
          </FormSection>

          <FormSection title="Application Details">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Which role are you applying for?*</label>
                <select
                  name="roleApplied"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  <option value="">Select a role...</option>
                  <option value="Frontend Intern">Frontend Intern</option>
                  <option value="Frontend Engineer">Frontend Engineer</option>
                  <option value="Senior Frontend Engineer">Senior Frontend Engineer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What excites you about this role?*
                </label>
                <textarea
                  name="excitement"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                  rows={4}
                  placeholder="Tell us why you're interested in this position and what you hope to achieve"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expected Stipend/Salary*</label>
                  <input
                    type="text"
                    name="expectedStipend"
                    required
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                    placeholder="Expected monthly stipend"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notice Period</label>
                  <input
                    type="text"
                    name="noticePeriod"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                    placeholder="How soon can you join?"
                  />
                </div>
              </div>
            </div>
          </FormSection>

          <FormSection title="Technical Skills">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Which technologies are you proficient in?*
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {technologies.map((tech) => (
                    <div key={tech.name} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="technologies"
                        value={tech.name}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded bg-white"
                      />
                      <span className="text-sm text-gray-700">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Other Technologies</label>
                <input
                  type="text"
                  name="otherTechnologies"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                  placeholder="List any other technologies you're familiar with"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Open Source Contributions
                </label>
                <textarea
                  name="openSourceContributions"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                  rows={3}
                  placeholder="Describe your open source contributions"
                />
              </div>
            </div>
          </FormSection>

          <FormSection title="Availability & Preferences">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Can you join from 2nd June 2025 for 6 months?*
                  </label>
                  <select
                    name="internshipAvailability"
                    required
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                  >
                    <option value="">Select...</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Available for in-person onboarding?*
                  </label>
                  <select
                    name="onboardingAvailability"
                    required
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                  >
                    <option value="">Select...</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Maybe">Maybe</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Interested in full-time role after internship?*
                </label>
                <select
                  name="fullTimeInterest"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  <option value="">Select...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Maybe">Maybe</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Work Location</label>
                <select
                  name="preferredLocation"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  <option value="">Select...</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
            </div>
          </FormSection>

          <FormSection title="Additional Information">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Anything else you'd like us to know?
              </label>
              <textarea
                name="additionalInfo"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                rows={4}
                placeholder="Share any additional information that might be relevant to your application"
              />
            </div>
          </FormSection>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
