import H3 from '../../components/H3';
import ImageLink from '../../components/ImageLink';
import P from '../../components/P';
import Section from '../Section';
import { sectionIds } from '../sections';
import AnimatedImage from './AnimatedImage';
import githubLogo from '@/public/companies/github.svg';
import linkedinLogo from '@/public/companies/linkedin.svg';

function AboutMe() {
  return (
    <Section id={sectionIds.aboutMe}>
      <div className="flex h-screen flex-1 flex-col items-center justify-center">
        <AnimatedImage />
        <div className="mt-10">
          <H3>My name is Valdis</H3>
          <div className="mt-4 flex w-[min(90vw,700px)] flex-col gap-4">
            <P>
              {`I'm currently studying for my Bachelor's degree in Computer Science at the University of Latvia and also working as a Software
              Developer. Most of my experience comes from working as a frontend developer and using technologies like React.js and Electron
              but I also have prior experience with frameworks like NextJS.`}
            </P>
            <P>
              {`Constantly striving to learn new concepts as well as better my knowledge with already familiar technologies. In my free time
              you can find me in the gym, playing simracing or other video games, playing music or just hanging out with friends.`}
            </P>
            <div className="mt-4 flex w-full gap-4">
              <ImageLink
                img={githubLogo}
                tooltip="Github"
                url="https://github.com/Konseyy"
                className="size-12"
              />
              <ImageLink
                img={linkedinLogo}
                tooltip="LinkedIn"
                url="https://www.linkedin.com/in/valdis-g-bukalders-a0b9a2168/"
                className="size-12"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AboutMe;
