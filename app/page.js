"use client"
import { useEffect } from 'react';
import Link from 'next/link';
import { Cloud, Award, Users, DollarSign, Globe, Medal, Rocket } from 'lucide-react';
import LightRays from '@/Components/LightRays';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.customElements.get('model-viewer')) {
      import('@google/model-viewer')
        .catch(err => console.error("Failed to load model-viewer:", err));
    }
  }, []);
  // ---------------------------------------------------------------------------

  return (
    <main className="bg-primary-bg relative">

      <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0, zIndex: 10, pointerEvents: 'none' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ff7300ff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* 1. HERO SECTION (Modified to include the 3D model) */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-secondary-bg to-primary-bg">

        {/* Background Blob Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-aws-orange/10 rounded-full blur-3xl z-10" />

        <div className="max-w-7xl mx-auto px-4 relative z-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-primary-text mb-6 leading-tight">
                AWS Cloud Club <span className="text-aws-orange">MLRITM</span>
              </h1>

              <p className="text-xl text-secondary-text mb-10 leading-relaxed">
                Empowering Students With Cloud Innovation. <br className="hidden md:block" />
                Join a community of builders, learners, and future cloud architects.
              </p>
              <div className='flex justify-center lg:justify-start items-center gap-4 p-10 text-xl '>
                <p className='bg-secondary-bg rounded-full p-3'> An official Amazon Web Services (AWS) initiative</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Link href="/joinus" className="btn-primary w-full sm:w-auto">
                  Join Now
                </Link>
                <Link href="/events" className="btn-outline w-full sm:w-auto">
                  Upcoming Events →
                </Link>
              </div>
            </div>

            {/* Right 3D Model */}
            <div className="flex-1 w-full h-[400px] lg:h-[500px] relative">
              <model-viewer
                src="/assessts/models/aws_logo.glb"
                alt="AWS Club 3D Cloud Model"
                auto-rotate
                camera-controls
                rotation-per-second="50%"
                shadow-intensity="1"
                exposure="1.5"

                field-of-view="30deg"
                disable-zoom
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '12px',
                }}
              >
              </model-viewer>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section className="py-20 px-4 bg-[#0F0F0F] z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#E8E8E8]">What We Do</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="cloud-card p-8 text-center group">
              <div className="w-16 h-16 bg-[#C96969]/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Cloud className="w-8 h-8 text-aws-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#E8E8E8]">Cloud Workshops</h3>
              <p className="text-[#B0B0B0]">Hands-on sessions with AWS services like EC2, S3, and Lambda.</p>
            </div>

            {/* Feature 2 */}
            <div className="cloud-card p-8 text-center group">
              <div className="w-16 h-16 bg-[#C96969]/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-aws-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#E8E8E8]">Certification Support</h3>
              <p className="text-[#B0B0B0]">Guidance and resources for AWS Solutions Architect & Practitioner exams.</p>
            </div>

            {/* Feature 3 */}
            <div className="cloud-card p-8 text-center group">
              <div className="w-16 h-16 bg-[#C96969]/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-aws-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#E8E8E8]">Technical Meetups</h3>
              <p className="text-[#B0B0B0]">Network with industry experts, alumni, and fellow cloud enthusiasts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US SECTION */}
      <section className="py-20 bg-[#1A1A1A] border-t border-[#404040]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#E8E8E8]">About Us</h2>
          <p className="text-lg text-[#B0B0B0] leading-loose">
            The AWS Club at <span className="font-semibold text-[#C96969]">MLRITM</span> is dedicated to bridging the gap between academic learning and industry cloud requirements. We provide a platform for students to experiment, build, and certify their cloud skills through peer learning and expert mentorship.
          </p>
        </div>
      </section>

      {/* 4. WHY JOIN SECTION */}
      <section className="py-20 px-4 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#E8E8E8]">Why Join Us?</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Free AWS Credits', icon: DollarSign },
              { label: 'Networking', icon: Globe },
              { label: 'Skill Badges', icon: Medal },
              { label: 'Leadership Roles', icon: Rocket }
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-4 bg-secondary-bg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-accent-dark-blue/20">
                <div className="h-10 w-10 rounded-full bg-[#C96969]/20 flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 text-aws-orange" />
                </div>
                <span className="font-medium text-[#E8E8E8] text-lg">{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}