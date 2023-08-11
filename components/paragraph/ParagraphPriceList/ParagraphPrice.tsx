import cn from 'classnames';
import { ParagraphPriceFragment } from '@models/operations';
import styles from './ParagraphPriceList.module.scss';
import { Text } from '@components/ui/Text/Text';
import { ParagraphPriceOption } from './ParagraphPriceOption';
import { ParagraphDivider } from '../ParagraphDivider/ParagraphDivider';

export interface ParagraphPriceProps {
  /** Optional className for ParagraphPrice, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphPriceFragment;
  columns?: boolean;
}

/**
 * ParagraphPrice description
 */

export const ParagraphPrice = ({
  className,
  paragraph,
  columns,
}: ParagraphPriceProps) => {
  const rootClassName = cn(styles.price, className);

  return (
    <div className={rootClassName}>
      <Text className={styles.priceTitle} variant="h2">
        {paragraph.title}
      </Text>
      <Text className={styles.pricePricing} variant="h3" noMargin>
        {paragraph.pricing}
      </Text>
      <div className={cn(styles.priceOptions, { [styles.columns]: columns })}>
        {paragraph.options?.map((o) =>
          o.__typename === 'ParagraphDivider' ? (
            <ParagraphDivider key={o.id} paragraph={o} />
          ) : o.__typename === 'ParagraphPriceOption' ? (
            <ParagraphPriceOption key={o.id} paragraph={o} />
          ) : null
        )}
      </div>
    </div>
  );
};
