import type { StaticImageData } from 'next/image';

import { technologies, type Technology } from '../../misc/technologies';
import mandelbrotScreenshot from '@/public/projects/mandelbrot.png';
import portfolioScreenshot from '@/public/projects/portfolio_v2.png';

interface Project {
  title: string;
  description: string[];
  image: StaticImageData;
  techStack: Technology[];
  sourceUrl: string;
  year: number;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    year: 2025,
    description: [
      'My personal portfolio website (this website), built using Next.js and tailwind.',
      'Features a dark neon and responsive design, showcases my projects, experience, and skills in an interactive manner.',
    ],
    image: portfolioScreenshot,
    techStack: [
      technologies.nextJs,
      technologies.react,
      technologies.typeScript,
      technologies.tailwind,
    ],
    sourceUrl: 'https://github.com/Konseyy/portfolio-v2',
    liveUrl: 'https://valdis.me/',
  },
  {
    title: 'Mandelbrot Set Visualizer',
    year: 2025,
    description: [
      'A mandelbrot set visualization tool that computes the set on the GPU, allowing real time rendering of the fractal.',
      "Leverages Three.js's TSL (Three shading language) to potentially utilise the new WebGPU standard on browsers where it is available.",
      'Camera position and animation speed is fixed for simlpicity, the color palette is adjusted during runtime, and smooth coloring has been implemented to negate banding effects.',
    ],
    image: mandelbrotScreenshot,
    techStack: [technologies.typeScript, technologies.threeJs],
    sourceUrl: 'https://github.com/Konseyy/mandelbrot-gpu',
    liveUrl: 'https://mandelbrot.valdis.me/',
  },
] as const;
