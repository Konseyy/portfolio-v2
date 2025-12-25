import Image from 'next/image';
import Section from '../Section';
import { sectionIds } from '../sections';

import coverPhoto from '@/public/me.jpg';

function AboutMe() {
  return (
    <Section id={sectionIds.aboutMe}>
      <div className="size-full flex flex-col items-center justify-center">
        <div className="size-[min(80dvw,500px)] rounded-2xl neon-box overflow-hidden relative">
          <Image
            className="size-full transition-[scale] duration-500 scale-110 hover:scale-100"
            src={coverPhoto}
            alt="cover-photo"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="mt-10">
          <h1 className="text-lg @sm:text-2xl @md:text-4xl @2xl:text-6xl">My name is Valdis</h1>
          <div className="mt-4 w-[min(90dvw,700px)] text-sm @md:text-base @lg:text-lg @2xl:text-xl flex flex-col gap-4">
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
