import { MediaRemoteVideoFragment } from '@models/operations';
import { ReactElement } from 'react';

export interface MediaRemoteVideoProps {
  media: MediaRemoteVideoFragment;
  children(url: string): ReactElement;
}

/**
 * MediaRemoteVideo description
 *
 * @example <MediaRemoteVideo>{(url) => <>{url}</>}</MediaRemoteVideo>
 */

export const MediaRemoteVideo = ({
  media,
  children,
}: MediaRemoteVideoProps) => {
  return children(media.mediaOembedVideo);
};
