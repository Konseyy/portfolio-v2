'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

type TextAnimationState = 'delayStart' | 'typing' | 'delayEnd' | 'deleting';

function BlinkingText({
  children,
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
  const [displayedText, setDisplayedText] = useState(startExpanded ? children : '');
  const [textAnimationState, setTextAnimationState] = useState<TextAnimationState>(startExpanded ? 'delayEnd' : 'delayStart');
  const [shouldCursorBlink, setShouldCursorBlink] = useState(true);

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
    if (textAnimationState !== 'delayStart') return;

    const timeout = setTimeout(() => {
      setTextAnimationState('typing');
    }, startDelayMs);

    return () => {
      clearTimeout(timeout);
    };
  }, [textAnimationState, startDelayMs]);

  useEffect(() => {
    if (textAnimationState !== 'delayEnd') return;

    const timeout = setTimeout(() => {
      setTextAnimationState('deleting');
    }, endDelayMs);

    return () => {
      clearTimeout(timeout);
    };
  }, [textAnimationState, endDelayMs]);

  useEffect(() => {
    if (textAnimationState !== 'typing' && textAnimationState !== 'deleting') return;

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
      textAnimationState === 'typing' ? typingCharIntervalMs : deletingCharIntervalMs
    );

    return () => {
      clearInterval(interval);
    };
  }, [textAnimationState, typingCharIntervalMs, deletingCharIntervalMs, children]);

  return (
    <div className={clsx('flex items-center relative', className)}>
      <span className={clsx('whitespace-pre', textClassName)}>{displayedText}</span>
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
