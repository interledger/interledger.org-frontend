import { ReactNode } from 'react';

export interface WrapLastWordInSpanProps {
  className?: string;
  text: string;
  children?: ReactNode;
}

/**
 * WrapLastWordInSpan description
 */

export const WrapLastWordInSpan = ({
  className,
  text,
  children,
}: WrapLastWordInSpanProps) => {
  const words = text.split(' ');
  const lastWord = words.pop();

  return (
    <>
      {words.join(' ')}{' '}
      <span className={className}>
        {lastWord}
        {children}
      </span>
    </>
  );
};
