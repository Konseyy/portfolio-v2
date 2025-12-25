import clsx from 'clsx';
import Section from '../Section';
import BlinkingText from './BlinkingText';
import { sectionIds } from '../sections';

const smallText = 'Hi, ';
const largeText = 'Hello, ';

function Welcome() {
  return (
    <Section id={sectionIds.welcome}>
      <div className="size-full flex items-center justify-center">
        <span className={clsx('text-8xl @md:text-[8rem] @lg:text-[10rem] @2xl:text-[16rem]')}>
          <BlinkingText className="@lg:hidden" textClassName="neon">
            {smallText}
          </BlinkingText>
          <BlinkingText className="hidden @lg:flex" textClassName="neon">
            {largeText}
          </BlinkingText>
        </span>
      </div>
    </Section>
  );
}

export default Welcome;
