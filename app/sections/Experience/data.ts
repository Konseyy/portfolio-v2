import type { StaticImageData } from 'next/image';

import dhanvantariLogo from '@/public/dhanvantari.jpg';
import giraffe360Logo from '@/public/giraffe.png';

type ExperienceEntry = {
  company: string;
  companyLogo: StaticImageData;
  companyUrl: string;
  position: string;
  type: 'Full time' | 'Part time' | 'Internship';
  startDate: Date;
  endDate: Date | null;
  description: string[];
};

export const experiences: ExperienceEntry[] = [
  {
    company: 'Dhanvantari Solutions',
    companyLogo: dhanvantariLogo,
    companyUrl: 'https://www.dsolutions.lv/',
    position: 'Full Stack Developer',
    type: 'Internship',
    startDate: new Date('2021-07-01'),
    endDate: new Date('2021-08-31'),
    description: ['lorem ipsum dolor sit amet consectetur adipiscing elit'],
  },
  {
    company: 'Dhanvantari Solutions',
    companyLogo: dhanvantariLogo,
    companyUrl: 'https://www.dsolutions.lv/',
    position: 'Full Stack Developer',
    type: 'Part time',
    startDate: new Date('2021-08-31'),
    endDate: new Date('2022-06-06'),
    description: ['lorem ipsum dolor sit amet consectetur adipiscing elit'],
  },
  {
    company: 'Giraffe360',
    companyLogo: giraffe360Logo,
    companyUrl: 'https://www.giraffe360.com/',
    position: 'Frontend Developer',
    type: 'Full time',
    startDate: new Date('2022-06-06'),
    endDate: new Date('2024-06-01'),
    description: ['lorem ipsum dolor sit amet consectetur adipiscing elit'],
  },
  {
    company: 'Giraffe360',
    companyLogo: giraffe360Logo,
    companyUrl: 'https://www.giraffe360.com/',
    position: 'Senior Frontend Developer',
    type: 'Full time',
    startDate: new Date('2024-06-01'),
    endDate: null,
    description: ['lorem ipsum dolor sit amet consectetur adipiscing elit'],
  },
] as const;
