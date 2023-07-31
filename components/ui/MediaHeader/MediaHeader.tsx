import cn from 'classnames';

import styles from './MediaHeader.module.scss';
import {
  MediaVideoFragment,
  MediaRemoteVideoFragment,
  MediaImageFragment,
} from '@models/operations';
import { useState } from 'react';
import { MediaImage } from '@components/media/MediaImage/MediaImage';
import { Maybe } from '@models/graphql';
import { VisuallyHidden } from '@components/util/VisuallyHidden/VisuallyHidden';
import { Video } from '../VideoPlayer/VideoPlayer';
import { MediaVideo } from '@components/media/MediaVideo/MediaVideo';
import { MediaRemoteVideo } from '@components/media/MediaRemoteVideo/MediaRemoteVideo';

export interface MediaHeaderProps {
  /** Optional className for MediaHeader, pass in a sass module class to override component default */
  className?: string;
  video?: Maybe<MediaVideoFragment | MediaRemoteVideoFragment>;
  image: MediaImageFragment;
}

/**
 * MediaHeader description
 */

export const MediaHeader = ({ className, image, video }: MediaHeaderProps) => {
  const [playing, setPlaying] = useState(false);
  const rootClassName = cn(styles.root, className);

  const playVideo = () => {
    setPlaying(true);
  };

  return (
    <div className={rootClassName}>
      {!playing ? <MediaImage className={styles.media} media={image} /> : null}
      {!playing && video ? (
        <button className={styles.playButton} onClick={playVideo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 76"
            aria-hidden="true"
            focusable="false"
          >
            <path fill="#fff" d="M64 38 0 76V0Z" opacity=".745" />
          </svg>
          <VisuallyHidden>Play Video</VisuallyHidden>
        </button>
      ) : null}

      {playing && video ? (
        <>
          {video.__typename === 'MediaVideo' && (
            <MediaVideo media={video}>
              {(url) => (
                <Video
                  className={styles.media}
                  url={url}
                  playing={playing}
                  controls
                />
              )}
            </MediaVideo>
          )}

          {video.__typename === 'MediaRemoteVideo' && (
            <MediaRemoteVideo media={video}>
              {(url) => (
                <Video
                  className={styles.media}
                  url={url}
                  playing={playing}
                  controls
                />
              )}
            </MediaRemoteVideo>
          )}
        </>
      ) : null}
    </div>
  );
};
