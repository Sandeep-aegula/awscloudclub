'use client';

import EventCard from '@/Components/EventCard';
import GalleryGrid from '@/Components/GalleryGrid';

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'AWS Lambda Masterclass',
      date: 'Jan 15, 2025',
      description: 'Deep dive into AWS Lambda functions. Learn about serverless computing, event-driven architectures, and best practices.',
      tag: 'Workshop',
    },
    {
      id: 2,
      title: 'Cloud Architecture Design Session',
      date: 'Jan 22, 2025',
      description: 'Learn how to design scalable and cost-effective cloud architectures on AWS. Real-world case studies included.',
      tag: 'Webinar',
    },
    {
      id: 3,
      title: 'AWS Certification Prep Session',
      date: 'Jan 29, 2025',
      description: 'Prepare for the AWS Solutions Architect Associate exam. Mock tests, study materials, and expert guidance.',
      tag: 'Exam Prep',
    },
    {
      id: 4,
      title: 'Networking Meetup with Industry Experts',
      date: 'Feb 5, 2025',
      description: 'Meet AWS professionals and alumni. Discuss career paths, industry insights, and cloud trends.',
      tag: 'Meetup',
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: 'Introduction to AWS',
      date: 'Dec 20, 2024',
      description: 'A beginner-friendly introduction to Amazon Web Services and cloud fundamentals.',
      tag: 'Workshop',
    },
    {
      id: 2,
      title: 'EC2 and VPC Fundamentals',
      date: 'Dec 13, 2024',
      description: 'Learn about EC2 instances, VPC networking, and security best practices.',
      tag: 'Workshop',
    },
    {
      id: 3,
      title: 'Building Serverless Applications',
      date: 'Dec 6, 2024',
      description: 'Hands-on session on building serverless applications with Lambda, API Gateway, and DynamoDB.',
      tag: 'Workshop',
    },
  ];

  const galleryImages = [
    { emoji: '🎓', title: 'Workshop Session', description: 'Students engaging in hands-on AWS workshop' },
    { emoji: '🤝', title: 'Networking Event', description: 'Members networking with industry professionals' },
    { emoji: '💻', title: 'Coding Session', description: 'Collaborative coding session on AWS services' },
    { emoji: '🏆', title: 'Achievement', description: 'Team celebrating AWS certification milestone' },
    { emoji: '📊', title: 'Presentation', description: 'Student presenting cloud architecture design' },
    { emoji: '🚀', title: 'Project Launch', description: 'Launching a cloud-based project' },
    { emoji: '👥', title: 'Team Photo', description: 'AWS Club MLRITM team gathering' },
    { emoji: '🎯', title: 'Goal Achievement', description: 'Celebrating monthly goals and milestones' },
  ];

  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-br from-[#1A1A1A] via-[#0F0F0F] to-[#0F0F0F]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C96969]/10 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E8E8E8] mb-4">
            Events & Gallery
          </h1>
          <p className="text-lg text-[#B0B0B0] max-w-2xl mx-auto">
            Explore our upcoming events, past celebrations, and moments that inspire our community.
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 px-4 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#E8E8E8] mb-2">📅 Upcoming Events</h2>
            <p className="text-[#B0B0B0]">Don&apos;t miss out on these exciting sessions and learning opportunities.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                description={event.description}
                tag={event.tag}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 px-4 bg-[#1A1A1A] border-t border-[#404040]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#E8E8E8] mb-2">🎉 Past Events</h2>
            <p className="text-[#B0B0B0]">Relive the moments and impact we&apos;ve created together.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                description={event.description}
                tag={event.tag}
                cta="View Details"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#E8E8E8] mb-2">📸 Gallery</h2>
            <p className="text-[#B0B0B0]">Moments from our community, capturing growth, learning, and friendship.</p>
          </div>
          
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </main>
  );
}