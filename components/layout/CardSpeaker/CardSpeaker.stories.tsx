import { Meta, StoryObj } from '@storybook/react';
import { CardSpeaker } from './CardSpeaker';

const meta = {
  title: 'Layout/CardSpeaker',
  component: CardSpeaker,
} satisfies Meta<typeof CardSpeaker>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };
