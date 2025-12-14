'use client';

import EventCard from '@/Components/EventCard';
import ChromaGrid from '@/Components/ChromaGrid';
import Antigravity from '@/Components/AntiGravity';

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

  const chromaGridItems = [
    {
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop",
      title: "AWS Lambda Workshop",
      subtitle: "Hands-on Serverless Masterclass",
      date: "Jan 15, 2026",
      location: "Tech Hub, Room 101",
      handle: "@CloudClubLambda",
      borderColor: "#FF9900",
      gradient: "linear-gradient(145deg, #FF9900, #000)",
      url: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
      title: "GenAI with Bedrock",
      subtitle: "Building RAG Applications",
      date: "Feb 10, 2026",
      location: "Online / Zoom",
      handle: "@GenAIBedrock",
      borderColor: "#8C52FF",
      gradient: "linear-gradient(145deg, #8C52FF, #000)",
      url: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop",
      title: "Cloud Career Day",
      subtitle: "Networking with Industry Experts",
      date: "Mar 05, 2026",
      location: "Main Auditorium",
      handle: "@CloudCareers",
      borderColor: "#22C55E",
      gradient: "linear-gradient(145deg, #22C55E, #000)",
      url: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-[#0F0F0F]">


      <div style={{ width: '100%', height: '400px', position: 'relative' }} className='absolute inset-0 z-0'>
        <Antigravity
          count={300}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color={'#FF9FFC'}
          autoAnimate={true}
          particleVariance={1}
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-br from-[#232F3E] via-[#0F0F0F] to-[#0F0F0F]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF9900]/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4">
            Events & Gallery
          </h1>
          <p className="text-lg text-[#D0D5DD] max-w-2xl mx-auto">
            Explore our upcoming events, past celebrations, and moments that inspire our community.
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 px-4 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-2">📅 Upcoming Events</h2>
            <p className="text-[#D0D5DD]">Don&apos;t miss out on these exciting sessions and learning opportunities.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                description={event.description}
                tag={event.tag}
                cta="Register"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 px-4 bg-[#1A2230] border-t border-[#3D4D63]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-2">🎉 Past Events</h2>
            <p className="text-[#D0D5DD]">Relive the moments and impact we&apos;ve created together.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-2">📸 Gallery</h2>
            <p className="text-[#D0D5DD]">Moments from our community, capturing growth, learning, and friendship.</p>
          </div>

          {/* <GalleryGrid images={galleryImages} /> */}


          <div style={{ height: '600px', position: 'relative' }}>
            <ChromaGrid
              items={chromaGridItems}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
      </section>
    </main>
  );
}