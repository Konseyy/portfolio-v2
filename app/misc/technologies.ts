import type { StaticImageData } from 'next/image';

import drupalLogo from '@/public/technologies/drupal.svg';
import electronLogo from '@/public/technologies/electron.svg';
import laravelLogo from '@/public/technologies/laravel.svg';
import nextJsLogo from '@/public/technologies/nextjs.svg';
import reactLogo from '@/public/technologies/react.svg';
import rustLogo from '@/public/technologies/rust.svg';
import threeJsLogo from '@/public/technologies/threejs.svg';
import webglLogo from '@/public/technologies/webgl.svg';

export type Technology = {
  name: string;
  icon: StaticImageData;
  url: string;
};

export const technologies = {
  laravel: {
    name: 'Laravel',
    icon: laravelLogo,
    url: 'https://laravel.com/',
  },
  drupal: {
    name: 'Drupal',
    icon: drupalLogo,
    url: 'https://new.drupal.org/home',
  },
  electron: {
    name: 'Electron',
    icon: electronLogo,
    url: 'https://www.electronjs.org/',
  },
  reactNative: {
    name: 'React Native',
    icon: reactLogo,
    url: 'https://reactnative.dev/',
  },
  nextJs: {
    name: 'Next.js',
    icon: nextJsLogo,
    url: 'https://nextjs.org/',
  },
  rust: {
    name: 'Rust',
    icon: rustLogo,
    url: 'https://www.rust-lang.org/',
  },
  threeJs: {
    name: 'Three.js',
    icon: threeJsLogo,
    url: 'https://threejs.org/',
  },
  webgl: {
    name: 'WebGL',
    icon: webglLogo,
    url: 'https://www.khronos.org/webgl/',
  },
} as const satisfies {
  [technology: string]: Technology;
};
