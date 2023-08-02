import { useRouter } from 'next/router';
import { useGetInitDataQuery } from '@graphql/hooks';
import cn from 'classnames';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { BackgroundSwirl } from '@components/ui/BackgroundSwirl/BackgroundSwirl';
import styles from './Main.module.scss';
import { ReactNode } from 'react';

export interface MainProps {
  /** Optional className for Main, pass in a sass module class to override component default */
  className?: string;
  children: ReactNode;
}

export const Main = ({ className, children }: MainProps) => {
  const { query } = useRouter();
  const isSummit = !!query.slug?.length && query.slug[0] === 'summit';
  const rootClassName = cn(styles.root, { [styles.dark]: isSummit }, className);

  const { data: initData } = useGetInitDataQuery();

  return (
    <div className={rootClassName}>
      <BackgroundSwirl />
      <Header
        mainMenu={isSummit ? initData?.summitMenu : initData?.mainMenu}
        isSummit={isSummit}
      />
      <main>{children}</main>
      <Footer
        foundationFooterMenu={initData?.foundationFooterMenu}
        summitFooterMenu={initData?.summitFooterMenu}
      />
    </div>
  );
};
