import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const defaultArgs = {
  children: 'submit',
  primary: false,
  size: 'medium' as const,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
  primary: true,
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export const Large = Template.bind({});
Large.args = {
  ...defaultArgs,
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  size: 'small',
};
