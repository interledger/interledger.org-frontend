import cn from 'classnames';

import styles from './FormHasRequired.module.scss';

export interface FormHasRequiredProps {
  /** Optional className for FormHasRequired, pass in a sass module class to override component default */
  className?: string;
}

/**
 * FormHasRequired description
 */

export const FormHasRequired = ({ className }: FormHasRequiredProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <div className={rootClassName}>
      <span>*</span>Indicates required field
    </div>
  );
};
