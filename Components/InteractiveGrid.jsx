'use client';

import { useEffect, useRef, useState } from 'react';

export default function InteractiveGrid({ 
  color = '#FF9900',
  secondaryColor = '#56B9F2',
  gridSize = 40,
  mouseRadius = 150,
  glowIntensity = 0.8
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let particles = [];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
        setDimensions({ width: canvas.width, height: canvas.height });
        initParticles();
      }
    };

    const initParticles = () => {
      particles = [];
      const cols = Math.ceil(canvas.width / gridSize) + 1;
      const rows = Math.ceil(canvas.height / gridSize) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          particles.push({
            baseX: i * gridSize,
            baseY: j * gridSize,
            x: i * gridSize,
            y: j * gridSize,
            size: 2,
            baseSize: 2,
          });
        }
      }
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 255, g: 153, b: 0 };
    };

    const primaryRgb = hexToRgb(color);
    const secondaryRgb = hexToRgb(secondaryColor);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const time = Date.now() * 0.001;

      // Draw grid lines
      ctx.strokeStyle = `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.05)`;
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw and update particles
      particles.forEach((particle, index) => {
        const dx = mouse.x - particle.baseX;
        const dy = mouse.y - particle.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Mouse interaction
        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius;
          const angle = Math.atan2(dy, dx);
          const pushX = Math.cos(angle) * force * 20;
          const pushY = Math.sin(angle) * force * 20;
          
          particle.x = particle.baseX - pushX;
          particle.y = particle.baseY - pushY;
          particle.size = particle.baseSize + force * 4;
        } else {
          // Smooth return to base position
          particle.x += (particle.baseX - particle.x) * 0.1;
          particle.y += (particle.baseY - particle.y) * 0.1;
          particle.size += (particle.baseSize - particle.size) * 0.1;
        }

        // Calculate color based on distance
        const colorFactor = distance < mouseRadius ? (mouseRadius - distance) / mouseRadius : 0;
        const wave = Math.sin(time * 2 + index * 0.1) * 0.5 + 0.5;
        
        const r = Math.floor(primaryRgb.r + (secondaryRgb.r - primaryRgb.r) * colorFactor);
        const g = Math.floor(primaryRgb.g + (secondaryRgb.g - primaryRgb.g) * colorFactor);
        const b = Math.floor(primaryRgb.b + (secondaryRgb.b - primaryRgb.b) * colorFactor);
        
        const alpha = 0.3 + colorFactor * glowIntensity + wave * 0.1;

        // Draw glow
        if (colorFactor > 0) {
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 4
          );
          gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.5})`);
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fill();

        // Connect nearby particles that are affected by mouse
        if (colorFactor > 0.3) {
          particles.forEach((otherParticle, otherIndex) => {
            if (otherIndex <= index) return;
            
            const otherDx = mouse.x - otherParticle.baseX;
            const otherDy = mouse.y - otherParticle.baseY;
            const otherDistance = Math.sqrt(otherDx * otherDx + otherDy * otherDy);
            
            if (otherDistance < mouseRadius) {
              const lineDx = particle.x - otherParticle.x;
              const lineDy = particle.y - otherParticle.y;
              const lineDistance = Math.sqrt(lineDx * lineDx + lineDy * lineDy);
              
              if (lineDistance < gridSize * 1.5) {
                const lineAlpha = (1 - lineDistance / (gridSize * 1.5)) * colorFactor * 0.5;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${lineAlpha})`;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          });
        }
      });

      // Draw mouse glow
      if (mouse.x > 0 && mouse.y > 0) {
        const mouseGradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, mouseRadius
        );
        mouseGradient.addColorStop(0, `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.1)`);
        mouseGradient.addColorStop(0.5, `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.05)`);
        mouseGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouseRadius, 0, Math.PI * 2);
        ctx.fillStyle = mouseGradient;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, [color, secondaryColor, gridSize, mouseRadius, glowIntensity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ background: 'transparent' }}
    />
  );
}
