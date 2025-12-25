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
        'animate-up-and-down absolute bottom-10 scale-60 transition-opacity @lg:scale-75 @2xl:scale-100',
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
          className="cursor-pointer"
          onClick={() => {
            const aboutMeSection = document.getElementById(sectionIds.aboutMe);
            if (aboutMeSection) {
              aboutMeSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          d="M10 7 Q3 12 8 20 L45 82 Q50 90 55 82 L92 20 Q97 12 90 7 L10 7 Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export default NavigationArrow;
