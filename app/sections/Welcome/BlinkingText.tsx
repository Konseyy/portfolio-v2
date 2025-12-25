'use client';

import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

type TextAnimationState = 'delayStart' | 'typing' | 'delayEnd' | 'deleting';

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
      className={clsx('relative flex items-center', className)}
    >
      <span className={clsx('whitespace-pre', textClassName)}>
        {displayedText}
      </span>
      <div
        style={{ animationDuration: `${blinkIntervalMs}ms` }}
        className={clsx(
          'h-[1.05em] w-[0.02em] bg-white',
          {
            'animate-custom-pulse': shouldCursorBlink,
          },
          cursorClassName
        )}
      />
    </div>
  );
}

export default BlinkingText;
