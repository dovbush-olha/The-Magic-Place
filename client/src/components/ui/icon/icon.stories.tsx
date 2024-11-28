import { Meta, StoryObj } from '@storybook/react';

import { ICON_NAME, ICON_STATE } from '@/components/ui/icon/consts.ts';

import { Icon } from './icon';

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Components/UI/Icon',
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Solid: Story = {
  args: {
    name: ICON_NAME.HOME,
  },
};

export const Outline: Story = {
  args: {
    name: ICON_NAME.HOME,
    state: ICON_STATE.OUTLINE,
  },
};

export const Bulk: Story = {
  args: {
    name: ICON_NAME.HOME,
    state: ICON_STATE.BULK,
    color: 'yellow',
  },
};

export const CustomColor: Story = {
  args: {
    name: ICON_NAME.TICK,
    color: 'yellow',
  },
};

export const CustomSize: Story = {
  args: {
    name: ICON_NAME.HOME,
    size: 50,
  },
};
