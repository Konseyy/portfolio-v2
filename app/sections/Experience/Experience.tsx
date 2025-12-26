import Section from '../Section';
import { sectionIds } from '../sections';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceTimeline from './ExperienceTimeline';

function Experience() {
  return (
    <Section id={sectionIds.experience}>
      <div className="flex flex-1 items-center justify-center">
        <ExperienceTimeline />
      </div>
    </Section>
  );
}

export default Experience;
