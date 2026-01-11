'use client';

import { useRef, useState } from 'react';
import { motion, useSpring } from 'motion/react';
import { Linkedin, Github, ExternalLink } from 'lucide-react';

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
  containerHeight = '380px',
  containerWidth = '280px',
  rotateAmplitude = 12,
  scaleOnHover = 1.02
}) {
  const ref = useRef(null);
  const rotateX = useSpring(0, springValues);
  const rotateY = useSpring(0, springValues);
  const scale = useSpring(1, springValues);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    setIsHovered(true);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  }

  return (
    <motion.div
      ref={ref}
      className="relative [perspective:1000px] cursor-pointer"
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
      {/* Card Container */}
      <div className="relative w-full h-full [transform-style:preserve-3d] group">
        
        {/* Glowing Border Effect */}
        <div className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-[#FF9900] via-[#FF9900]/50 to-[#FF9900]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
        
        {/* Main Card */}
        <div className="relative w-full h-full bg-gradient-to-b from-[#1A2230] to-[#0D1117] rounded-3xl overflow-hidden border border-white/10 group-hover:border-[#FF9900]/50 transition-all duration-500">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #FF9900 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }} />
          </div>

          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF9900] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Profile Image Section */}
          <div className="relative pt-8 pb-4 flex justify-center">
            {/* Glow behind image */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#FF9900]/30 rounded-full blur-2xl transition-all duration-500 ${isHovered ? 'scale-150 opacity-60' : 'scale-100 opacity-0'}`} />
            
            {/* Image Container with Ring */}
            <div className="relative">
              {/* Rotating Ring */}
              <div className={`absolute -inset-2 rounded-full border-2 border-dashed border-[#FF9900]/40 transition-all duration-700 ${isHovered ? 'rotate-180 border-[#FF9900]/80' : 'rotate-0'}`} />
              
              {/* Solid Ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#FF9900] to-[#CC7A00] p-[2px]">
                <div className="w-full h-full rounded-full bg-[#1A2230]" />
              </div>
              
              {/* Profile Image */}
              <motion.img
                src={imageSrc}
                alt={altText}
                className="relative w-28 h-28 rounded-full object-cover shadow-2xl shadow-black/50"
                animate={{ 
                  y: isHovered ? -5 : 0,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
              
              {/* Status Indicator */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#22C55E] rounded-full border-4 border-[#1A2230] shadow-lg" />
            </div>
          </div>

          {/* Info Section */}
          <div className="relative px-6 py-4 text-center">
            <motion.h3 
              className="text-xl font-bold text-white mb-1 tracking-tight"
              animate={{ y: isHovered ? -2 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {name}
            </motion.h3>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/20">
              <span className="w-2 h-2 rounded-full bg-[#FF9900] animate-pulse" />
              <span className="text-sm font-medium text-[#FF9900]">{role}</span>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex justify-center gap-3">
              {linkedinUrl && (
                <motion.a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-[#0A66C2] hover:bg-[#0A66C2]/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-[#94A3B8] group-hover/btn:text-[#0A66C2] transition-colors" />
                </motion.a>
              )}
              
              {githubUrl && (
                <motion.a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-white/50 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  title="GitHub"
                >
                  <Github className="w-5 h-5 text-[#94A3B8] group-hover/btn:text-white transition-colors" />
                </motion.a>
              )}
              
              <motion.button
                className="group/btn relative flex items-center justify-center w-11 h-11 rounded-xl bg-[#FF9900]/10 border border-[#FF9900]/20 hover:border-[#FF9900] hover:bg-[#FF9900] transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                title="View Profile"
              >
                <ExternalLink className="w-5 h-5 text-[#FF9900] group-hover/btn:text-black transition-colors" />
              </motion.button>
            </div>
          </div>

          {/* Shine Effect */}
          <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out`} />
        </div>
      </div>
    </motion.div>
  );
}
