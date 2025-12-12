"use client"
import Galaxy from '@/Components/Galaxy';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-[#0F0F0F]">
      <div style={{ width: '100%', height: '600px', position: 'relative', zIndex: 0 }}>
        <Galaxy   mouseRepulsion={true}

    mouseInteraction={true}

    density={1.5}

    glowIntensity={0.5}

    saturation={0.0}

    hueShift={0}>
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F]">
        {/* Background Blob Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#C96969]/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-[#C96969] uppercase bg-[#C96969]/20 rounded-full">
            Est. 2024
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-[#E8E8E8] mb-6 leading-tight">
            AWS Club <span className="text-[#C96969]">MLRITM</span>
          </h1>

          <p className="text-xl text-[#B0B0B0] mb-10 max-w-2xl mx-auto leading-relaxed">
            Empowering Students With Cloud Innovation. <br className="hidden md:block" />
            Join a community of builders, learners, and future cloud architects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/joinus" className="btn-primary w-full sm:w-auto">
              Join Now
            </Link>
            <Link href="/events" className="btn-outline w-full sm:w-auto">
              Upcoming Events →
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section className="py-20 px-4 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#E8E8E8]">What We Do</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="cloud-card p-8 text-center group">
              <div className="w-16 h-16 bg-[#C96969]/10 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                ☁️
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#E8E8E8]">Cloud Workshops</h3>
              <p className="text-[#B0B0B0]">Hands-on sessions with AWS services like EC2, S3, and Lambda.</p>
            </div>

            {/* Feature 2 */}
            <div className="cloud-card p-8 text-center group">
              <div className="w-16 h-16 bg-[#C96969]/10 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                🏆
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#E8E8E8]">Certification Support</h3>
              <p className="text-[#B0B0B0]">Guidance and resources for AWS Solutions Architect & Practitioner exams.</p>
            </div>

            {/* Feature 3 */}
            <div className="cloud-card p-8 text-center group">
              <div className="w-16 h-16 bg-[#C96969]/10 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                🤝
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
              { label: 'Free AWS Credits', icon: '💰' },
              { label: 'Networking', icon: '🌐' },
              { label: 'Skill Badges', icon: '🎖️' },
              { label: 'Leadership Roles', icon: '🚀' }
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#262626] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-[#404040]">
                <div className="h-10 w-10 rounded-full bg-[#C96969]/20 flex items-center justify-center text-lg">
                  {benefit.icon}
                </div>
                <span className="font-medium text-[#E8E8E8] text-lg">{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
</Galaxy >
</div>
    </main>
  );
}