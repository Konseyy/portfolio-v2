'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import animatedBoxStyles from '@/app/css/animated-box.module.css';
import coverPhoto from '@/public/me.jpg';

function AnimatedImage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={clsx(
        'animated-box-shadow size-[min(80dvw,500px)]',
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
