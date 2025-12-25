'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { sectionIds } from '../sections';

const ARROW_VISIBILITY_THRESHOLD = 0.75;

function NavigationArrow() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById(sectionIds.welcome);
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio >= ARROW_VISIBILITY_THRESHOLD);
      },
      { threshold: ARROW_VISIBILITY_THRESHOLD }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={clsx(
        'animate-up-and-down absolute bottom-10 transition-opacity duration-500',
        'scale-100 @lg:scale-110 @2xl:scale-125',
        {
          'pointer-events-none opacity-0': !isVisible,
        }
      )}
      style={{
        filter:
          'drop-shadow(0.022em 0.022em #ff1f8f) drop-shadow(-0.007em -0.007em 7px #ff1f8f)',
      }}
    >
      <svg viewBox="0 0 100 90" width="40" height="36">
        <path
          className="cursor-pointer fill-white transition-[fill] duration-500 hover:fill-[#ff5cae] active:fill-[#ff1f8f] active:duration-0"
          onClick={() => {
            const aboutMeSection = document.getElementById(sectionIds.aboutMe);
            if (aboutMeSection) {
              aboutMeSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          d="M10 7 Q3 12 8 20 L45 82 Q50 90 55 82 L92 20 Q97 12 90 7 L10 7 Z"
        />
      </svg>
    </div>
  );
}

export default NavigationArrow;
