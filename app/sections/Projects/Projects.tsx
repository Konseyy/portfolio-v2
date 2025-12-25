import Section from '../Section';
import { sectionIds } from '../sections';

function Projects() {
  return (
    <Section id={sectionIds.projects}>
      <div className="flex-1">
        <h1 className="neon text-2xl">Featured Projects</h1>
      </div>
    </Section>
  );
}

export default Projects;
