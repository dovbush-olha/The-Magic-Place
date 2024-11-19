import { Meta, StoryObj } from '@storybook/react';

import { NavLink } from './nav-link';

const meta: Meta<typeof NavLink> = {
  title: 'Components/Navigation/NavLink',
  component: NavLink,
};

export default meta;

type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  args: {
    to: '/',
    children: 'Link',
  },
};
