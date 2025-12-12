'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assessts/icon144.svg'; import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/events', label: 'Events' },
        { href: '/team', label: 'Team' },
        { href: '/joinus', label: 'Join Us' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-grey-200 shadow-sm border-b ">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-linear-to-br from-[#C96969] to-[#A14F4F] rounded-lg flex items-center justify-center text-white font-bold text-lg">
                            <Image
                                src="/icon144.svg"
                                alt="My Icon"
                                width={144}
                                height={144}
                            />
                        </div>
                        <span className="font-bold text-xl hidden sm:inline text-[#2E2E2E]">
                            AWS Club <span className="text-[#C96969]">MLRITM</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="font-medium text-[#444444] hover:text-[#C96969] transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="font-medium text-[#444444] hover:text-[#C96969] transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
