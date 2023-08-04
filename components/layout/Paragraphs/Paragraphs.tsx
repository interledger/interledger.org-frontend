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
  ParagraphVideoFragment,
  ParagraphSpeakersGridFragment,
  ParagraphTalksGridFragment,
  ParagraphScheduleFragment,
} from '@models/operations';
import dynamic from 'next/dynamic';

const ParagraphVideo = dynamic(() =>
  import('@components/paragraph/ParagraphVideo/ParagraphVideo').then(
    (paragraph) => paragraph.ParagraphVideo
  )
);

const ParagraphImageGallery = dynamic(() =>
  import(
    '@components/paragraph/ParagraphImageGallery/ParagraphImageGallery'
  ).then((paragraph) => paragraph.ParagraphImageGallery)
);

const ParagraphHighlightedSpeakers = dynamic(() =>
  import(
    '@components/paragraph/ParagraphHighlightedSpeakers/ParagraphHighlightedSpeakers'
  ).then((paragraph) => paragraph.ParagraphHighlightedSpeakers)
);

const ParagraphImageCarousel = dynamic(() =>
  import(
    '@components/paragraph/ParagraphImageCarousel/ParagraphImageCarousel'
  ).then((paragraph) => paragraph.ParagraphImageCarousel)
);

const ParagraphImage = dynamic(() =>
  import('@components/paragraph/ParagraphImage/ParagraphImage').then(
    (paragraph) => paragraph.ParagraphImage
  )
);

const ParagraphHighlightedList = dynamic(() =>
  import(
    '@components/paragraph/ParagraphHighlightedList/ParagraphHighlightedList'
  ).then((paragraph) => paragraph.ParagraphHighlightedList)
);

const ParagraphContentTitle = dynamic(() =>
  import(
    '@components/paragraph/ParagraphContentTitle/ParagraphContentTitle'
  ).then((paragraph) => paragraph.ParagraphContentTitle)
);

const ParagraphLargeCalloutText = dynamic(() =>
  import(
    '@components/paragraph/ParagraphLargeCalloutText/ParagraphLargeCalloutText'
  ).then((paragraph) => paragraph.ParagraphLargeCalloutText)
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
  import(
    '@components/paragraph/ParagraphTwoColumnContent/ParagraphTwoColumnContent'
  ).then((paragraph) => paragraph.ParagraphTwoColumnContent)
);

const ParagraphTalksGrid = dynamic(() =>
  import('@components/paragraph/ParagraphTalksGrid/ParagraphTalksGrid').then(
    (paragraph) => paragraph.ParagraphTalksGrid
  )
);

const ParagraphSpeakersGrid = dynamic(() =>
  import(
    '@components/paragraph/ParagraphSpeakersGrid/ParagraphSpeakersGrid'
  ).then((paragraph) => paragraph.ParagraphSpeakersGrid)
);

const ParagraphSchedule = dynamic(() =>
  import('@components/paragraph/ParagraphSchedule/ParagraphSchedule').then(
    (paragraph) => paragraph.ParagraphSchedule
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
  | ParagraphVideoFragment
  | ParagraphSpeakersGridFragment
  | ParagraphTalksGridFragment
  | ParagraphScheduleFragment
  | null;

export interface ParagraphsProps {
  className?: string;
  paragraphs: Array<ParagraphTypes>;
}

interface ParagraphProps {
  className?: string;
  paragraph: ParagraphTypes;
}

const Paragraph = ({ paragraph, className }: ParagraphProps) => {
  if (!paragraph?.__typename) {
    return null;
  }

  switch (paragraph.__typename) {
    case 'ParagraphVideo':
      return (
        <ParagraphVideo
          key={paragraph.id}
          paragraph={paragraph}
          className={className}
        />
      );
    case 'ParagraphImageGallery':
      return <ParagraphImageGallery key={paragraph.id} paragraph={paragraph} />;
    case 'ParagraphHighlightedSpeakers':
      return (
        <ParagraphHighlightedSpeakers
          key={paragraph.id}
          paragraph={paragraph}
        />
      );
    case 'ParagraphImageCarousel':
      return (
        <ParagraphImageCarousel key={paragraph.id} paragraph={paragraph} />
      );
    case 'ParagraphImage':
      return <ParagraphImage key={paragraph.id} paragraph={paragraph} />;
    case 'ParagraphContentTitle':
      return <ParagraphContentTitle key={paragraph.id} paragraph={paragraph} />;
    case 'ParagraphHighlightedList':
      return (
        <ParagraphHighlightedList key={paragraph.id} paragraph={paragraph} />
      );
    case 'ParagraphLargeCalloutText':
      return (
        <ParagraphLargeCalloutText key={paragraph.id} paragraph={paragraph} />
      );
    case 'ParagraphButton':
      return <ParagraphButton key={paragraph.id} paragraph={paragraph} />;
    case 'ParagraphText':
      return <ParagraphText key={paragraph.id} paragraph={paragraph} />;
    case 'ParagraphSpacer':
      return <ParagraphSpacer key={paragraph.id} paragraph={paragraph} />;
    case 'ParagraphTwoColumnContent':
      return (
        <ParagraphTwoColumnContent key={paragraph.id} paragraph={paragraph} />
      );
    case 'ParagraphSpeakersGrid':
      return <ParagraphSpeakersGrid key={paragraph.id} paragraph={paragraph} />;
    case 'ParagraphTalksGrid':
      return <ParagraphTalksGrid key={paragraph.id} paragraph={paragraph} />;
    case 'ParagraphSchedule':
      return <ParagraphSchedule key={paragraph.id} paragraph={paragraph} />;
    default:
      return null;
  }
};

/**
 * Loads paragraphs by __typename
 */

export const Paragraphs = ({ paragraphs, className }: ParagraphsProps) => {
  return (
    <>
      {paragraphs.map((p) => (
        <Paragraph key={p?.id} paragraph={p} className={className} />
      ))}
    </>
  );
};
