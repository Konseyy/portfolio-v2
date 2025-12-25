'use client';

import useSectionSnapping from './useSectionSnapping';
import { sectionIds } from '../sections/sections';

const sectionIdsArray = Object.values(sectionIds);

function LayoutHooks() {
  useSectionSnapping(sectionIdsArray, {
    scrollDebounceMs: 150,
    thresholdPx: 120,
  });

  return null;
}

export default LayoutHooks;
