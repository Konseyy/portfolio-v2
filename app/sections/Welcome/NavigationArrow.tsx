'use client';

import { sectionIds } from '../sections';

function NavigationArrow() {
  return (
    <div
      className="animate-up-and-down absolute bottom-10 scale-60 @lg:scale-75 @2xl:scale-100"
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
