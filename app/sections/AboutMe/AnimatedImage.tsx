'use client';

import Image from 'next/image';
import animatedBoxStyles from '@/app/css/animated-box.module.css';
import coverPhoto from '@/public/me.jpg';
import { useState } from 'react';
import clsx from 'clsx';

function AnimatedImage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={clsx('size-[min(80dvw,500px)] animated-box-shadow', animatedBoxStyles['animated-box-shadow'], {
        'opacity-0': !imageLoaded,
      })}
    >
      <div className={clsx('relative size-full', animatedBoxStyles['animated-box-shadow-child'])}>
        <Image
          onLoad={() => setImageLoaded(true)}
          className="size-full transition-[scale] duration-500 scale-110 hover:scale-100"
          src={coverPhoto}
          alt="cover-photo"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}

export default AnimatedImage;
