import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MediaVideo } from './MediaVideo';

export default {
  title: 'Media/MediaVideo',
  component: MediaVideo,
  argTypes: {},
} satisfies Meta<typeof MediaVideo>;

const Template: StoryFn<typeof MediaVideo> = (args) => (
  <MediaVideo {...args}>{(url) => <>{url}</>}</MediaVideo>
);

export const Default = {
  render: Template,

  args: {
    media: {
      id: 'sdasdfgbsdfb',
      __typename: 'MediaVideo',
      mediaVideoFile: {
        url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      },
    },
  },
};
