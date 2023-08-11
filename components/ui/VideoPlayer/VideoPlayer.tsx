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
import { Play } from '@components/icon/Play/Play';
import { Pause } from '@components/icon/Pause/Pause';
import { Button } from '../Button/Button';

const ReactPlayerLazy = dynamic(
  () => import('react-player/lazy').then((player) => player),
  { ssr: false }
);

interface VideoProps {
  url: string;
  autoPlay?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  loop?: boolean;
  controls?: boolean;
  playing?: boolean;
  className?: string;
}

export const Video = ({
  url,
  autoPlay = false,
  muted = false,
  playsInline = false,
  loop = false,
  controls = false,
  playing = false,
  className,
}: VideoProps) => {
  return (
    <div className={styles.playerWrapper}>
      <ReactPlayerLazy
        className={cn(styles.player, className)}
        url={url}
        width="100%"
        height="100%"
        playing={playing}
        autoPlay={autoPlay}
        volume={0}
        muted={muted}
        playsinline={playsInline}
        loop={loop}
        controls={controls}
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
  autoPlay?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  loop?: boolean;
  controls?: boolean;
  setHeight?: boolean;
  overlay?: boolean;
}

/**
 * VideoPlayer description
 */

export const VideoPlayer = ({
  className,
  video,
  image,
  priority = false,
  autoPlay = false,
  muted = false,
  playsInline = false,
  loop = false,
  controls = false,
  setHeight = false,
  overlay,
}: VideoPlayerProps) => {
  const [play, setPlay] = useState(autoPlay);
  const rootClassName = cn(styles.root, className, {
    [styles.setHeight]: setHeight,
  });

  return (
    <div className={rootClassName}>
      <>
        {video.__typename === 'MediaVideo' && (
          <MediaVideo media={video}>
            {(url) => (
              <Video
                url={url}
                autoPlay={autoPlay}
                muted={muted}
                playsInline={playsInline}
                loop={loop}
                controls={controls}
                playing={play}
                className={className}
              />
            )}
          </MediaVideo>
        )}

        {video.__typename === 'MediaRemoteVideo' && (
          <MediaRemoteVideo media={video}>
            {(url) => <Video url={url} />}
          </MediaRemoteVideo>
        )}
      </>
      {overlay ? <div className={styles.overlay}></div> : null}
      <Button className={styles.play} onClick={() => setPlay((play) => !play)}>
        {play ? <Pause /> : <Play />}
      </Button>
    </div>
  );
};
