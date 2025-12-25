'use client';

import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import H1 from '../../components/H1';
import H2 from '../../components/H2';
import H3 from '../../components/H3';
import P from '../../components/P';

type TextAnimationState = 'delayStart' | 'typing' | 'delayEnd' | 'deleting';

type AsComponentType = 'h1' | 'h2' | 'h3' | 'p' | undefined;

function AsComponent({
  as,
  className,
  children,
}: {
  as: AsComponentType;
  className?: string;
  children: string | string[];
}) {
  switch (as) {
    case 'h1':
      return <H1 className={className}>{children}</H1>;
    case 'h2':
      return <H2 className={className}>{children}</H2>;
    case 'h3':
      return <H3 className={className}>{children}</H3>;
    case 'p':
      return <P className={className}>{children}</P>;
    default:
      return <span className={className}>{children}</span>;
  }
}

function BlinkingText({
  children,
  pauseWhenNotVisible = true,
  startExpanded = false,
  typingCharIntervalMs = 300,
  deletingCharIntervalMs = 80,
  blinkIntervalMs = 800,
  blinkDelayMs = 500,
  startDelayMs = 2500,
  endDelayMs = 1500,
  className,
  textClassName,
  cursorClassName,
  as,
}: {
  children: string;
  pauseWhenNotVisible?: boolean;
  startExpanded?: boolean;
  typingCharIntervalMs?: number;
  deletingCharIntervalMs?: number;
  blinkIntervalMs?: number;
  blinkDelayMs?: number;
  startDelayMs?: number;
  endDelayMs?: number;
  className?: string;
  textClassName?: string;
  cursorClassName?: string;
  as?: AsComponentType;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [displayedText, setDisplayedText] = useState(
    startExpanded ? children : ''
  );
  const [textAnimationState, setTextAnimationState] =
    useState<TextAnimationState>(startExpanded ? 'delayEnd' : 'delayStart');
  const [shouldCursorBlink, setShouldCursorBlink] = useState(true);
  const [paused, setPaused] = useState(pauseWhenNotVisible ? true : false);

  useEffect(() => {
    if (!pauseWhenNotVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setPaused(!entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [pauseWhenNotVisible]);

  useEffect(() => {
    setShouldCursorBlink(false);

    const timeout = setTimeout(() => {
      setShouldCursorBlink(true);
    }, blinkDelayMs);

    return () => {
      clearTimeout(timeout);
    };
  }, [displayedText, blinkDelayMs]);

  useEffect(() => {
    if (textAnimationState !== 'delayStart' || paused) return;

    const timeout = setTimeout(() => {
      setTextAnimationState('typing');
    }, startDelayMs);

    return () => {
      clearTimeout(timeout);
    };
  }, [textAnimationState, startDelayMs, paused]);

  useEffect(() => {
    if (textAnimationState !== 'delayEnd' || paused) return;

    const timeout = setTimeout(() => {
      setTextAnimationState('deleting');
    }, endDelayMs);

    return () => {
      clearTimeout(timeout);
    };
  }, [textAnimationState, endDelayMs, paused]);

  useEffect(() => {
    if (
      (textAnimationState !== 'typing' && textAnimationState !== 'deleting') ||
      paused
    )
      return;

    const interval = setInterval(
      () => {
        setDisplayedText((prev) => {
          const prevLength = prev.length;

          if (textAnimationState === 'typing') {
            if (prevLength < children.length) {
              return children.slice(0, prevLength + 1);
            } else {
              setTextAnimationState('delayEnd');
              return prev;
            }
          } else {
            if (prevLength > 0) {
              return children.slice(0, prevLength - 1);
            } else {
              setTextAnimationState('delayStart');
              return prev;
            }
          }
        });
      },
      textAnimationState === 'typing'
        ? typingCharIntervalMs
        : deletingCharIntervalMs
    );

    return () => {
      clearInterval(interval);
    };
  }, [
    textAnimationState,
    typingCharIntervalMs,
    deletingCharIntervalMs,
    children,
    paused,
  ]);

  return (
    <div
      ref={containerRef}
      className={clsx('relative flex items-center whitespace-pre', className)}
    >
      <AsComponent as={as} className={textClassName}>
        {displayedText}
      </AsComponent>
      <div
        style={{ animationDuration: `${blinkIntervalMs}ms` }}
        className={clsx(
          'h-[1.05em] w-[0.02em] bg-white',
          {
            'animate-custom-pulse': shouldCursorBlink,
            'text-h1': as === 'h1',
            'text-h2': as === 'h2',
            'text-h3': as === 'h3',
            'text-p': as === 'p',
          },
          cursorClassName
        )}
      />
    </div>
  );
}

export default BlinkingText;
