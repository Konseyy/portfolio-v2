import LayoutHooks from './hooks/LayoutHooks';
import AboutMe from './sections/AboutMe/AboutMe';
import Experience from './sections/Experience/Experience';
import Projects from './sections/Projects/Projects';
import Welcome from './sections/Welcome/Welcome';

export default function Home() {
  return (
    <div className="flex size-full flex-col">
      <LayoutHooks />
      <Welcome />
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  );
}
