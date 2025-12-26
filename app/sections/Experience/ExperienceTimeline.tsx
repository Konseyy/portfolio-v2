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

function ExperienceTimeline() {
  return (
    <div className="w-[min(900px,90dvw)]">
      <VerticalTimeline lineColor="#888888">
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            date={`${exp.startDate.toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
            })} - ${
              exp.endDate?.toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
              }) ?? 'Present'
            }`}
            className="group"
            dateClassName="pointer-events-none px-2!"
            key={index}
            icon={
              <Link
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={`size-full cursor-pointer overflow-hidden rounded-full border-2 border-white transition-opacity hover:border-[#ff1f8f] ${styles['neon-box-shadow']}`}
                  src={exp.companyLogo}
                  alt={`${exp.company} logo`}
                />
              </Link>
            }
            iconClassName="shadow-none!"
            contentArrowStyle={{ display: 'none' }}
          >
            <div className="flex flex-col">
              <span className="mb-1">
                <span className="text-lg">{exp.company} </span>
                <span className="text-xs font-medium italic opacity-60">
                  {exp.type}
                </span>
              </span>
              <span className="text-2xl font-medium">{exp.position}</span>
              {exp.description.map((desc, i) => (
                <span key={i}>{desc}</span>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceTimeline;
