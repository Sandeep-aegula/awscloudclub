'use client';

import { useState } from 'react';
import { Users, Handshake, Mic, MapPin, Mail, Loader2 } from 'lucide-react';
import Particles from '@/Components/Particles';

export default function JoinUs() {
  const [activeTab, setActiveTab] = useState('core');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    query: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, tab: activeTab }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Thank you! Your message has been sent. We will get back to you soon.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          query: ''
        });
      } else {
        alert(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const tabs = [
    { id: 'core', label: 'Core Team', icon: Users },
    { id: 'collab', label: 'Collaborate', icon: Handshake },
    { id: 'speak', label: 'Want to Speak?', icon: Mic }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-primary-bg">
      <div className="absolute inset-0 z-0">
        <Particles />
      </div>
      

      <main className="relative z-10 flex-1 py-16 px-4 md:px-8">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-text mb-6 leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto">
            Join our community, collaborate with us, or speak at our events. We&apos;d love to hear from you!
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Contact Info & Map */}
          <div className="space-y-8">
            
            {/* Contact Information */}
            <div className="backdrop-blur-md bg-[rgba(26,34,48,0.6)] border border-[rgba(86,185,242,0.2)] rounded-lg p-8 hover:border-[rgba(86,185,242,0.4)] transition-all duration-300">
              <h2 className="text-2xl font-bold text-[#FFFFFF] mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[rgba(255,153,0,0.1)] flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#FF9900]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#FFFFFF] mb-2">Address</h3>
                    <p className="text-[#D0D5DD]">
                      MLRITM Campus<br />
                      Dundigal, Hyderabad<br />
                      India 
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[rgba(255,153,0,0.1)] flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#FF9900]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#FFFFFF] mb-2">Email</h3>
                    <a 
                      href="mailto:example@mlritm.com"
                      className="text-[#FF9900] hover:text-[#FFB333] transition-colors"
                    >
                      example@mlritm.com
                    </a>
                  </div>
                </div>

                
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="backdrop-blur-md bg-[rgba(26,34,48,0.6)] border border-[rgba(86,185,242,0.2)] rounded-lg overflow-hidden h-80 hover:border-[rgba(86,185,242,0.4)] transition-all duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4149.714462169481!2d78.4149708110941!3d17.59895448325526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8ecff7ce096d%3A0xb155107b0b2be21!2sMarri%20Laxman%20Reddy%20Institute%20of%20Technology%20and%20Management!5e1!3m2!1sen!2sin!4v1765537425358!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column - Form with Tabs */}
          <div className="backdrop-blur-md bg-[rgba(26,34,48,0.6)] border border-[rgba(86,185,242,0.2)] rounded-lg p-8 hover:border-[rgba(86,185,242,0.4)] transition-all duration-300">
            <h2 className="text-2xl font-bold text-[#FFFFFF] mb-8">Send us a Message</h2>

            {/* Tab Navigation */}
            <div className="flex gap-2 mb-8 border-b border-[rgba(86,185,242,0.2)]">
              {tabs.map(tab => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 font-medium text-sm transition-all duration-300 border-b-2 flex items-center gap-2 ${
                      activeTab === tab.id
                        ? 'border-aws-orange text-aws-orange'
                        : 'border-transparent text-secondary-text hover:text-primary-text'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Content & Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Tab Description */}
              <div className="text-sm text-[#D0D5DD] mb-6">
                {activeTab === 'core' && 'Join our core team and help lead the AWS Club at MSRIT.'}
                {activeTab === 'collab' && 'Interested in collaborating? Let us know how we can work together!'}
                {activeTab === 'speak' && 'Share your expertise with our community. We\'d love to have you speak at our events.'}
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-[#FFFFFF] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-2 bg-[#1A2230] border border-[#3D4D63] rounded-lg text-[#FFFFFF] placeholder-[#808080] focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900] transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#FFFFFF] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-2 bg-[#1A2230] border border-[#3D4D63] rounded-lg text-[#FFFFFF] placeholder-[#808080] focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900] transition-all duration-300"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#FFFFFF] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="w-full px-4 py-2 bg-[#1A2230] border border-[#3D4D63] rounded-lg text-[#FFFFFF] placeholder-[#808080] focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900] transition-all duration-300"
                />
              </div>

              {/* Query/Message */}
              <div>
                <label htmlFor="query" className="block text-sm font-medium text-[#FFFFFF] mb-2">
                  Your Message
                </label>
                <textarea
                  id="query"
                  name="query"
                  value={formData.query}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your interest..."
                  rows="5"
                  required
                  className="w-full px-4 py-2 bg-[#1A2230] border border-[#3D4D63] rounded-lg text-[#FFFFFF] placeholder-[#808080] focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900] transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-linear-to-r from-[#FF9900] to-[#FFB333] text-white font-semibold rounded-lg hover:from-[#FFB333] hover:to-[#FFCC66] transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </main>

      
    </div>
  );
}
