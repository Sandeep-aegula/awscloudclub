'use client';

import JoinForm from '@/Components/JoinForm';

export default function JoinUsPage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-br from-[#1A1A1A] via-[#0F0F0F] to-[#0F0F0F]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C96969]/10 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E8E8E8] mb-4">
            Join AWS Club MLRITM
          </h1>
          <p className="text-lg text-[#B0B0B0] max-w-2xl mx-auto mb-8">
            Become part of a vibrant community of cloud enthusiasts, learn from industry experts, and grow your AWS skills.
          </p>
          
          {/* Benefits Overview */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="cloud-card p-4">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-semibold text-[#E8E8E8]">Free AWS Credits</h3>
            </div>
            <div className="cloud-card p-4">
              <div className="text-3xl mb-2">🎓</div>
              <h3 className="font-semibold text-[#E8E8E8]">Workshops</h3>
            </div>
            <div className="cloud-card p-4">
              <div className="text-3xl mb-2">🏆</div>
              <h3 className="font-semibold text-[#E8E8E8]">Certifications</h3>
            </div>
            <div className="cloud-card p-4">
              <div className="text-3xl mb-2">🌐</div>
              <h3 className="font-semibold text-[#E8E8E8]">Networking</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 bg-[#0F0F0F]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#E8E8E8] mb-4 text-center">Ready to Join?</h2>
            <p className="text-center text-[#B0B0B0] mb-8">
              Fill out the form below to join AWS Club MLRITM. We&apos;ll get back to you soon!
            </p>
          </div>

          {/* Form */}
          <div className="bg-[#262626] border border-[#404040] rounded-2xl p-8 shadow-lg">
            <JoinForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-[#1A1A1A] border-t border-[#404040]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#E8E8E8] mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-[#E8E8E8] mb-2">Who can join?</h3>
              <p className="text-[#B0B0B0]">
                Any student from MLRITM can join AWS Club regardless of their year or department. We welcome beginners and experienced learners.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-[#E8E8E8] mb-2">Is there a membership fee?</h3>
              <p className="text-[#B0B0B0]">
                No, AWS Club membership is completely free! All events and resources are available to our members at no cost.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-[#E8E8E8] mb-2">How often do you organize events?</h3>
              <p className="text-[#B0B0B0]">
                We typically organize workshops, webinars, and meetups bi-weekly. Check our Events page for the latest schedule.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-[#E8E8E8] mb-2">Will I get AWS credits?</h3>
              <p className="text-[#B0B0B0]">
                Yes! Members are eligible for free AWS credits and can use them for hands-on projects and learning.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-[#E8E8E8] mb-2">Can I contribute to the club?</h3>
              <p className="text-[#B0B0B0]">
                Absolutely! We encourage members to lead sessions, organize events, or contribute in other ways. Talk to our leadership team.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-[#E8E8E8] mb-2">How can I contact the club?</h3>
              <p className="text-[#B0B0B0]">
                You can reach us through our social media channels or visit during our office hours. Check the footer for contact details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
