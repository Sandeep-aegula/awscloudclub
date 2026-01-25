'use client';

import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryGrid({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, images.length]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex]);

  const goToPrevious = useCallback((e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback((e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Masonry-style grid with varied heights
  const getGridSpan = (index) => {
    const patterns = [
      'row-span-1',
      'row-span-2',
      'row-span-1',
      'row-span-1',
      'row-span-2',
      'row-span-1',
    ];
    return patterns[index % patterns.length];
  };

  return (
    <>
      {/* Responsive Masonry Gallery Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="break-inside-avoid group relative overflow-hidden rounded-xl bg-secondary-bg border border-accent-dark-blue/30 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-aws-orange/10 hover:border-aws-orange/50"
            onClick={() => setSelectedIndex(index)}
          >
            {/* Image Container */}
            <div className={`relative w-full ${index % 3 === 1 ? 'aspect-4/5' : index % 3 === 2 ? 'aspect-4/3' : 'aspect-square'}`}>
              {image.image ? (
                <Image
                  src={image.image}
                  alt={image.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-linear-to-br from-aws-orange/20 via-secondary-bg to-accent-dark-blue/20 flex items-center justify-center">
                  <span className="text-5xl">{image.emoji || '📷'}</span>
                </div>
              )}
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                  {image.description && (
                    <p className="text-white/80 text-sm line-clamp-2">{image.description}</p>
                  )}
                </div>
                
                {/* Zoom Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-aws-orange/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Tag Badge */}
            {image.tag && (
              <div className="absolute top-3 left-3 px-3 py-1 bg-aws-orange/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                {image.tag}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-aws-orange text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-aws-orange text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-aws-orange text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full">
            {selectedIndex + 1} / {images.length}
          </div>

          {/* Modal Content */}
          <div 
            className="relative w-full max-w-5xl mx-4 md:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative w-full aspect-video md:aspect-16/10 bg-secondary-bg rounded-xl overflow-hidden">
              {selectedImage.image ? (
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-contain"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-linear-to-br from-aws-orange/20 via-secondary-bg to-accent-dark-blue/20 flex items-center justify-center">
                  <span className="text-8xl">{selectedImage.emoji || '📷'}</span>
                </div>
              )}
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {selectedImage.title}
              </h3>
              {selectedImage.description && (
                <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto">
                  {selectedImage.description}
                </p>
              )}
              {selectedImage.date && (
                <p className="text-aws-orange text-sm mt-2">{selectedImage.date}</p>
              )}
            </div>

            {/* Thumbnail Strip */}
            <div className="hidden md:flex justify-center mt-6 gap-2 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(idx);
                  }}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden shrink-0 transition-all duration-300 ${
                    idx === selectedIndex 
                      ? 'ring-2 ring-aws-orange scale-110' 
                      : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  {img.image ? (
                    <Image
                      src={img.image}
                      alt={img.title}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-secondary-bg flex items-center justify-center text-xl">
                      {img.emoji || '📷'}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
