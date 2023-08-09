import cn from 'classnames';
import { ParagraphPriceListFragment } from '@models/operations';
import { ParagraphPrice } from './ParagraphPrice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import SwiperCore from 'swiper';

import 'swiper/css';
import styles from './ParagraphPriceList.module.scss';

export interface ParagraphPriceListProps {
  /** Optional className for ParagraphPriceList, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphPriceListFragment;
}

/**
 * ParagraphPriceList description
 */

export const ParagraphPriceList = ({
  className,
  paragraph,
}: ParagraphPriceListProps) => {
  const rootClassName = cn(styles.root, className);
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [priceSwiper, setPriceSwiper] = useState<SwiperCore>();

  return (
    <section className={rootClassName}>
      <ul className={styles.priceMenu}>
        {paragraph.pricesMain?.map((p, i) => (
          <li key={p.id}>
            <button
              onClick={() => {
                priceSwiper?.slideTo(i);
                setActiveIndex(i);
              }}
              className={cn(styles.priceMenuButton, {
                [styles.selected]: activeIndex === i,
              })}
            >
              {p.menuTitle ? p.menuTitle : p.title}
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.pricesMain}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          threshold={10}
          centeredSlides
          centeredSlidesBounds
          watchOverflow
          initialSlide={1}
          onSwiper={setPriceSwiper}
        >
          {paragraph.pricesMain?.map((p) => (
            <SwiperSlide key={p.id}>
              <ParagraphPrice paragraph={p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {paragraph.pricesFooter ? (
        <ParagraphPrice paragraph={paragraph.pricesFooter} columns />
      ) : null}
    </section>
  );
};
