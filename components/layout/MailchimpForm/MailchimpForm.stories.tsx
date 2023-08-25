import { Meta, StoryObj } from '@storybook/react';
import { MailchimpForm } from './MailchimpForm';

const meta = {
  title: 'Layout/MailchimpForm',
  component: MailchimpForm,
} satisfies Meta<typeof MailchimpForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };
