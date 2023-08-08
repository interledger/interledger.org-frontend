import { Meta, StoryObj } from '@storybook/react';
import { CardNews } from './CardNews';

const meta = {
  title: 'Layout/CardNews',
  component: CardNews,
} satisfies Meta<typeof CardNews>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };
