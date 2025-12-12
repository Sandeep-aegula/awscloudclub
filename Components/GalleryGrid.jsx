'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function GalleryGrid({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square bg-[#262626] rounded-2xl overflow-hidden group cursor-pointer border border-[#404040]"
            onClick={() => setSelectedImage(image)}
          >
            <div className="w-full h-full bg-gradient-to-br from-[#C96969]/20 to-[#A14F4F]/20 flex items-center justify-center text-4xl hover:scale-110 transition-transform duration-300">
              {image.emoji}
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                🔍
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-2xl w-full bg-[#262626] rounded-2xl p-4 border border-[#404040]" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-[#C96969] text-white rounded-full flex items-center justify-center hover:bg-[#E79C9C] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <div className="aspect-square bg-gradient-to-br from-[#C96969]/10 to-[#A14F4F]/10 rounded-xl flex items-center justify-center text-6xl">
              {selectedImage.emoji}
            </div>
            <h3 className="mt-4 text-lg font-bold text-[#E8E8E8]">{selectedImage.title}</h3>
            <p className="text-[#B0B0B0] text-sm mt-2">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
