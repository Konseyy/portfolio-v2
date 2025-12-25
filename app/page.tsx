import LayoutHooks from './hooks/LayoutHooks';
import AboutMe from './sections/AboutMe/AboutMe';
import Welcome from './sections/Welcome/Welcome';

export default function Home() {
  return (
    <div className="size-full">
      <LayoutHooks />
      <Welcome />
      <AboutMe />
    </div>
  );
}
