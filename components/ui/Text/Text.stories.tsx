import { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
  title: 'Ui/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'body1',
    children: 'Hello',
  },
};
