import { Meta, StoryObj } from '@storybook/react';
import { CardTalk } from './CardTalk';

const meta = {
  title: 'Layout/CardTalk',
  component: CardTalk,
} satisfies Meta<typeof CardTalk>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };
