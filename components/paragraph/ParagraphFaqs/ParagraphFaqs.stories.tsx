import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ParagraphFaqs } from './ParagraphFaqs';

export default {
  title: 'Paragraph/ParagraphFaqs',
  component: ParagraphFaqs,
  argTypes: {},
} as ComponentMeta<typeof ParagraphFaqs>;

const Template: ComponentStory<typeof ParagraphFaqs> = (args) => (
  <ParagraphFaqs {...args} />
);

export const Default = Template.bind({});
Default.args = {
  paragraph: {
    __typename: 'ParagraphFaqs',
    id: 'dsgdsfghdfs',
    faqs: [
      {
        id: '05f3eb35-425e-47c3-a896-1111f6129246',
        question: 'H2 Brief intro summary to the content here',
        answer: {
          processed:
            '<p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n',
        },
      },
      {
        id: 'a5a53330-dae0-4b09-b4fc-2426356147fc',
        question: 'H2 Brief intro summary to the content here',
        answer: {
          processed:
            '<p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n',
        },
      },
      {
        id: '02c9aa3c-2a6b-45e9-a08e-d802e333f5d4',
        question: 'H2 Brief intro summary to the content here',
        answer: {
          processed:
            '<p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n',
        },
      },
    ],
  },
};
