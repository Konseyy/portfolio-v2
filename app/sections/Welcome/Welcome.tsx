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
            'pr-[min(5rem,5vw)] @sm:pr-40 @md:pr-60 @xl:pr-100 @2xl:pr-120'
          )}
        >
          <BlinkingText className="@md:hidden" textClassName="neon" as="h1">
            {smallText}
          </BlinkingText>
          <BlinkingText
            className="hidden @md:flex"
            textClassName="neon"
            as="h1"
          >
            {largeText}
          </BlinkingText>
        </span>
        <NavigationArrow />
      </div>
    </Section>
  );
}

export default Welcome;
