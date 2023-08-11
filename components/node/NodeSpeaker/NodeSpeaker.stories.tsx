import { Meta, StoryObj } from '@storybook/react';
import { NodeSpeaker } from './NodeSpeaker';

const meta = {
  title: 'Node/NodeSpeaker',
  component: NodeSpeaker,
} satisfies Meta<typeof NodeSpeaker>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };
