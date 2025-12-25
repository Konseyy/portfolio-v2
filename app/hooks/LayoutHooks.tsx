'use client';

import { sectionIds } from '../sections/sections';
import useSectionSnapping from './useSectionSnapping';

const sectionIdsArray = Object.values(sectionIds);

function LayoutHooks() {
  useSectionSnapping(sectionIdsArray, {
    scrollDebounceMs: 150,
    thresholdPx: 120,
  });

  return null;
}

export default LayoutHooks;
