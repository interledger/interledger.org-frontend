import { Meta, StoryObj } from '@storybook/react';
import { VideoPlayer } from './VideoPlayer';

const meta = {
  title: 'Ui/VideoPlayer',
  component: VideoPlayer,
} satisfies Meta<typeof VideoPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Local: Story = {
  args: {
    video: {
      __typename: 'MediaVideo',
      id: 'sdfdsfsdfsdfsdf',
      mediaVideoFile: {
        url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      },
    },
    image: {
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

export const Remote: Story = {
  args: {
    video: {
      __typename: 'MediaRemoteVideo',
      id: 'sdfdsfsdfsdfsdf',
      mediaOembedVideo: 'https://vimeo.com/578098507',
    },
    image: {
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
