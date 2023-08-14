import { Meta, StoryObj } from '@storybook/react';
import { CardPeople } from './CardPeople';

const meta = {
  title: 'Layout/CardPeople',
  component: CardPeople,
} satisfies Meta<typeof CardPeople>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };
