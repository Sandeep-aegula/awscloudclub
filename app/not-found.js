'use client';

import Link from 'next/link';
import FuzzyText from '@/Components/FuzzyText';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#0F0F0F] flex flex-col items-center justify-center gap-6">
            <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover={true}
            >
                404
            </FuzzyText>
            <p className="text-[#D0D5DD] text-lg">Page not found</p>
            <Link href="/" className="px-6 py-3 bg-[#FF9900] text-black font-bold rounded-lg hover:bg-[#FFB84D] transition-colors">
                Go Home
            </Link>
        </div>
    );
}