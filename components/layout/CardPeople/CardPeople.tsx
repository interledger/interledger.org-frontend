import cn from 'classnames';

import { MediaImage } from '@components/media/MediaImage/MediaImage';
import { Modal } from '@components/ui/Modal/Modal';
import { Text } from '@components/ui/Text/Text';
import { RichText } from '@components/util/RichText/RichText';
import { NodePeopleCardFragment } from '@models/operations';
import { useState } from 'react';
import { Card, CardButton, CardContent, CardImage } from '../Card/Card';
import styles from './CardPeople.module.scss';
import { Social } from '@components/nav/Social/Social';

export interface CardPeopleProps {
  /** Optional className for CardPeople, pass in a sass module class to override component default */
  className?: string;
  people: NodePeopleCardFragment;
}

/**
 * CardPeople description
 */

export const CardPeople = ({ className, people }: CardPeopleProps) => {
  const rootClassName = cn(styles.root, className);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card className={rootClassName}>
        <CardImage media={people.teaser.squareImage} />
        <CardContent>
          <Text variant="h2" noMargin>
            {people.title}
          </Text>
          <Text variant="body2">{people.position}</Text>
        </CardContent>
        <CardButton onClick={() => setShowModal(true)} />
      </Card>
      <Modal
        show={showModal}
        closeAriaLabel={`Close ${people.title}`}
        onClose={() => setShowModal(false)}
      >
        <article className={styles.peopleModal}>
          <div className={styles.image}>
            <MediaImage media={people.teaser.squareImage} />
          </div>
          <div className={styles.content}>
            <Text variant="h2" noMargin>
              {people.title}
            </Text>
            <Text variant="body2">{people.position}</Text>
            {people.social ? (
              <Social className={styles.social} social={people.social} />
            ) : null}
            <RichText html={people.description?.processed} />
          </div>
        </article>
      </Modal>
    </>
  );
};
