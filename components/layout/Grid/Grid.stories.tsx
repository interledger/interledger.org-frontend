import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';

const meta = {
  title: 'Layout/Grid',
  component: Grid,
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    display: 'grid',
    children: (
      <>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
      </>
    ),
  },
};

export const List: Story = {
  args: {
    display: 'list',
    children: (
      <>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
      </>
    ),
  },
};

export const Fill: Story = {
  args: {
    display: 'grid',
    fill: true,
    children: (
      <>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
        <div style={{ backgroundColor: 'grey', paddingBottom: '10%' }}></div>
      </>
    ),
  },
};
