import Section from '../Section';
import { sectionIds } from '../sections';
import AnimatedImage from './AnimatedImage';

function AboutMe() {
  return (
    <Section id={sectionIds.aboutMe}>
      <div className="flex h-dvh flex-1 flex-col items-center justify-center">
        <AnimatedImage />
        <div className="mt-10">
          <h1 className="text-lg @sm:text-2xl @md:text-4xl @2xl:text-6xl">
            My name is Valdis
          </h1>
          <div className="mt-4 flex w-[min(90dvw,700px)] flex-col gap-4 text-sm @md:text-base @lg:text-lg @2xl:text-xl">
            <p>
              {`I'm currently studying for my Bachelor's degree in Computer Science at the University of Latvia and also working as a Software
              Developer. Most of my experience comes from working as a frontend developer and using technologies like React.js and Electron
              but I also have prior experience with frameworks like NextJS.`}
            </p>
            <p>
              {`Constantly striving to learn new concepts as well as better my knowledge with already familiar technologies. In my free time
              you can find me in the gym, playing simracing or other video games, playing music or just hanging out with friends.`}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AboutMe;
