'use client';

import Link from 'next/link';
import FuzzyText from '@/Components/FuzzyText';
export default function NotFound() {
    return (
        <div >
            <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={hoverIntensity}
                enableHover={enableHover}
            >
                404
            </FuzzyText>
        </div>
    );
}