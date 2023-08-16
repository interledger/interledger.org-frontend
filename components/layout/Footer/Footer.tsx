import { FooterMenu } from '@components/nav/FooterMenu/FooterMenu';
import { Social } from '@components/nav/Social/Social';
import { Text } from '@components/ui/Text/Text';
import { FooterMenuFragment, SocialFragment } from '@models/operations';
import cn from 'classnames';
import styles from './Footer.module.scss';
import { Button } from '@components/ui/Button/Button';
import { useEffect, useState } from 'react';
import { Modal } from '@components/ui/Modal/Modal';
import { MailchimpForm } from '../MailchimpForm/MailchimpForm';
import { useRouter } from 'next/router';

export interface FooterProps {
  /** Optional className for Footer, pass in a sass module class to override component default */
  className?: string;
  foundationFooterMenu?: FooterMenuFragment | null;
  summitFooterMenu?: FooterMenuFragment | null;
  social?: SocialFragment | null;
}

export const Footer = ({
  className,
  foundationFooterMenu,
  summitFooterMenu,
  social,
}: FooterProps) => {
  const rootClassName = cn(styles.root, className);
  const year = new Date().getFullYear();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Close menu when navigation triggered
    const handleRouteChange = () => {
      setShowModal(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events, setShowModal]);

  return (
    <>
      <footer className={rootClassName}>
        <div className={styles.legal}>
          <Text variant="body2">
            Documentation licensed under CC BY 4.0.
            <br />
            &copy; {year}, Interledger Foundation
          </Text>
        </div>
        {social && (
          <div className={styles.social}>
            <Button
              className={styles.mailingList}
              onClick={() => setShowModal(true)}
            >
              Join <span>Mailing List</span>
            </Button>
            <Social social={social} />
          </div>
        )}
        {foundationFooterMenu && (
          <FooterMenu
            className={styles.foundationMenu}
            footerMenu={foundationFooterMenu}
          />
        )}
        {summitFooterMenu && (
          <FooterMenu
            className={styles.summitMenu}
            footerMenu={summitFooterMenu}
          />
        )}
      </footer>
      <Modal
        show={showModal}
        closeAriaLabel={`Close Join Mailing List Form`}
        onClose={() => setShowModal(false)}
      >
        <MailchimpForm />
      </Modal>
    </>
  );
};
