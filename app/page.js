"use client"
import { useEffect } from 'react';
import Link from 'next/link';
import { Cloud, Award, Users, DollarSign, Globe, Medal, Rocket, Info, ExternalLink } from 'lucide-react';
import LightRays from '@/Components/LightRays';
import { motion } from 'motion/react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-aws-orange/10 rounded-full blur-3xl z-10"
        />

        <div className="max-w-7xl mx-auto px-4 relative z-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-primary-text mb-6 leading-tight">
                AWS Cloud Club <span className="text-aws-orange">MLRITM</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl text-secondary-text mb-10 leading-relaxed">
                Empowering Students With Cloud Innovation. <br className="hidden md:block" />
                Join a community of builders, learners, and future cloud architects.
              </motion.p>
              <motion.div variants={fadeInUp} className='flex justify-center lg:justify-start items-center gap-4 p-10 text-xl '>
                <p className='bg-secondary-bg rounded-full p-3'> An official Amazon Web Services (AWS) initiative</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Link href="/joinus" className="btn-primary w-full sm:w-auto">
                  Join Now
                </Link>
                <Link href="/events" className="btn-outline w-full sm:w-auto">
                  Upcoming Events →
                </Link>
              </motion.div>
            </motion.div>

            {/* Right 3D Model */}
            <motion.div
              className="flex-1 w-full h-[400px] lg:h-[500px] relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <model-viewer
                src="/assets/models/aws_logo.glb"
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section className="py-20 px-4 bg-[#0F0F0F] z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-[#E8E8E8]">What We Do</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Feature 1 */}
            <motion.div variants={fadeInUp} className="cloud-card p-8 text-center group">
              <div className="w-16 h-16 bg-[#C96969]/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Cloud className="w-8 h-8 text-aws-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#E8E8E8]">Cloud Workshops</h3>
              <p className="text-[#B0B0B0]">Hands-on sessions with AWS services like EC2, S3, and Lambda.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeInUp} className="cloud-card p-8 text-center group">
              <div className="w-16 h-16 bg-[#C96969]/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-aws-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#E8E8E8]">Certification Support</h3>
              <p className="text-[#B0B0B0]">Guidance and resources for AWS Solutions Architect & Practitioner exams.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeInUp} className="cloud-card p-8 text-center group">
              <div className="w-16 h-16 bg-[#C96969]/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-aws-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#E8E8E8]">Technical Meetups</h3>
              <p className="text-[#B0B0B0]">Network with industry experts, alumni, and fellow cloud enthusiasts.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. ABOUT US SECTION */}
      <section className="py-20 bg-[#1A2230] border-t border-white/5">
        <motion.div
          className="max-w-7xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <section className="py-6 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-10 text-center text-primary-text">
                About <span className="text-aws-orange">AWS Cloud Club</span>
              </h2>

              <div className="glass-effect rounded-xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">

                  {/* Left Column: What is AWS? */}
                  <div className="lg:w-1/2 p-6 relative border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col">
                    <div className="absolute top-4 right-4 lg:right-auto lg:left-4 bg-aws-orange/20 rounded-full p-2">
                      <Info size={18} className="text-aws-orange" />
                    </div>

                    <h3 className="text-xl font-medium mb-3 text-white pl-0 lg:pl-12">
                      What is AWS?
                    </h3>

                    <div className="space-y-2 mb-4">
                      <p className="text-base text-white/80">
                        Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform,
                        offering over 200 fully featured services from data centers globally.
                      </p>
                      <p className="text-base text-white/80">
                        If AWS were to experience a major outage, nearly 32% of the global internet as we know it could be affected. This would disrupt access to some of the world’s most influential platforms, including Netflix, Uber, Reddit, Amazon, Airbnb, Pinterest, Epic Games, NASA, Starbucks, Notion, Zomato, Anthropic, Canva, Vercel, Boston Dynamics, and countless others—highlighting just how deeply cloud infrastructure powers the digital world
                      </p>
                    </div>

                    <div className="flex-grow flex items-center">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://aws.amazon.com/what-is-aws/"
                      >
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring shadow-lg h-9 px-6 py-2 bg-[#232F3E] text-aws-orange border border-aws-orange hover:bg-aws-orange hover:text-white font-medium text-sm">
                          Learn more about AWS
                          <ExternalLink size={14} className="ml-1" />
                        </button>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Why AWS Cloud Club? */}
                  <div className="lg:w-1/2 p-6 relative">
                    <div className="absolute top-4 right-4 bg-[#56B9F2]/20 rounded-full p-2">
                      <Cloud size={18} className="text-[#56B9F2]" />
                    </div>

                    <h3 className="text-xl font-medium mb-3 text-white pl-0 lg:pl-8">
                      Why AWS Cloud Club?
                    </h3>

                    <div className="space-y-2">
                      <p className="text-base text-white/80">
                        While there are already many clubs on-campus focusing on Development, Data Structures & Algorithms,
                        Open Source, Cybersecurity, Robotics and more, there has historically been no club that focused
                        specifically on cloud-based education and practical upskilling.
                      </p>
                      <p className="text-base text-white/80">
                        AWS Cloud Club RIT is here to change that by providing hands-on learning experiences,
                        certification preparation, and networking opportunities with industry professionals.
                      </p>
                      <p className="text-base text-white/80 font-medium italic">
                        As the first AWS Cloud Club in Karnataka, we're proud to bring this cutting-edge technology
                        focus to our campus.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </section>

      {/* 4. WHY JOIN SECTION */}
      <section className="py-20 px-4 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-12 text-[#E8E8E8]">Why Join Us?</h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { label: 'Free AWS Credits', icon: DollarSign },
              { label: 'Networking', icon: Globe },
              { label: 'Skill Badges', icon: Medal },
              { label: 'Leadership Roles', icon: Rocket }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex items-center gap-4 bg-secondary-bg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-accent-dark-blue/20"
              >
                <div className="h-10 w-10 rounded-full bg-[#C96969]/20 flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 text-aws-orange" />
                </div>
                <span className="font-medium text-[#E8E8E8] text-lg">{benefit.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}