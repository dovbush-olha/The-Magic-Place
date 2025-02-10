import { Meta, StoryObj } from '@storybook/react';

import { BUTTON_VARIANTS } from '@/components/ui/button/constants.ts';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/UI/Button',
};

export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  args: {
    children: 'Button',
    variant: BUTTON_VARIANTS.PRIMARY,
    type: 'button',
  },
};

export const PrimaryDisabledButton: Story = {
  args: {
    children: 'Button',
    variant: BUTTON_VARIANTS.PRIMARY,
    type: 'button',
    disabled: true,
  },
};

export const SecondaryButton: Story = {
  args: {
    children: 'Button',
    variant: BUTTON_VARIANTS.SECONDARY,
    type: 'button',
  },
};

export const DisabledSecondaryButton: Story = {
  args: {
    children: 'Button',
    variant: BUTTON_VARIANTS.SECONDARY,
    type: 'button',
    disabled: true,
  },
};

export const SecondaryLink: Story = {
  args: {
    children: 'Link',
    variant: BUTTON_VARIANTS.SECONDARY,
    href: '#',
  },
};
