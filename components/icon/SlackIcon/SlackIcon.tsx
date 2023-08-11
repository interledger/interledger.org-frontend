import cn from 'classnames';

import styles from './SlackIcon.module.scss';

export interface SlackIconProps {
  /** Optional className for SlackIcon, pass in a sass module class to override component default */
  className?: string;
}

/**
 * SlackIcon description
 */

export const SlackIcon = ({ className }: SlackIconProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <svg
      className={rootClassName}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35.377 35.377"
    >
      <path d="M7.432 22.355a3.716 3.716 0 1 1-3.716-3.716h3.716Zm1.873 0a3.716 3.716 0 0 1 7.432 0v9.305a3.716 3.716 0 1 1-7.432 0Zm3.717-14.923a3.716 3.716 0 1 1 3.716-3.716v3.716h-3.716Zm0 1.873a3.716 3.716 0 1 1 0 7.432H3.716a3.716 3.716 0 1 1 0-7.432h9.305Zm14.923 3.716a3.716 3.716 0 1 1 3.716 3.716h-3.716Zm-1.873 0a3.716 3.716 0 0 1-7.432 0V3.716a3.716 3.716 0 1 1 7.432 0Zm-3.717 14.924a3.716 3.716 0 1 1-3.716 3.716v-3.716Zm0-1.873a3.716 3.716 0 1 1 0-7.432h9.305a3.716 3.716 0 0 1 0 7.432Z" />
    </svg>
  );
};
