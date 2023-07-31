import { useRouter } from 'next/router';
import { useGetInitDataQuery } from '@graphql/hooks';
import cn from 'classnames';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { BackgroundSwirl } from '@components/ui/BackgroundSwirl/BackgroundSwirl';
import styles from './Main.module.scss';

export interface MainProps {
  /** Optional className for Main, pass in a sass module class to override component default */
  className?: string;
  children: React.ReactNode;
  theme?: 'dark' | 'light';
}

export const Main = ({ className, children, theme }: MainProps) => {
  const rootClassName = cn(styles.root, className);

  const { data: initData } = useGetInitDataQuery();

  return (
    <div className={rootClassName}>
      <BackgroundSwirl theme={theme} />
      <Header mainMenu={initData?.mainMenu} />
      <main>{children}</main>
      <Footer footerMenu={initData?.footerMenu} />
    </div>
  );
};
