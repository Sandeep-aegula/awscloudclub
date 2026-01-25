'use client';

import EventCard from '@/Components/EventCard';
import GalleryGrid from '@/Components/GalleryGrid';
import Particles from '@/Components/Particles';
import { Calendar, Sparkles, Image as ImageIcon } from 'lucide-react';

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
    { 
      title: 'AWS Lambda Workshop', 
      description: 'Students engaging in hands-on serverless computing workshop',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop',
      tag: 'Workshop'
    },
    { 
      title: 'Cloud Architecture Session', 
      description: 'Members designing scalable cloud architectures',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
      tag: 'Session'
    },
    { 
      title: 'Networking Event', 
      description: 'Team members networking with industry professionals',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop',
      tag: 'Meetup'
    },
    { 
      title: 'Hackathon 2024', 
      description: 'Collaborative coding during our annual hackathon',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
      tag: 'Hackathon'
    },
    { 
      title: 'Certification Celebration', 
      description: 'Team celebrating AWS certification achievements',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop',
      tag: 'Achievement'
    },
    { 
      title: 'Tech Talk', 
      description: 'Guest speaker presenting on cloud innovations',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop',
      tag: 'Talk'
    },
    { 
      title: 'Team Building', 
      description: 'AWS Club MLRITM team outdoor activities',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
      tag: 'Team'
    },
    { 
      title: 'Project Demo Day', 
      description: 'Students showcasing their cloud projects',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
      tag: 'Demo'
    },
  ];

  return (
    <main className="min-h-screen bg-primary-bg relative">

      {/* Particles Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden py-16 lg:py-24 bg-linear-to-br from-secondary-bg/95 via-primary-bg/90 to-primary-bg/95">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-aws-orange/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-text mb-4">
            Events & Gallery
          </h1>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto">
            Explore our upcoming events, past celebrations, and moments that inspire our community.
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="relative z-10 py-16 px-4 bg-primary-bg/95">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-8 h-8 text-aws-orange" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary-text">Upcoming Events</h2>
            </div>
            <p className="text-secondary-text">Don&apos;t miss out on these exciting sessions and learning opportunities.</p>
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
      <section className="relative z-10 py-16 px-4 bg-secondary-bg/95 border-t border-accent-dark-blue/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-8 h-8 text-aws-orange" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary-text">Past Events</h2>
            </div>
            <p className="text-secondary-text">Relive the moments and impact we&apos;ve created together.</p>
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
      <section className="relative z-10 py-16 px-4 bg-primary-bg/95">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <ImageIcon className="w-8 h-8 text-aws-orange" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary-text">Gallery</h2>
            </div>
            <p className="text-secondary-text">Moments from our community, capturing growth, learning, and friendship.</p>
          </div>

          {/* <GalleryGrid images={galleryImages} /> */}

          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </main>
  );
}