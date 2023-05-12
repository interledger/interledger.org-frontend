import cn from 'classnames';
import styles from './VideoPlayer.module.scss';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import {
  MediaImageFragment,
  MediaRemoteVideoFragment,
  MediaVideoFragment,
} from '@models/operations';
import { MediaImage } from '@components/media/MediaImage/MediaImage';
import { MediaVideo } from '@components/media/MediaVideo/MediaVideo';
import { MediaRemoteVideo } from '@components/media/MediaRemoteVideo/MediaRemoteVideo';
import { Button } from '../Button/Button';

const ReactPlayerLazy = dynamic(
  () => import('react-player/lazy').then((player) => player),
  { ssr: false }
);

interface VideoProps {
  url: string;
}

const Video = ({ url }: VideoProps) => {
  return (
    <div className={styles.playerWrapper}>
      <ReactPlayerLazy
        className={styles.player}
        controls
        url={url}
        width="100%"
        height="100%"
        playing
      />
    </div>
  );
};

export interface VideoPlayerProps {
  /** Optional className for VideoPlayer, pass in a sass module class to override component default */
  className?: string;
  video: MediaVideoFragment | MediaRemoteVideoFragment;
  image: MediaImageFragment;
  priority?: boolean;
}

/**
 * VideoPlayer description
 */

export const VideoPlayer = ({
  className,
  video,
  image,
  priority = false,
}: VideoPlayerProps) => {
  const [play, setPlay] = useState(false);
  const rootClassName = cn(styles.root, className);
  return (
    <div className={rootClassName}>
      {play ? (
        <>
          {video.__typename === 'MediaVideo' && (
            <MediaVideo media={video}>
              {(url) => <Video url={url} />}
            </MediaVideo>
          )}

          {video.__typename === 'MediaRemoteVideo' && (
            <MediaRemoteVideo media={video}>
              {(url) => <Video url={url} />}
            </MediaRemoteVideo>
          )}
        </>
      ) : (
        <div className={styles.thumbnail}>
          <MediaImage className={styles.thumbnailImage} media={image} />
          <Button className={styles.play} onClick={() => setPlay(true)}>
            Play
          </Button>
        </div>
      )}
    </div>
  );
};
