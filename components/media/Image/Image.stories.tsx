import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';
import { Image } from './Image';
import { imageData } from '@mockdata/image';

export default {
  title: 'Ui/Image',
  component: Image,
  argTypes: {},
} satisfies Meta<typeof Image>;

export const Template: StoryObj<typeof Image> = {
  render: (args) => <Image {...args} alt="" />,
};

export const Default = {
  render: Template,

  args: {
    responsiveImageStyle: imageData.responsive,
    alt: 'Test alt',
  },
};
