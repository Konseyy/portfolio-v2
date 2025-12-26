'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { experiences } from './data';
import styles from '@/app/css/neon-box-shadow.module.css';

import './timeline-style.css';

const LOCALE = 'en-150' as const;

function ExperienceTimeline() {
  return (
    <div className="w-[min(1400px,90dvw)]">
      <VerticalTimeline lineColor="#888888">
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
              date={
                exp.entryType === 'duration' ? displayedDuration : displayedDate
              }
              className="group"
              dateClassName="pointer-events-none px-2!"
              key={index}
              icon={
                <Link
                  href={exp.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className={`size-full cursor-pointer overflow-hidden rounded-full border-2 border-white transition-opacity hover:border-[#ff1f8f] ${styles['neon-box-shadow']}`}
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
                <div className="flex flex-col gap-2">
                  {exp.description?.map((desc, i) => (
                    <span key={i} className="indent-2">
                      {desc}
                    </span>
                  ))}
                </div>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceTimeline;
