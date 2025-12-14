'use client';

import TiltedCard from '@/Components/TiltedCard';
import Link from 'next/link';

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Club President',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
      linkedin: 'https://linkedin.com/in/rajesh-kumar',
      github: 'https://github.com/rajesh-kumar',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Vice President',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
      linkedin: 'https://linkedin.com/in/priya-sharma',
      github: 'https://github.com/priya-sharma',
    },
    {
      id: 3,
      name: 'Aditya Patel',
      role: 'Technical Lead',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya',
      linkedin: 'https://linkedin.com/in/aditya-patel',
      github: 'https://github.com/aditya-patel',
    },
    {
      id: 4,
      name: 'Neha Singh',
      role: 'Events Coordinator',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha',
      linkedin: 'https://linkedin.com/in/neha-singh',
      github: 'https://github.com/neha-singh',
    },
    {
      id: 5,
      name: 'Arjun Reddy',
      role: 'Social Media Manager',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
      linkedin: 'https://linkedin.com/in/arjun-reddy',
      github: 'https://github.com/arjun-reddy',
    },
    {
      id: 6,
      name: 'Ananya Verma',
      role: 'Content Creator',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya',
      linkedin: 'https://linkedin.com/in/ananya-verma',
      github: 'https://github.com/ananya-verma',
    },
    {
      id: 7,
      name: 'Vikas Chopra',
      role: 'AWS Solutions Architect',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikas',
      linkedin: 'https://linkedin.com/in/vikas-chopra',
      github: 'https://github.com/vikas-chopra',
    },
    {
      id: 8,
      name: 'Sophia Desai',
      role: 'Certification Coordinator',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia',
      linkedin: 'https://linkedin.com/in/sophia-desai',
      github: 'https://github.com/sophia-desai',
    },
  ];

  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-br from-[#232F3E] via-[#0F0F0F] to-[#0F0F0F]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF9900]/10 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4">
            Meet Our Team
          </h1>
          <p className="text-lg text-[#D0D5DD] max-w-2xl mx-auto">
            The talented individuals behind AWS Club MLRITM, dedicated to empowering students with cloud innovation.
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16 px-4 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#FFFFFF] mb-2">Leadership Team</h2>
            <p className="text-[#D0D5DD]">Connect with our leaders and explore opportunities to collaborate. Hover over cards to see their profiles (desktop).</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center">
                <TiltedCard
                  imageSrc={member.image}
                  altText={member.name}
                  name={member.name}
                  role={member.role}
                  linkedinUrl={member.linkedin}
                  githubUrl={member.github}
                  containerHeight="400px"
                  containerWidth="300px"
                  rotateAmplitude={14}
                  scaleOnHover={1.05}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section className="py-16 px-4 bg-[#232F3E] border-t border-[#3D4D63]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#FFFFFF] mb-4">Want to Join Our Team?</h2>
          <p className="text-[#D0D5DD] mb-8 text-lg leading-relaxed">
            We're always looking for passionate students who want to contribute to the AWS Club. Whether you're interested in organizing events, creating content, or leading technical sessions, there's a place for you here.
          </p>
          <Link href="/joinus" className="btn-primary">
            Become a Member
          </Link>
        </div>
      </section>
    </main>
  );
}
