'use client';

import useSectionSnapping from './useSectionSnapping';
import { sectionIds } from '../sections/sections';

const sectionIdsArray = Object.values(sectionIds);

function LayoutHooks() {
  useSectionSnapping(sectionIdsArray);

  return null;
}

export default LayoutHooks;
