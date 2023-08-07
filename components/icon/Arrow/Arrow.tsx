import cn from 'classnames';

import styles from './Arrow.module.scss';

export interface ArrowProps {
  /** Optional className for Arrow, pass in a sass module class to override component default */
  className?: string;
}

/**
 * Arrow description
 */

export const Arrow = ({ className }: ArrowProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <svg
      className={rootClassName}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 25"
    >
      <path
        fill="var(--color-primary)"
        d="M38.658 24.7a1 1 0 0 1 .008-1.413L48.7 13.368H1a1 1 0 0 1-1-1 1 1 0 0 1 1-1h47.435l-9.768-9.659a1 1 0 0 1-.008-1.413 1 1 0 0 1 1.413-.009l11.631 11.5a1 1 0 0 1 .3.712.994.994 0 0 1-.3.71l-11.631 11.5a1 1 0 0 1-.7.289.994.994 0 0 1-.714-.298Z"
      />
    </svg>
  );
};
