'use client';

import * as React from 'react';
import Image, { type StaticImageData } from 'next/image';

import product1 from '@/assets/logos-cursos/curso-colombia-1.1.webp';
import product2 from '@/assets/logos-cursos/curso-colombia-1.2.webp';
import product3 from '@/assets/logos-cursos/curso-colombia-1.3.webp';
import product4 from '@/assets/logos-cursos/curso-colombia-1.4.png';
import product5 from '@/assets/logos-cursos/curso-colombia-1.5.png';
import product6 from '@/assets/logos-cursos/curso-colombia-1.6.png';

const products: StaticImageData[] = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
];

export default function ProductsMarquee() {
  const items = React.useMemo(() => [...products, ...products, ...products], []);
  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex animate-marquee-products gap-8 will-change-transform items-center" aria-hidden>
        {items.map((img, idx) => (
          <div 
            key={idx} 
            className="flex h-32 min-w-[240px] items-center justify-center rounded-lg bg-white px-6 py-4 border border-primary/10 shadow-sm hover:shadow-md transition-shadow"
          >
            <Image
              src={img}
              alt="Product"
              width={240}
              height={128}
              sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 240px"
              style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              className="drop-shadow-sm"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee-products {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee-products {
          width: max(300%, 2000px);
          animation: marquee-products 40s linear infinite;
          display: flex;
        }
        .animate-marquee-products:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

