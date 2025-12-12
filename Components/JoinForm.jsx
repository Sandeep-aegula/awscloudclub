'use client';

import { useState } from 'react';

export default function JoinForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    department: '',
    year: '',
    reason: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        department: '',
        year: '',
        reason: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-semibold text-[#E8E8E8] mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[#404040] bg-[#262626] text-[#E8E8E8] focus:outline-none focus:ring-2 focus:ring-[#C96969] focus:border-transparent transition-all placeholder-[#808080]"
          placeholder="Your full name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-[#E8E8E8] mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[#404040] bg-[#262626] text-[#E8E8E8] focus:outline-none focus:ring-2 focus:ring-[#C96969] focus:border-transparent transition-all placeholder-[#808080]"
          placeholder="your.email@example.com"
        />
      </div>

      {/* Department */}
      <div>
        <label htmlFor="department" className="block text-sm font-semibold text-[#E8E8E8] mb-2">
          Department *
        </label>
        <select
          id="department"
          name="department"
          required
          value={formData.department}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[#404040] bg-[#262626] text-[#E8E8E8] focus:outline-none focus:ring-2 focus:ring-[#C96969] focus:border-transparent transition-all"
        >
          <option value="" className="bg-[#262626] text-[#E8E8E8]">Select your department</option>
          <option value="CSE" className="bg-[#262626] text-[#E8E8E8]">Computer Science & Engineering</option>
          <option value="IT" className="bg-[#262626] text-[#E8E8E8]">Information Technology</option>
          <option value="ECE" className="bg-[#262626] text-[#E8E8E8]">Electronics & Communication</option>
          <option value="MECH" className="bg-[#262626] text-[#E8E8E8]">Mechanical Engineering</option>
          <option value="CIVIL" className="bg-[#262626] text-[#E8E8E8]">Civil Engineering</option>
          <option value="Other" className="bg-[#262626] text-[#E8E8E8]">Other</option>
        </select>
      </div>

      {/* Year */}
      <div>
        <label htmlFor="year" className="block text-sm font-semibold text-[#E8E8E8] mb-2">
          Year of Study *
        </label>
        <select
          id="year"
          name="year"
          required
          value={formData.year}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[#404040] bg-[#262626] text-[#E8E8E8] focus:outline-none focus:ring-2 focus:ring-[#C96969] focus:border-transparent transition-all"
        >
          <option value="" className="bg-[#262626] text-[#E8E8E8]">Select your year</option>
          <option value="1" className="bg-[#262626] text-[#E8E8E8]">1st Year</option>
          <option value="2" className="bg-[#262626] text-[#E8E8E8]">2nd Year</option>
          <option value="3" className="bg-[#262626] text-[#E8E8E8]">3rd Year</option>
          <option value="4" className="bg-[#262626] text-[#E8E8E8]">4th Year</option>
        </select>
      </div>

      {/* Reason to Join */}
      <div>
        <label htmlFor="reason" className="block text-sm font-semibold text-[#E8E8E8] mb-2">
          Why do you want to join? *
        </label>
        <textarea
          id="reason"
          name="reason"
          required
          value={formData.reason}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-[#404040] bg-[#262626] text-[#E8E8E8] focus:outline-none focus:ring-2 focus:ring-[#C96969] focus:border-transparent transition-all resize-none placeholder-[#808080]"
          placeholder="Tell us about your interest in cloud technologies and what you hope to achieve..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full btn-primary py-3 font-semibold"
      >
        {submitted ? '✓ Submitted Successfully!' : 'Join Now'}
      </button>

      {submitted && (
        <div className="p-4 bg-[#2E5E2E] border border-[#4A9E4A] text-[#90EE90] rounded-lg text-center">
          Thank you for joining! We&apos;ll get in touch soon.
        </div>
      )}
    </form>
  );
}
