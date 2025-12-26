import type { StaticImageData } from 'next/image';

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
  description?: string[];
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
        technologies.laravel,
        technologies.drupal,
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
      technologies: [technologies.rust],
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
