'use client';

import TeamCard from '@/Components/TeamCard';

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Club President',
      photo: '👨‍💼',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Vice President',
      photo: '👩‍💼',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 3,
      name: 'Aditya Patel',
      role: 'Technical Lead',
      photo: '👨‍💻',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 4,
      name: 'Neha Singh',
      role: 'Events Coordinator',
      photo: '👩‍🎓',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 5,
      name: 'Arjun Reddy',
      role: 'Social Media Manager',
      photo: '📱',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 6,
      name: 'Ananya Verma',
      role: 'Content Creator',
      photo: '✍️',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 7,
      name: 'Vikas Chopra',
      role: 'AWS Solutions Architect',
      photo: '🏗️',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 8,
      name: 'Sophia Desai',
      role: 'Certification Coordinator',
      photo: '🎖️',
      linkedin: 'https://linkedin.com',
    },
  ];

  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-br from-[#1A1A1A] via-[#0F0F0F] to-[#0F0F0F]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C96969]/10 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E8E8E8] mb-4">
            Meet Our Team
          </h1>
          <p className="text-lg text-[#B0B0B0] max-w-2xl mx-auto">
            The talented individuals behind AWS Club MLRITM, dedicated to empowering students with cloud innovation.
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16 px-4 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#E8E8E8] mb-2">Leadership Team</h2>
            <p className="text-[#B0B0B0]">Connect with our leaders and explore opportunities to collaborate.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                photo={member.photo}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section className="py-16 px-4 bg-[#1A1A1A] border-t border-[#404040]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#E8E8E8] mb-4">Want to Join Our Team?</h2>
          <p className="text-[#B0B0B0] mb-8 text-lg leading-relaxed">
            We&apos;re always looking for passionate students who want to contribute to the AWS Club. Whether you&apos;re interested in organizing events, creating content, or leading technical sessions, there's a place for you here.
          </p>
          <a href="/joinus" className="btn-primary">
            Become a Member
          </a>
        </div>
      </section>
    </main>
  );
}