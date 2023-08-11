import cn from 'classnames';
import { ParagraphPriceOptionFragment } from '@models/operations';
import styles from './ParagraphPriceList.module.scss';

export interface ParagraphPriceOptionProps {
  /** Optional className for ParagraphPriceOption, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphPriceOptionFragment;
}

/**
 * ParagraphPriceOption description
 */

export const ParagraphPriceOption = ({
  className,
  paragraph,
}: ParagraphPriceOptionProps) => {
  const rootClassName = cn(styles.priceOption, className);
  return (
    <div className={rootClassName}>
      <svg
        className={styles.tick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.968 13.948"
      >
        <path
          fill="none"
          stroke="#620ab1"
          strokeWidth="2"
          d="m.733 6.889 5.12 5.524L15.183.621"
        />
      </svg>
      <span>
        {paragraph.title}
        {paragraph.subtitle ? (
          <span className={styles.subtitle}>
            <br />
            {paragraph.subtitle}
          </span>
        ) : null}
      </span>
    </div>
  );
};
