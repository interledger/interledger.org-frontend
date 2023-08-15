import cn from 'classnames';

import styles from './CardPeople.module.scss';
import { NodePeopleCardFragment } from '@models/operations';
import {
  Card,
  CardImage,
  CardContent,
  CardLink,
  CardButton,
} from '../Card/Card';
import { Text } from '@components/ui/Text/Text';
import { useState } from 'react';
import { Modal } from '@components/ui/Modal/Modal';

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
        {people.title}
      </Modal>
    </>
  );
};
