import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import P from '../../components/P';
import Section from '../Section';
import { sectionIds } from '../sections';
import { projects } from './data';
import animatedBoxModule from '@/app/css/animated-box.module.css';
import codeIcon from '@/public/misc/code.svg';
import demoIcon from '@/public/misc/play.svg';

function Projects() {
  return (
    <Section id={sectionIds.projects}>
      <div className="mt-10 mb-20 flex flex-1 flex-col items-center">
        <span className="m-1 mt-10 mb-20 text-3xl @md:text-4xl @lg:text-5xl">
          Featured Projects
        </span>
        <div className="flex w-full max-w-360 flex-col gap-16 px-4 @md:px-8 @lg:px-12">
          {projects.map((project, idx) => (
            <div key={idx} className="flex flex-col">
              <div
                className={clsx('flex flex-col gap-6 @md:gap-8', {
                  '@md:flex-row': idx % 2 === 0,
                  '@md:flex-row-reverse': idx % 2 !== 0,
                })}
              >
                <div
                  className={clsx(
                    'flex w-full items-center rounded-3xl transition-all duration-500 @md:w-3/5'
                  )}
                >
                  <div
                    className={clsx(
                      'group/img relative rounded-xl',
                      'shadow-[0_0_20px_rgba(255,255,255,0.25)] group-hover/img:shadow-[0_0_10px_rgba(255,255,255,0.10)]',
                      'group-hover/img:scale-102',
                      'opacity-80 group-hover/img:opacity-100',
                      animatedBoxModule['animated-box-shadow'],
                      animatedBoxModule['hover-only'],
                      animatedBoxModule['small-line'],
                      animatedBoxModule.white
                    )}
                  >
                    <Link
                      href={project.liveUrl ?? project.sourceUrl}
                      className={clsx(
                        'flex',
                        animatedBoxModule['animated-box-shadow-child']
                      )}
                    >
                      <Image
                        className={clsx(
                          'aspect-video w-full object-cover object-center transition-transform duration-500 group-hover/img:scale-125'
                        )}
                        src={project.image}
                        alt={project.title}
                      />
                    </Link>
                  </div>
                </div>
                <div
                  className={clsx(
                    'flex w-full flex-col justify-center @md:w-2/5',
                    {
                      '@md:items-start @md:text-left': idx % 2 === 0,
                      '@md:items-end @md:text-right': idx % 2 !== 0,
                    }
                  )}
                >
                  <div
                    className={clsx(
                      'flex gap-2',
                      'mt-4 mb-2 @md:mt-0 @md:mb-4',
                      {
                        'flex-row': idx % 2 === 0,
                        'flex-row-reverse': idx % 2 !== 0,
                      }
                    )}
                  >
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        rel="noopener noreferrer"
                        className={clsx(
                          'group neon-button flex items-center gap-2 rounded-full transition-all duration-500',
                          'px-4 py-2 hover:px-6'
                        )}
                      >
                        <Image
                          className="white-filter size-5"
                          src={demoIcon}
                          alt="view source code"
                        />
                        Demo
                      </Link>
                    )}
                    <Link
                      href={project.sourceUrl}
                      rel="noopener noreferrer"
                      className={clsx(
                        'group neon-button flex items-center gap-2 rounded-full transition-all duration-500',
                        'px-4 py-2 hover:px-6'
                      )}
                    >
                      <Image
                        className="white-filter size-6"
                        src={codeIcon}
                        alt="view source code"
                      />
                      Source
                    </Link>
                  </div>
                  <Link
                    href={project.liveUrl ?? project.sourceUrl}
                    className="text-h3 neon-link mb-4 transition-all duration-300"
                  >
                    {project.title}
                  </Link>

                  <div className="flex flex-col gap-2">
                    {project.description.map((desc, descIdx) => (
                      <P key={descIdx} className="text-[#b2b2b2]">
                        {desc}
                      </P>
                    ))}
                  </div>

                  <div
                    className={clsx('mt-6 flex flex-wrap gap-2', {
                      'flex-row justify-start': idx % 2 === 0,
                      'flex-row-reverse justify-end': idx % 2 !== 0,
                    })}
                  >
                    {/* <span
                      className={clsx(
                        'rounded-md bg-[#ff1f8f]/60 text-xs text-white/80 select-none',
                        'px-3 pt-1 pb-1.25'
                      )}
                    >
                      {project.year}
                    </span> */}
                    {project.techStack.map((tech) => (
                      <Link
                        key={tech.name}
                        href={tech.url}
                        className={clsx(
                          'neon-button flex items-center rounded-lg bg-neutral-900',
                          'px-3 pt-1 pb-1.25 hover:px-4',
                          'text-xs text-[#b2b2b2] hover:text-white',
                          'transition-all duration-500'
                        )}
                      >
                        {tech.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {idx < projects.length - 1 && (
                <div className="mt-16 h-0.5 w-full bg-[linear-gradient(90deg,transparent,#222222_40%,#222222_60%,transparent)]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Projects;
