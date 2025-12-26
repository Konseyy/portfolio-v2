'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useRef, useState } from 'react';

import animatedBoxStyles from '@/app/css/animated-box.module.css';
import coverPhoto from '@/public/me.jpg';

function AnimatedImage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const setAnimationSpeed = (rate: number) => {
    if (!containerRef.current) return;
    const animations = containerRef.current.getAnimations({ subtree: true });
    animations.forEach((animation) => {
      animation.playbackRate = rate;
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setAnimationSpeed(2.5)}
      onMouseLeave={() => setAnimationSpeed(1)}
      className={clsx(
        'animated-box-shadow size-[min(80dvw,500px)] transition-transform delay-100 duration-500 ease-out',
        animatedBoxStyles['animated-box-shadow'],
        {
          'opacity-0': !imageLoaded,
        }
      )}
    >
      <div
        className={clsx(
          'relative size-full',
          animatedBoxStyles['animated-box-shadow-child']
        )}
      >
        <Image
          onLoad={() => setImageLoaded(true)}
          className="size-full scale-110 transition-[scale] duration-500 hover:scale-100"
          src={coverPhoto}
          alt="cover-photo"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}

export default AnimatedImage;
