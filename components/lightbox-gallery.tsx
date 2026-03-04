'use client';

import Image from 'next/image';
import { useState } from 'react';

export function LightboxGallery({ images, title }: { images: string[]; title: string }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setSelected(image)}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src={image}
              alt={`${title} ${index + 1}`}
              fill
              className="object-cover transition hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </button>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setSelected(null)}>
          <div className="relative h-[80vh] w-full max-w-5xl">
            <Image src={selected} alt={title} fill className="object-contain" sizes="100vw" />
          </div>
        </div>
      )}
    </>
  );
}
