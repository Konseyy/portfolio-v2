import clsx from 'clsx';

import Section from '../Section';
import BlinkingText from './BlinkingText';
import { sectionIds } from '../sections';
import NavigationArrow from './NavigationArrow';

const smallText = 'Hi, ';
const largeText = 'Hello, ';

function Welcome() {
  return (
    <Section id={sectionIds.welcome}>
      <div className="relative flex size-full items-center justify-center">
        <span
          className={clsx(
            'text-8xl @md:text-[8rem] @lg:text-[10rem] @2xl:text-[16rem]'
          )}
        >
          <BlinkingText className="@lg:hidden" textClassName="neon">
            {smallText}
          </BlinkingText>
          <BlinkingText className="hidden @lg:flex" textClassName="neon">
            {largeText}
          </BlinkingText>
        </span>
        <NavigationArrow />
      </div>
    </Section>
  );
}

export default Welcome;
