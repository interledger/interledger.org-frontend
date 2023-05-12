import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MediaImage } from './MediaImage';

export default {
  title: 'Media/MediaImage',
  component: MediaImage,
  argTypes: {},
} satisfies Meta<typeof MediaImage>;

export const Default = {
  args: {
    media: {
      __typename: 'MediaImage',
      id: 'gdsfgdfgdsfg',
      mediaImage: {
        __typename: 'Image' as const,
        responsive: {
          __typename: 'ResponsiveImageStyleDerivative' as const,
          srcSetPath: 'https://via.placeholder.com/1600x900 325w',
          path: 'https://via.placeholder.com/1600x900',
          height: 900,
          width: 1600,
        },
      },
    },
  },
};
