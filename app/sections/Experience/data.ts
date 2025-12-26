import type { StaticImageData } from 'next/image';

import dhanvantariLogo from '@/public/dhanvantari.jpg';
import giraffe360Logo from '@/public/giraffe.png';
import universityLogo from '@/public/lu.png';

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
        'My first professional experience as a developer, I got the opportunity to work at this digital agency through my university mentorship program.',
        'The internship had me working on a laravel project, where I also got to learn some React.js basics, even though it was still using the class component system, which sparked my initial intereset in frontend development.',
      ],
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
    },
  ] satisfies ExperienceEntry[]
).sort((a, b) => a.date.getTime() - b.date.getTime());
