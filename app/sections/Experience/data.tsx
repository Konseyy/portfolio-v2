import type { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

import { technologies, type Technology } from '../../misc/technologies';
import dhanvantariLogo from '@/public/companies/dhanvantari.jpg';
import giraffe360Logo from '@/public/companies/giraffe.png';
import universityLogo from '@/public/companies/lu.png';

type ExperienceEntry = {
  subTitle: string;
  image: StaticImageData;
  imageUrl: string;
  title: string;
  extraInfo?: string;
  entryType: 'duration' | 'event';
  date: Date;
  endDate?: Date;
  description?: (string | ReactNode)[];
  technologies?: Technology[];
};

export const experiences: ExperienceEntry[] = (
  [
    {
      subTitle: 'University of Latvia',
      image: universityLogo,
      imageUrl:
        'https://www.lu.lv/studijas/studiju-programmas/bakalaura-limena-studijas/datorzinatnes/',
      title: 'Bachelor of Computer Science',
      extraInfo: 'Started studies',
      entryType: 'event',
      date: new Date('2020-09-01'),
      description: [
        "I had a slight interest in programming as early as middle school, and during high school got to actually try it out for the first time through my school's programming class, where I learned some very basic Java.",
        "This lead me to pursue computer science at university, and after some research I decided to apply to the University of Latvia's computer science bachelor program, as it seemed to be the most modern program out of the ones I could find in Latvia at the time.",
        'The university got me my first opportunity to work as a professional developer through their mentorship program and web technologies course, where I learned laravel - getting the necessary experience to secure an internship.',
      ],
    },
    {
      subTitle: 'Dhanvantari Solutions',
      image: dhanvantariLogo,
      imageUrl: 'https://www.dsolutions.lv/',
      title: 'Full Stack Developer',
      extraInfo: 'Internship',
      entryType: 'duration',
      date: new Date('2021-07-01'),
      endDate: new Date('2021-08-31'),
      description: [
        "My first professional experience as a developer, I got recommended this internship through the university's mentorship program, since my mentor at the time was working there.",
        'The internship had me working on a laravel project, where I also got to learn some React.js basics, which, even though it was still using the class component system, which sparked my initial intereset in frontend development.',
      ],
      technologies: [technologies.laravel],
    },
    {
      subTitle: 'Dhanvantari Solutions',
      image: dhanvantariLogo,
      imageUrl: 'https://www.dsolutions.lv/',
      title: 'Full Stack Developer',
      entryType: 'duration',
      extraInfo: 'Part time',
      date: new Date('2021-08-31'),
      endDate: new Date('2022-06-06'),
      description: [
        'After my initial internship, I continued working at the agency part-time whilst studying at university, also completing my university\'s "mandatory internship" (6 months) here.',
        'During this time, I got to work on many different projects, but most were backend focused and were heavily reliant on aging technologies like jQuery and Drupal, which definitely did not match my interests at the time, so I started looking into other opportunities.',
        'I did, however, get to dip my toes into React Native development during the end of my time here, which further solidified my interest in frontend development. (Especially since the codebase was using modern react instead of the class component system)',
      ],
      technologies: [
        technologies.drupal,
        technologies.react,
        technologies.reactNative,
      ],
    },
    {
      subTitle: 'Giraffe360',
      image: giraffe360Logo,
      imageUrl: 'https://www.giraffe360.com/',
      title: 'Frontend Developer',
      extraInfo: 'Full time',
      entryType: 'duration',
      date: new Date('2022-06-06'),
      endDate: new Date('2024-06-01'),
      description: ['lorem ipsum dolor sit amet consectetur adipiscing elit'],
      technologies: [
        technologies.nextJs,
        technologies.electron,
        technologies.webgl,
      ],
    },
    {
      subTitle: 'University of Latvia',
      image: universityLogo,
      imageUrl:
        'https://www.lu.lv/studijas/studiju-programmas/bakalaura-limena-studijas/datorzinatnes/',
      title: 'Bachelor of Computer Science',
      extraInfo: 'Finished studies',
      entryType: 'event',
      date: new Date('2024-05-31'),
      description: [
        'For my bachelor thesis and course project (small project before bachelor thesis) I decided to further explore something I was working on at Giraffe360 at the time - surface normal estimations from depth maps, and real time lighting.',
        <span key={'thesis project'}>
          The{' '}
          <Link
            className="neon-inline-link underline-offset-2 transition-all duration-300"
            href="https://dspace.lu.lv/handle/7/66090"
          >
            thesis
          </Link>{' '}
          itself was a project about how to reconstruct meshes from depth maps
          using two different approaches - marching cubes and elastic surface
          nets. After meshes have been constructed it also renders real time
          lighting using the widely used shadow mapping technique.
        </span>,
        <span key={'thesis details'}>
          The{' '}
          <Link
            className="neon-inline-link underline-offset-2 transition-all duration-300"
            href="https://github.com/Konseyy/surface-mesh-estimation"
          >
            project
          </Link>{' '}
          is written in rust, since I&apos;m always interested in trying out
          different languages, and uses opengl for rendering. It was a nice
          opportunity for me to explore rust since the project benefitted from
          the performance gains as mesh reconstruction is CPU-heavy.
        </span>,
      ],
      technologies: [technologies.rust, technologies.openGl],
    },
    {
      subTitle: 'Giraffe360',
      image: giraffe360Logo,
      imageUrl: 'https://www.giraffe360.com/',
      title: 'Senior Frontend Developer',
      entryType: 'duration',
      extraInfo: 'Full time',
      date: new Date('2024-06-01'),
      description: ['lorem ipsum dolor sit amet consectetur adipiscing elit'],
      technologies: [technologies.nextJs, technologies.threeJs],
    },
  ] satisfies ExperienceEntry[]
).sort((a, b) => a.date.getTime() - b.date.getTime());
