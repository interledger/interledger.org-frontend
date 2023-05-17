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
  ParagraphHighlightedSpeakersFragment,
  ParagraphImageGalleryFragment,
} from '@models/operations';
import dynamic from 'next/dynamic';

const ParagraphImageGallery = dynamic(() =>
  import('@components/paragraph/ParagraphImageGallery/ParagraphImageGallery').then(
    (paragraph) => paragraph.ParagraphImageGallery
  )
);

const ParagraphHighlightedSpeakers = dynamic(() =>
  import('@components/paragraph/ParagraphHighlightedSpeakers/ParagraphHighlightedSpeakers').then(
    (paragraph) => paragraph.ParagraphHighlightedSpeakers
  )
);

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
  | ParagraphHighlightedSpeakersFragment
  | ParagraphImageGalleryFragment
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
    case 'ParagraphImageGallery':
      return <ParagraphImageGallery key={paragraph.id} paragraph={paragraph} />;
    case 'ParagraphHighlightedSpeakers':
      return <ParagraphHighlightedSpeakers key={paragraph.id} paragraph={paragraph} />;
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
