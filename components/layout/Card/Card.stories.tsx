import { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Text } from '@components/ui/Text/Text';
import * as MediaImageStories from '@components/media/MediaImage/MediaImage.stories';

const meta = {
  title: 'Layout/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Card.Image
          media={{
            __typename: 'MediaImage',
            id: 'gdsfgdfgdsfg',
            mediaImage: {
              __typename: 'Image' as const,
              responsiveVariations: [
                {
                  __typename: 'ResponsiveImageStyleDerivative' as const,
                  srcSet: 'https://via.placeholder.com/1600x900 325w',
                  url: 'https://via.placeholder.com/1600x900',
                  height: 900,
                  width: 1600,
                  name: '',
                },
              ],
            },
          }}
        />
        <Card.Content>
          <Text variant="h2">Title</Text>
          <Text variant="body1">Short description</Text>
        </Card.Content>
        <Card.Link link="/" />
      </>
    ),
  },
};
