import H3 from '../../components/H3';
import ImageLink from '../../components/ImageLink';
import P from '../../components/P';
import Section from '../Section';
import { sectionIds } from '../sections';
import AnimatedImage from './AnimatedImage';
import { data } from './data';
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
            {data.map((paragraph, idx) =>
              typeof paragraph === 'string' ? (
                <P key={idx}>{paragraph}</P>
              ) : (
                <div key={idx} className="text-paragraph">
                  {paragraph}
                </div>
              )
            )}
            <div className="mt-4 mb-12 flex w-full gap-4">
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
