'use client';

import { useRef, useState } from 'react';
import { motion, useSpring } from 'motion/react';

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

export default function TiltedCard({
  imageSrc,
  altText = 'Profile',
  name = '',
  role = '',
  linkedinUrl = '',
  githubUrl = '',
  containerHeight = '400px',
  containerWidth = '300px',
  rotateAmplitude = 14,
  scaleOnHover = 1.05
}) {
  const ref = useRef(null);
  const rotateX = useSpring(0, springValues);
  const rotateY = useSpring(0, springValues);
  const scale = useSpring(1, springValues);

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className="relative [perspective:800px]"
      style={{
        height: containerHeight,
        width: containerWidth,
        rotateX,
        rotateY,
        scale
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Full Card Container with 3D effect */}
      <div className="relative w-full h-full bg-gradient-to-br from-[#1A2230] to-[#232F3E] rounded-2xl p-8 border border-[#3D4D63] shadow-2xl overflow-hidden [transform-style:preserve-3d] hover:border-[#FF9900]/50 transition-colors duration-300 flex flex-col items-center justify-center gap-6">
        
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF9900]/5 to-[#56B9F2]/5 opacity-0 transition-opacity duration-300"></div>

        {/* Profile Image - Fully Rounded Circle */}
        <div className="relative z-10 flex justify-center">
          <motion.img
            src={imageSrc}
            alt={altText}
            className="w-40 h-40 rounded-full object-cover border-4 border-[#FF9900] shadow-2xl"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
        </div>

        {/* Profile Info */}
        <div className="relative z-10 text-center">
          <h3 className="text-2xl font-bold text-[#FFFFFF] mb-2">{name}</h3>
          <p className="text-sm text-[#FF9900] font-semibold">{role}</p>
        </div>

        {/* Social Links - Icons at bottom */}
        <div className="relative z-10 flex justify-center gap-4 pt-4 border-t border-[#3D4D63] w-full">
          {linkedinUrl && (
            <motion.a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0A66C2]/20 hover:bg-[#0A66C2] text-[#56B9F2] hover:text-white transition-all duration-300"
              title="LinkedIn"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </motion.a>
          )}
          
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#333]/20 hover:bg-[#333] text-[#D0D5DD] hover:text-white transition-all duration-300"
              title="GitHub"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
