'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">AWS Club MLRITM</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Students With Cloud Innovation. Join our community of builders, learners, and future cloud architects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#FF9900] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-[#FF9900] transition-colors">
                  Events & Gallery
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-[#FF9900] transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/joinus" className="text-gray-400 hover:text-[#FF9900] transition-colors">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#FF9900]/20 hover:bg-[#FF9900] rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#FF9900]/20 hover:bg-[#FF9900] rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#FF9900]/20 hover:bg-[#FF9900] rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                📷
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} AWS Club MLRITM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
