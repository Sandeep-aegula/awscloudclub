'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#E8E8E8] border-t border-[#404040]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#E8E8E8]">AWS Club MLRITM</h3>
            <p className="text-[#B0B0B0] text-sm leading-relaxed">
              Empowering Students With Cloud Innovation. Join our community of builders, learners, and future cloud architects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#E8E8E8]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-[#B0B0B0] hover:text-[#C96969] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-[#B0B0B0] hover:text-[#C96969] transition-colors">
                  Events & Gallery
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-[#B0B0B0] hover:text-[#C96969] transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/joinus" className="text-[#B0B0B0] hover:text-[#C96969] transition-colors">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#E8E8E8]">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#C96969]/20 hover:bg-[#C96969] rounded-full flex items-center justify-center text-[#E8E8E8] transition-colors"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#C96969]/20 hover:bg-[#C96969] rounded-full flex items-center justify-center text-[#E8E8E8] transition-colors"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#C96969]/20 hover:bg-[#C96969] rounded-full flex items-center justify-center text-[#E8E8E8] transition-colors"
                aria-label="Instagram"
              >
                📷
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#404040] pt-8">
          <p className="text-center text-sm text-[#808080]">
            Copyright © {new Date().getFullYear()} AWS Club MLRITM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
