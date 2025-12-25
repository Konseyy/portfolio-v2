import { useEffect } from 'react';

export default function useSectionSnapping(
  sectionIds: string[],
  {
    scrollDebounceMs = 100,
    thresholdPx = 100,
  }: { scrollDebounceMs?: number; thresholdPx?: number } = {}
) {
  useEffect(() => {
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    function scrollToClosestSection() {
      const scrollPosition = window.scrollY;

      const closestSection: {
        element: HTMLElement | null;
        distance: number;
      } = {
        element: null,
        distance: Infinity,
      };

      for (const section of sectionElements) {
        const sectionTop = section.offsetTop;
        const distance = Math.abs(scrollPosition - sectionTop);

        if (distance < closestSection.distance) {
          closestSection.distance = distance;
          closestSection.element = section;
        }
      }

      if (closestSection.element && closestSection.distance <= thresholdPx) {
        closestSection.element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    function onScrollEnd() {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        scrollToClosestSection();
      }, scrollDebounceMs);
    }

    window.addEventListener('scrollend', onScrollEnd);

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
      intersectionObserver.disconnect();
    };
  }, [sectionIds, scrollDebounceMs, thresholdPx]);
}
