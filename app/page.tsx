import LayoutHooks from './hooks/LayoutHooks';
import AboutMe from './sections/AboutMe/AboutMe';
import Projects from './sections/Projects/Projects';
import Welcome from './sections/Welcome/Welcome';

export default function Home() {
  return (
    <div className="flex size-full flex-col">
      <LayoutHooks />
      <Welcome />
      <AboutMe />
      <Projects />
    </div>
  );
}
