import {
  ParagraphButtonFragment,
  ParagraphSpacerFragment,
  ParagraphTextFragment,
  ParagraphTwoColumnContentFragment,
  ParagraphLargeCalloutTextFragment,
  ParagraphContentTitleFragment,
  ParagraphHighlightedListFragment,
  ParagraphImageFragment,
  ParagraphImageCarouselFragment,
} from '@models/operations';
import dynamic from 'next/dynamic';

const ParagraphImageCarousel = dynamic(() =>
  import('@components/paragraph/ParagraphImageCarousel/ParagraphImageCarousel').then(
    (paragraph) => paragraph.ParagraphImageCarousel
  )
);

const ParagraphImage = dynamic(() =>
  import('@components/paragraph/ParagraphImage/ParagraphImage').then(
    (paragraph) => paragraph.ParagraphImage
  )
);

const ParagraphHighlightedList = dynamic(() =>
  import('@components/paragraph/ParagraphHighlightedList/ParagraphHighlightedList').then(
    (paragraph) => paragraph.ParagraphHighlightedList
  )
);

const ParagraphContentTitle = dynamic(() =>
  import('@components/paragraph/ParagraphContentTitle/ParagraphContentTitle').then(
    (paragraph) => paragraph.ParagraphContentTitle
  )
);

const ParagraphLargeCalloutText = dynamic(() =>
  import('@components/paragraph/ParagraphLargeCalloutText/ParagraphLargeCalloutText').then(
    (paragraph) => paragraph.ParagraphLargeCalloutText
  )
);

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

const ParagraphTwoColumnContent = dynamic(() =>
  import('@components/paragraph/ParagraphTwoColumnContent/ParagraphTwoColumnContent').then(
    (paragraph) => paragraph.ParagraphTwoColumnContent
  )
);

export type ParagraphTypes =
  | ParagraphLargeCalloutTextFragment
  | ParagraphButtonFragment
  | ParagraphTextFragment
  | ParagraphSpacerFragment
  | ParagraphTwoColumnContentFragment
  | ParagraphContentTitleFragment
  | ParagraphHighlightedListFragment
  | ParagraphImageFragment
  | ParagraphImageCarouselFragment
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
    case 'ParagraphImageCarousel':
      return <ParagraphImageCarousel key={paragraph.id} paragraph={paragraph} />;
    case 'ParagraphImage':
      return <ParagraphImage key={paragraph.id} paragraph={paragraph} />;
    case 'ParagraphContentTitle':
      return <ParagraphContentTitle key={paragraph.id} paragraph={paragraph} />;
    case 'ParagraphHighlightedList':
      return <ParagraphHighlightedList key={paragraph.id} paragraph={paragraph} />;
    case 'ParagraphLargeCalloutText':
      return <ParagraphLargeCalloutText key={paragraph.id} paragraph={paragraph} />;
    case 'ParagraphButton':
      return <ParagraphButton key={paragraph.id} paragraph={paragraph} />;
    case 'ParagraphText':
      return <ParagraphText key={paragraph.id} paragraph={paragraph} />;
    case 'ParagraphSpacer':
      return <ParagraphSpacer key={paragraph.id} paragraph={paragraph} />;
    case 'ParagraphTwoColumnContent':
      return <ParagraphTwoColumnContent key={paragraph.id} paragraph={paragraph} />;
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
