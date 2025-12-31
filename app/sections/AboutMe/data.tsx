import Link from 'next/link';
import type { ReactNode } from 'react';

import { technologies } from '../../misc/technologies';

export const data: (string | ReactNode)[] = [
  <span key={1}>
    Ccurrently working as a frontend developer, focused on creating immersive 3D
    applications and interfaces on the web. I have experience working with
    techonologies like{' '}
    <Link
      className="neon-inline-link transition-all duration-300"
      href={technologies.webgl.url}
    >
      {technologies.webgl.name}
    </Link>{' '}
    and{' '}
    <Link
      className="neon-inline-link transition-all duration-300"
      href={technologies.threeJs.url}
    >
      {technologies.threeJs.name}
    </Link>
    , as well as{' '}
    <Link
      className="neon-inline-link transition-all duration-300"
      href={technologies.electron.url}
    >
      {technologies.electron.name}
    </Link>
    ,{' '}
    <Link
      className="neon-inline-link transition-all duration-300"
      href={technologies.reactNative.url}
    >
      {technologies.reactNative.name}
    </Link>{' '}
    and{' '}
    <Link
      className="neon-inline-link transition-all duration-300"
      href={technologies.nextJs.url}
    >
      {technologies.nextJs.name}
    </Link>
    .
  </span>,
  "I finished my Bachelor's degree in Computer Science in 2024 at the University of Latvia, which taught me a lot about the various fields of programming and got me interested in computer graphics and learning other programming languages. The Web Technologies course from my first semester of university is the main driving force that got me interested in frontend development in the first place.",
  'Constantly learning new things and trying to broaden my skillset, currently diving deeper into 3D graphics on the web. In my free time you can also find me in the gym, playing games or music, attempting to fix my own car, or just hanging out with friends.',
];
