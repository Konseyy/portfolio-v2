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
      <div className="relative flex flex-1 items-center justify-center">
        <span
          className={clsx(
            'text-8xl @md:text-[8rem] @lg:text-[10rem] @xl:text-[12rem] @2xl:text-[16rem]',
            'pr-[min(5rem,5dvw)] @sm:pr-40 @md:pr-60 @xl:pr-100 @2xl:pr-120'
          )}
        >
          <BlinkingText className="@md:hidden" textClassName="neon">
            {smallText}
          </BlinkingText>
          <BlinkingText className="hidden @md:flex" textClassName="neon">
            {largeText}
          </BlinkingText>
        </span>
        <NavigationArrow />
      </div>
    </Section>
  );
}

export default Welcome;
