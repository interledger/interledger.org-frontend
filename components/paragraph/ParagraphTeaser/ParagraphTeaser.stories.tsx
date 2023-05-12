import { Meta, StoryObj } from '@storybook/react';
import { ParagraphTeaser } from './ParagraphTeaser';

const meta = {
  title: 'Paragraph/ParagraphTeaser',
  component: ParagraphTeaser,
} satisfies Meta<typeof ParagraphTeaser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageType: "landscapeImage",
    paragraph: {
      id: "5e059680-a8be-48e7-bace-d400917fb3a6",
      __typename: "ParagraphTeaser",
      landscapeImage: {
        __typename: "MediaImage",
        id: "dfgdfghdfg",
        mediaImage: {
          responsive: {
            __typename: "ResponsiveImageStyleDerivative",
            height: 239,
            path: "/sites/default/files/styles/aspect_ratio_16_9_1228w/public/2023-05/Screenshot%202023-05-12%20at%2015.28.43.png.webp?itok=VniYXbXW",
            srcSetPath: "/sites/default/files/styles/aspect_ratio_16_9_320w/public/2023-05/Screenshot%202023-05-12%20at%2015.28.43.png.webp?itok=0rfYp_Zl 320w, /sites/default/files/styles/aspect_ratio_16_9_725w/public/2023-05/Screenshot%202023-05-12%20at%2015.28.43.png.webp?itok=GrWd-ctK 424.88888888889w",
            width: 425
          }
        }
      },
      squareImage: {
        __typename: "MediaImage",
        id: "dfhfgjfjfd",
        mediaImage: {
          responsive: {
            __typename: "ResponsiveImageStyleDerivative",
            height: 239,
            path: "/sites/default/files/styles/aspect_ratio_16_9_1228w/public/2023-05/Screenshot%202023-05-12%20at%2015.28.43.png.webp?itok=VniYXbXW",
            srcSetPath: "/sites/default/files/styles/aspect_ratio_16_9_320w/public/2023-05/Screenshot%202023-05-12%20at%2015.28.43.png.webp?itok=0rfYp_Zl 320w, /sites/default/files/styles/aspect_ratio_16_9_725w/public/2023-05/Screenshot%202023-05-12%20at%2015.28.43.png.webp?itok=GrWd-ctK 424.88888888889w",
            width: 425
          }
        }
      }
    }
  },
};
