import { MediaVideoFragment } from '@models/operations';
import { ReactElement } from 'react';

export interface MediaVideoProps {
  media: MediaVideoFragment;
  children(url: string): ReactElement;
}

/**
 * MediaVideo description
 *
 * @example <MediaVideo>{(url) => <>{url}</>}</MediaVideo>
 */

export const MediaVideo = ({ media, children }: MediaVideoProps) => {
  if (!media.mediaVideoFile.url) return null;
  return children(media.mediaVideoFile.url);
};
