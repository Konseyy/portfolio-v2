import { useEffect } from 'react';

const DEBOUNCE_MS = 120;
const THRESHOLD_PX = 120;

export default function useSectionSnapping(sectionIds: string[]) {
  useEffect(() => {
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const scrollState = {
      startY: 0,
      scrolling: false,
    };

    function scrollToClosestSection() {
      const scrollPosition = window.scrollY;
      const viewportHeight = document.documentElement.clientHeight;

      const closestSection: {
        element: HTMLElement | null;
        distance: number;
        direction: 'up' | 'down';
      } = {
        element: null,
        distance: Infinity,
        direction: 'up',
      };

      for (const section of sectionElements) {
        const sectionTop = section.offsetTop;
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;

        const bottomDistance = Math.abs(
          sectionTop + sectionHeight - scrollPosition - viewportHeight
        );
        const topDistance = Math.abs(scrollPosition - sectionTop);

        const distance = Math.min(topDistance, bottomDistance);

        if (distance !== null && Math.abs(distance) < closestSection.distance) {
          closestSection.distance = Math.abs(distance);
          closestSection.element = section;
          closestSection.direction =
            topDistance < bottomDistance ? 'up' : 'down';
        }
      }

      if (closestSection.element && closestSection.distance <= THRESHOLD_PX) {
        closestSection.element.scrollIntoView({
          behavior: 'smooth',
          block: closestSection.direction === 'down' ? 'end' : 'start',
        });
      }
    }

    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    function onScrollEnd() {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        scrollToClosestSection();
        scrollState.scrolling = false;
      }, DEBOUNCE_MS);
    }

    function onScrollStart() {
      if (scrollState.scrolling) return;
      scrollState.scrolling = true;
      scrollState.startY = window.scrollY;
    }

    window.addEventListener('scrollend', onScrollEnd);
    window.addEventListener('scroll', onScrollStart);

    ////////

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (!entry.isIntersecting || !id) continue;

          history.replaceState(null, '', `#${id}`);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    sectionElements.forEach((section) => {
      intersectionObserver.observe(section);
    });

    return () => {
      window.removeEventListener('scrollend', onScrollEnd);
      window.removeEventListener('scroll', onScrollStart);
      intersectionObserver.disconnect();
    };
  }, [sectionIds]);
}
