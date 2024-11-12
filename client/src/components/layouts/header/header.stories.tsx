import { Meta, StoryObj } from '@storybook/react';

import { Header } from './header';

const meta: Meta<typeof Header> = {
  title: 'Layouts/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};
