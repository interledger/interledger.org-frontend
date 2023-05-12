---
to: <%= absPath %>/<%= fullComponentName %>.stories.tsx
---
import { Meta, StoryObj } from '@storybook/react';
import { <%= fullComponentName %> } from './<%= fullComponentName %>';

const meta = {
  title: '<%= category %>/<%= fullComponentName %>',
  component: <%= fullComponentName %>,
} satisfies Meta<typeof <%= fullComponentName %>>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };
