'use client';

import clsx from 'clsx';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { experiences } from './data';
import CollapseIcon from '../../components/icons/CollapseIcon';
import ExpandIcon from '../../components/icons/ExpandIcon';
import styles from '@/app/css/neon-box-shadow.module.css';

import './timeline-style.css';

const LOCALE = 'en-150' as const;

function ExperienceTimeline() {
  const [collapsed, setCollapsed] = useState(experiences.map(() => false));

  const someCollapsed = useMemo(() => collapsed.some((c) => c), [collapsed]);

  return (
    <div className="flex flex-col">
      <div className="relative mt-5 mb-1 flex items-center justify-start gap-2 @min-[1170px]:justify-center">
        <span className="m-1 text-3xl @md:text-4xl @lg:text-5xl">
          The timeline
        </span>
        <button
          className={clsx(
            styles['neon-box-shadow'],
            'absolute top-2 right-2 size-6 cursor-pointer rounded-sm p-1 text-white',
            '@min-[1170px]:relative @min-[1170px]:top-[unset] @min-[1170px]:right-[unset] @min-[1170px]:ml-2'
          )}
          onClick={() => setCollapsed((o) => o.map(() => !someCollapsed))}
        >
          {someCollapsed ? (
            <ExpandIcon className="size-full fill-white" />
          ) : (
            <CollapseIcon className="size-full fill-white" />
          )}
        </button>
      </div>
      <div className="w-[min(1400px,90dvw)]">
        <VerticalTimeline>
          {experiences.map((exp, index) => {
            const endDate = exp.endDate ?? new Date();
            const monthsWorked =
              endDate.getMonth() -
              exp.date.getMonth() +
              1 +
              12 * (endDate.getFullYear() - exp.date.getFullYear());

            const years = Math.floor(monthsWorked / 12);
            const months = monthsWorked % 12;
            let displayedYears = '';
            let displayedMonths = '';
            if (years > 1) displayedYears = `${years} yrs`;
            else if (years === 1) displayedYears = `1 yr`;

            if (months > 1) displayedMonths = `${months} mos`;
            else if (months === 1) displayedMonths = `1 mo`;

            const displayedTenure = [displayedYears, displayedMonths]
              .filter(Boolean)
              .join(' ');

            const displayedDuration = `${exp.date.toLocaleDateString(LOCALE, {
              year: 'numeric',
              month: 'short',
            })} - ${
              exp.endDate?.toLocaleDateString(LOCALE, {
                year: 'numeric',
                month: 'short',
              }) ?? 'Present'
            } (${displayedTenure})`;

            const displayedDate = exp.date.toLocaleDateString(LOCALE, {
              year: 'numeric',
              month: 'short',
            });

            return (
              <VerticalTimelineElement
                className={exp.description?.length ? 'has-description' : ''}
                onTimelineElementClick={() =>
                  setCollapsed((o) =>
                    o.map((val, i) => (i === index ? !val : val))
                  )
                }
                date={
                  exp.entryType === 'duration'
                    ? displayedDuration
                    : displayedDate
                }
                dateClassName="pointer-events-none px-2!"
                key={index}
                icon={
                  <Link
                    href={exp.imageUrl}
                    rel="noopener noreferrer"
                    className="size-full overflow-hidden rounded-full"
                  >
                    <Image
                      className={clsx(
                        styles['neon-box-shadow'],
                        `size-full cursor-pointer rounded-full transition-opacity`,
                        'outline-2 -outline-offset-2 outline-white hover:outline-[#ff1f8f]',
                        'border-2 border-white hover:border-[#ff1f8f]'
                      )}
                      src={exp.image}
                      alt={`${exp.subTitle} logo`}
                    />
                  </Link>
                }
                iconClassName="shadow-none!"
                contentArrowStyle={{ display: 'none' }}
              >
                <div className="flex flex-col">
                  <span className="mb-1">
                    <span className="text-lg">{exp.subTitle} </span>
                    {exp.extraInfo && (
                      <span className="text-xs font-medium italic opacity-60">
                        {exp.extraInfo}
                      </span>
                    )}
                  </span>
                  <span className="text-2xl font-medium">{exp.title}</span>
                  {exp.description?.length && (
                    <motion.div
                      className={clsx('flex flex-col gap-2 overflow-hidden', {
                        'mb-2': !collapsed[index],
                      })}
                      variants={{
                        collapsed: {
                          height: 0,
                          opacity: 0,
                          marginBottom: 0,
                        },
                        expanded: {
                          height: 'auto',
                          opacity: 1,
                          marginBottom: 2,
                        },
                      }}
                      initial={collapsed[index] ? 'collapsed' : 'expanded'}
                      animate={collapsed[index] ? 'collapsed' : 'expanded'}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.description.map((desc, i) => (
                        <span
                          key={i}
                          className="indent-2 text-sm @md:text-base"
                        >
                          {desc}
                        </span>
                      ))}
                    </motion.div>
                  )}
                  {exp.technologies?.length && (
                    <div className="mt-2 flex gap-3">
                      {exp.technologies.map((tech, techIdx) => (
                        <Link
                          key={techIdx}
                          href={tech.url}
                          rel="noopener noreferrer"
                          className={clsx(
                            'group relative size-8 rounded-full transition-all duration-300'
                          )}
                        >
                          <div className="rounded-full bg-black transition-all duration-300 group-hover:scale-120 group-hover:bg-white">
                            <Image
                              className="white-filter group-hover:black-filter p-[3px] transition-transform duration-300 group-hover:scale-70"
                              src={tech.icon}
                              alt={tech.name}
                            />
                          </div>
                          <span
                            className={clsx(
                              'rounded-lg bg-[rgba(255,255,255,0.1)] whitespace-nowrap text-white backdrop-blur-xs',
                              'px-2 py-1',
                              'absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2',
                              'transition-all duration-100',
                              'origin-top scale-0 group-hover:scale-100'
                            )}
                          >
                            {tech.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default ExperienceTimeline;
