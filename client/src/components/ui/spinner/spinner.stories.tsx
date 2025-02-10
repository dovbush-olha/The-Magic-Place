import { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './spinner.tsx';

const meta: Meta<typeof Spinner> = {
  title: 'Components/UI/Spinner',
  component: Spinner,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    isLoading: true,
  },
};
