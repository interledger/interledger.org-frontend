import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MediaRemoteVideo } from './MediaRemoteVideo';

export default {
  title: 'Media/MediaRemoteVideo',
  component: MediaRemoteVideo,
  argTypes: {},
} satisfies Meta<typeof MediaRemoteVideo>;

const Template: StoryFn<typeof MediaRemoteVideo> = (args) => (
  <MediaRemoteVideo {...args}>{(url) => <>{url}</>}</MediaRemoteVideo>
);

export const Default = {
  render: Template,

  args: {
    media: {
      __typename: 'MediaRemoteVideo',
      id: 'dgfdfgdgbfd',
      mediaOembedVideo: 'https://vimeo.com/578098507',
    },
  },
};
