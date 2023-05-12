import {
  ParagraphButtonFragment,
  ParagraphSpacerFragment,
  ParagraphTextFragment,
} from '@models/operations';
import dynamic from 'next/dynamic';

const ParagraphButton = dynamic(() =>
  import('@components/paragraph/ParagraphButton/ParagraphButton').then(
    (paragraph) => paragraph.ParagraphButton
  )
);

const ParagraphText = dynamic(() =>
  import('@components/paragraph/ParagraphText/ParagraphText').then(
    (paragraph) => paragraph.ParagraphText
  )
);

const ParagraphSpacer = dynamic(() =>
  import('@components/paragraph/ParagraphSpacer/ParagraphSpacer').then(
    (paragraph) => paragraph.ParagraphSpacer
  )
);

export type ParagraphTypes =
  | ParagraphButtonFragment
  | ParagraphTextFragment
  | ParagraphSpacerFragment
  | null;

export interface ParagraphsProps {
  className?: string;
  paragraphs: Array<ParagraphTypes>;
}

interface ParagraphProps {
  paragraph: ParagraphTypes;
}

const Paragraph = ({ paragraph }: ParagraphProps) => {
  if (!paragraph?.__typename) {
    return null;
  }

  switch (paragraph.__typename) {
    case 'ParagraphButton':
      return <ParagraphButton key={paragraph.id} paragraph={paragraph} />;
    case 'ParagraphText':
      return <ParagraphText key={paragraph.id} paragraph={paragraph} />;
    case 'ParagraphSpacer':
      return <ParagraphSpacer key={paragraph.id} paragraph={paragraph} />;
    default:
      return null;
  }
};

/**
 * Loads paragraphs by __typename
 */

export const Paragraphs = ({ paragraphs }: ParagraphsProps) => {
  return (
    <>
      {paragraphs.map((p) => (
        <Paragraph key={p?.id} paragraph={p} />
      ))}
    </>
  );
};
